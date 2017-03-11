"use strict";
var e = require("express");
var body_parser_1 = require("body-parser");
var path_1 = require("path");
var firebase_1 = require("firebase");
/**
 * @class Server
 */
var Server = (function () {
    function Server() {
        this.app = e();
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
}());
;
