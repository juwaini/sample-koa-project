var koa = require('koa');
var app = new koa();
var rp = require('request-promise');

app.use(function (ctx) {
    var options = {
        uri: 'https://jsonplaceholder.typicode.com/posts/1',
        json: true
    };

    rp(options)
        .then(function(res){
            var output = {};
            output.id = res.id;
            output.title = res.title;
            console.log(output);
            ctx.body = output;
            //console.log(this.body);
            //return res;
        })
        .catch(function (err){
            console.log(err);
            ctx.body = err;
        });
});

app.listen(3000);
