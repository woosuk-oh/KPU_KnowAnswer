"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const indexRoute = require("./routes/index");
const firebase = require('firebase');
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "jade");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "bower_components")));
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    }
    routes() {
        let router;
        router = express.Router();
        var index = new indexRoute.Index();
        router.get("/", index.index.bind(index.index));
        router.get("/InputKeyPage", function (req, res) {
            let db = firebase.database();
            let key = req.query.keyvalue;
            console.log('RawData -> ' + key);
            let separatedData = key.split("K");
            console.log("----------------------");
            for (let i = 0; i < 11; i++) {
                if (!separatedData[i]) {
                    separatedData[i] = "0";
                }
                console.log(i + '=>' + separatedData[i]);
            }
            console.log("----------------------");
            var ref = db.ref("server/member");
            var usersRef = ref.child(separatedData[0]);
            usersRef.update({
                keyvalue: {
                    rawKey: key,
                    separatedKeys: separatedData
                }
            });
            res.send(`<h1> 데이터입력값 확인 페이지 </h1> 
                  <br><br> <h2> 날 키값: ` + key + `</h2><br><br><h2> 분리된 키값: ` + separatedData + `</h2>`);
        });
        router.get("/InputKeyInitPage", function (req, res) {
            let db = firebase.database();
            let key = req.query.keyvalue;
            console.log('RawData -> ' + key);
            let separatedData = key.split("K");
            console.log("----------------------");
            for (let i = 0; i < 11; i++) {
                if (!separatedData[i]) {
                    separatedData[i] = "0";
                }
                console.log(i + '=>' + separatedData[i]);
            }
            console.log("----------------------");
            var ref = db.ref("server/member");
            var ref2 = db.ref("server");
            var contentRef = ref2.child("content_solution");
            contentRef.set({
                solution: {
                    con1_1: "",
                    con1_2: "",
                    con1_3: "",
                    con2_1: "",
                    con2_2: "",
                    con2_3: "",
                    con3_1: "",
                    con3_2: "",
                    con3_3: "",
                    con4_1: "",
                    con4_2: "",
                    con4_3: ""
                }
            });
            var usersRef = ref.child(separatedData[0]);
            usersRef.set({
                keyvalue: {
                    rawKey: key,
                    separatedKeys: separatedData
                },
                stepvalue: {
                    step1: 0,
                    step2: 0,
                    step3: 0,
                    step4: 0
                }
            });
            res.send(`<h1> 초기화 페이지 </h1> 
                  <br><br><h2>초기화 완료</h2>`);
        });
        this.app.use(router);
    }
}
let server = Server.bootstrap();
module.exports = server.app;
