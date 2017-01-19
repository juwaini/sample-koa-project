var koa = require('koa');
var app = koa();
var route = require('koa-route');

app.use(function *(){
    this.body = {"hello": "world"};
});

app.listen(3000);
