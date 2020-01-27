const models = require('../models/index');

exports.create = (req, res) => {
  models.User.create({
    name: req.body.name,
    email: req.body.email,
  }).then((user) => {
    res.json(user);
  });
};

exports.list = (req, res) => {
  models.User.findAll({}).then((users) => {
    res.json(users);
  });
};
