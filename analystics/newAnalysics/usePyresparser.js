let {PythonShell} = require('python-shell')
let output
let  cvParse =  async function (path) {
    let pyshell = new PythonShell('./analystics/newAnalysics/my_script.py');
    pyshell.send(path);
    let time = new Promise(function(resolve, reject) {
       pyshell.on('message', async function (message) {
            output = message
            resolve()
            pyshell.end
        })
    })
     await time
    pyshell.end(function (err,code,signal) {
        if (err) throw err;
        console.log('The exit code was: ' + code);
        console.log('The exit signal was: ' + signal);
        console.log('finished');
    });
    return output
}
module.exports = cvParse