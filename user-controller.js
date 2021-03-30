var User = require('./models/user');

exports.createUser = function(req, res) { 
    var newuser = new User(req.body);
    newuser.save(function (err, user) { 
        if (err) { 
            res.status (400).json(err);
        }

        res.json(user); 
});
};


exports.getUser = function(req, res) {
  User.findOne({_id: req.params.id}, function (err, users) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(users);
  }); 
};