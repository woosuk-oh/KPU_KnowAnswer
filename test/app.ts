import * as e from 'express';

import { json, urlencoded } from 'body-parser';
import { join } from 'path';
import { createServer } from 'http';

import { database, initializeApp } from 'firebase';


/**
 * @class Server
 */
class Server {

    public app: e.Application;

    constructor() {
        this.app = e();
    }

    /**
     * @method bootstrap
     */
    public static bootstrap(): Server {
        return new Server;
    }

    /**
     * @method config
     */
    private config() {
        this.app.set("views", join(__dirname, "views"));
        this.app.set("view engine", "html");

        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));

        this.app.use(e.static(join(__dirname, "public")));
        
        this.app.use((err: any, req: e.Request, res: e.Response, next: e.NextFunction) => {
            let error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }

    /**
     * @method routes
     */
    private routes() {
        let router = e.Router();

        router.get("/InputKeyPage", (req, res) => {
            let db = database();
            let key: string = req.query.keyvalue;

            console.log(`RawData -> ${key}`);
            let separatedDatas = key.split('K');
            console.log("-----------------");

            separatedDatas.forEach(element => {
                if (!element) {
                    element = '0';
                }
                console.log(element);
            });
            console.log("-------------");

            let ref = db.ref("server/member");
            let usersRef = ref.child(separatedDatas[0]);

            usersRef.update({
                keyvalue: {
                    rawKey: key,
                    separatedKeys: separatedDatas
                }
            });
            
            res.send(`
                <h1>데이터 입력 값 확인 페이지</h1>
                <h2>Raw Key Value: ${key}</h2>
                <h2>Separated Key Value: ${separatedDatas}</h2>`
            );
        });
    }
};

let app = Server.bootstrap().app;

let port = normalizePort(process.env.PORT || 8888);
app.set("port", port);

let server = createServer(app);
server.listen(port);

server.on("error", onError);
server.on("listening", onListening);
initializeApp({
    databaseURL: "https://m2mproject-d7ae6.firebaseio.com/"
});

let db = database();
let ref = db.ref("/");
console.log("-------- firebase data list --------");
ref.once("value", (snapshot: database.DataSnapshot) => {
    console.log(snapshot.val());
});

function normalizePort(value: string) {
    let port = parseInt(value, 10);

    if (isNaN(port)) {
        return value;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error: NodeJS.ErrnoException) {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

    switch (error.code) {
        case "EACCES":
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    let addr = server.address();
    let bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
    console.log(`Listening on ${bind}`);
}