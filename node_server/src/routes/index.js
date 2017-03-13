"use strict";
var Route;
(function (Route) {
    var Index = (function () {
        function Index() {
        }
        Index.prototype.index = function (req, res, next) {
            //render page
            //    var name:string = req.query.name;
            //  console.log("태스트:"+name);
            //  res.se nd('<h1>' + name +  '</h1>');
            res.render('index');
        };
        return Index;
    })();
    Route.Index = Index;
})(Route || (Route = {}));
module.exports = Route;
