const methods = require('./methods.js');

module.exports = {
  post: ('/', (req, res) => {
    let result = methods.regexify(req.body.main);
    console.log(result);
    res.send(result);
  })
}