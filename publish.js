var _package = require('./package.json'),
    childProcess = require('child_process');

var minor = _package.version.replace(/((?:\d+\.){2})(\d+)/, '$1x'),
    major = _package.version.replace(/(\d+\.)(\d+\.)(\d+)/, '$1x.x');
exec('git tag -a "v' + minor + '" -m "' + _package.version + '" --force').then(function() {
    return exec('git tag -a "v' + major + '" -m "' + _package.version + '" --force');
}).then(function() {
    return exec('git push --tags --force');
});

function exec(command) {
    return new Promise(function(resolve, reject) {
        var cmd = childProcess.exec(command, {maxBuffer: 50000 * 1024}, function(err, stdout) {
            if (err) {
                reject(err);
            } else {
                resolve(stdout);
            }
        });
        cmd.stdout.pipe(process.stdout);
        cmd.stderr.pipe(process.stderr);
    });
}
