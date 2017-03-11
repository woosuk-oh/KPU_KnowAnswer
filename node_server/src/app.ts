/// <reference path="_all.d.ts" />
"use strict";

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

import * as indexRoute from "./routes/index";
const firebase = require('firebase');

/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //configure routes
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
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
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      var error = new Error("Not Found");
      err.status = 404;
      next(err);
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    //get router
    let router: express.Router;
    router = express.Router();
    //create routes
    var index: indexRoute.Index = new indexRoute.Index();
/* / */
   //main page => not work.
    router.get("/", index.index.bind(index.index));
/* /InputKeyPage */
   //data input page
    router.get("/InputKeyPage", function(req: express.Request, res: express.Response){
       /* 파이어베이스 불러오기__상위 위치에 둘 경우 오류 발생.*/
        let db = firebase.database();
        let key:string = req.query.keyvalue;
        /*key 값 분리*/
          console.log('RawData -> ' + key);
          let separatedData: string[] = key.split("K");
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
          for(let i=0; i<11;i++){
            if(!separatedData[i]){ // 데이터가 없으면 일단 0으로 초기화
             separatedData[i] = "0";
            }
             console.log(i+'=>'+separatedData[i]);
          }
            console.log("----------------------");
        //여기서 이제 분석하고 데이터베이스에 저장하기. 
        var ref = db.ref("server/member");
        var usersRef = ref.child(separatedData[0]);
        
    usersRef.update({
      keyvalue: {
                  rawKey : key,
                  separatedKeys : separatedData
       }
    });

   res.send(`<h1> 데이터입력값 확인 페이지 </h1> 
                  <br><br> <h2> 날 키값: ` + key +  `</h2><br><br><h2> 분리된 키값: `+ separatedData+`</h2>`);
    });


/* /InputKeyInitPage */
    router.get("/InputKeyInitPage", function(req: express.Request, res: express.Response){
       /*
       * 파이어베이스 불러오기.
       * 상위 위치에 둘 경우 오류 발생.
       */
        let db = firebase.database();
        let key:string = req.query.keyvalue;
        /*
        key 값 분리
        */
          console.log('RawData -> ' + key);
          let separatedData: string[] = key.split("K");
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
          for(let i=0; i<11;i++){
            if(!separatedData[i]){ // 데이터가 없으면 일단 0으로 초기화
             separatedData[i] = "0";
            }
             console.log(i+'=>'+separatedData[i]);
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
          solution:{
            con1_1:"",
            con1_2:"",
            con1_3:"",
            con2_1:"",
            con2_2:"",
            con2_3:"",
            con3_1:"",
            con3_2:"",
            con3_3:"",
            con4_1:"",
            con4_2:"",
            con4_3:""
          }
        });
        

        //
        var usersRef = ref.child(separatedData[0]);
        
    usersRef.set({
      keyvalue: {
                  rawKey : key,
                  separatedKeys : separatedData
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


    //use router middleware
    this.app.use(router);
  }
}

let server = Server.bootstrap();