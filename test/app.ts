import * as e from 'express';

import { json, urlencoded } from 'body-parser';
import { join } from 'path';

import { database } from 'firebase';

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

let server = Server.bootstrap();
server.app;