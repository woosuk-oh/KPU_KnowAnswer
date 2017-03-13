"use strict";
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
var indexRoute = require("./routes/index");
var firebase = require('firebase');
/**
 * The server.
 *
 * @class Server
 */
var Server = (function () {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //configure routes
        this.routes();
    }
    /**
     * Bootstrap the application.
     *
     * @class Server
     * @method bootstrap
     * @static
     */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Configure application
     *
     * @class Server
     * @method config
     * @return void
     */
    Server.prototype.config = function () {
        //configure jade
        this.app.set("views", path.join(__dirname, "views"));
        this.app.set("view engine", "jade");
        //mount logger
        //this.app.use(logger("dev"));
        //mount json form parser
        this.app.use(bodyParser.json());
        //mount query string parser
        this.app.use(bodyParser.urlencoded({ extended: true }));
        //add static paths
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "bower_components")));
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            var error = new Error("Not Found");
            err.status = 404;
            next(err);
        });
    };
    /**
     * Configure routes
     *
     * @class Server
     * @method routes
     * @return void
     */
    Server.prototype.routes = function () {
        //get router
        var router;
        router = express.Router();
        //create routes
        var index = new indexRoute.Index();
        /* / */
        //main page => not work.
        router.get("/", index.index.bind(index.index));
        /* /InputKeyPage */
        //data input page
        router.get("/InputKeyPage", function (req, res) {
            /* 파이어베이스 불러오기__상위 위치에 둘 경우 오류 발생.*/
            var db = firebase.database();
            var key = req.query.keyvalue;
            /*key 값 분리*/
            console.log('RawData -> ' + key);
            var separatedData = key.split("K");
            console.log("----------------------");
            /*
            for(let i in separatedData){
            console.log(i+'=>'+separatedData[i]);
            if(!separatedData[i]){
             // console.log("출력태스트");
             separatedData[i] = "0";
            }
          }
          */
            for (var i = 0; i < 11; i++) {
                if (!separatedData[i]) {
                    separatedData[i] = "0";
                }
                console.log(i + '=>' + separatedData[i]);
            }
            console.log("----------------------");
            //여기서 이제 분석하고 데이터베이스에 저장하기. 
            var ref = db.ref("server/member");
            var usersRef = ref.child(separatedData[0]);
            usersRef.update({
                keyvalue: {
                    rawKey: key,
                    separatedKeys: separatedData
                }
            });
            res.send("<h1> \uB370\uC774\uD130\uC785\uB825\uAC12 \uD655\uC778 \uD398\uC774\uC9C0 </h1> \n                  <br><br> <h2> \uB0A0 \uD0A4\uAC12: " + key + "</h2><br><br><h2> \uBD84\uB9AC\uB41C \uD0A4\uAC12: " + separatedData + "</h2>");
        });
        /* /InputKeyInitPage */
        router.get("/InputKeyInitPage", function (req, res) {
            /*
            * 파이어베이스 불러오기.
            * 상위 위치에 둘 경우 오류 발생.
            */
            var db = firebase.database();
            var key = req.query.keyvalue;
            /*
            key 값 분리
            */
            console.log('RawData -> ' + key);
            var separatedData = key.split("K");
            console.log("----------------------");
            /*
          for(let i in separatedData){
            console.log(i+'=>'+separatedData[i]);
            if(!separatedData[i]){
             // console.log("출력태스트");
             separatedData[i] = "0";
            }
          }
          */
            for (var i = 0; i < 11; i++) {
                if (!separatedData[i]) {
                    separatedData[i] = "0";
                }
                console.log(i + '=>' + separatedData[i]);
            }
            console.log("----------------------");
            //여기서 이제 분석하고 데이터베이스에 저장하기. 
            var ref = db.ref("server/member");
            var ref2 = db.ref("server");
            /*
            * 답안 DB 설정
            */
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
            //
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
            res.send("<h1> \uCD08\uAE30\uD654 \uD398\uC774\uC9C0 </h1> \n                  <br><br><h2>\uCD08\uAE30\uD654 \uC644\uB8CC</h2>");
        });
        //use router middleware
        this.app.use(router);
    };
    return Server;
})();
var server = Server.bootstrap();
