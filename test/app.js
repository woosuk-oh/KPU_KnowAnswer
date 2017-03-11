var e = require('express');
var body_parser_1 = require('body-parser');
var path_1 = require('path');
var http_1 = require('http');
var firebase_1 = require('firebase');
/**
 * @class Server
 */
var Server = (function () {
    function Server() {
        this.app = e();
        this.config();
        this.routes();
    }
    /**
     * @method bootstrap
     */
    Server.bootstrap = function () {
        return new Server;
    };
    /**
     * @method config
     */
    Server.prototype.config = function () {
        this.app.set("views", path_1.join(__dirname, "views"));
        this.app.set("view engine", "html");
        this.app.use(body_parser_1.json());
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        this.app.use(e.static(path_1.join(__dirname, "public")));
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    };
    /**
     * @method routes
     */
    Server.prototype.routes = function () {
        var router = e.Router();
        router.get("/InputKeyPage", function (req, res) {
            var db = firebase_1.database();
            var key = req.query.keyvalue;
            console.log("RawData -> " + key);
            var separatedDatas = key.split('K');
            console.log("-----------------");
            separatedDatas.forEach(function (element) {
                if (!element) {
                    element = '0';
                }
                console.log(element);
            });
            console.log("-------------");
            var ref = db.ref("server/member");
            var usersRef = ref.child(separatedDatas[0]);
            usersRef.update({
                keyvalue: {
                    rawKey: key,
                    separatedKeys: separatedDatas
                }
            });
            res.send("\n                <h1>\uB370\uC774\uD130 \uC785\uB825 \uAC12 \uD655\uC778 \uD398\uC774\uC9C0</h1>\n                <h2>Raw Key Value: " + key + "</h2>\n                <h2>Separated Key Value: " + separatedDatas + "</h2>");
        });
    };
    return Server;
})();
;
var app = Server.bootstrap().app;
var port = normalizePort(process.env.PORT || 8888);
app.set("port", port);
var server = http_1.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
firebase_1.initializeApp({
    databaseURL: "https://m2mproject-d7ae6.firebaseio.com/"
});
var db = firebase_1.database();
var ref = db.ref("/");
console.log("-------- firebase data list --------");
ref.once("value", function (snapshot) {
    console.log(snapshot.val());
});
function normalizePort(value) {
    var port = parseInt(value, 10);
    if (isNaN(port)) {
        return value;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }
    var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    console.log("Listening on " + bind);
}
