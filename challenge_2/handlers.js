

module.exports.JSONHandler = (req, res, next) => {


  
  res.end(JSON.stringify(req.body))
  next();
};