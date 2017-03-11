"use strict";
var Route;
(function (Route) {
    class Index1 {
        index1(req, res, next) {
            res.render('index1');
        }
    }
    Route.Index1 = Index1;
})(Route || (Route = {}));
module.exports = Route;
