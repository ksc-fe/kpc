global.__ROOT = __dirname;

var Advanced = require('advanced'),
    Utils = Advanced.Utils,
    Vdt = require('vdt');

var app = Advanced(function(app) {
    app.engine('vdt', Vdt.__express);
    app.set('views', 'views');
    app.set('view engine', 'vdt');

    app.locals._ = require('lodash');

    Vdt.setDefaults('delimiters', ['{{', '}}']);

    app.use(require('./src/lib/stylus')({
        src: __dirname,
        dest: __dirname + '/.cache'
    }));

    app.use('/src', Advanced.Express.static('src'));
});

app.listen(Utils.c('port'), function() {
    Advanced.Logger.log('App is listening on the port ' + Utils.c('port'));
});
