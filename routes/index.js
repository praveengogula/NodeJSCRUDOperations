
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello World' });
};

exports.index1 = function(req, res){
  res.render('home', { title: 'Hello praveen' });
};
