"use strict";

import * as express from "express";

module Route {

  export class Index {

    public index(req: express.Request, res: express.Response, next: express.NextFunction) {
      //render page
  //    var name:string = req.query.name;
    //  console.log("태스트:"+name);
    //  res.se nd('<h1>' + name +  '</h1>');
      res.render('index');
    }
  }
}

export = Route;