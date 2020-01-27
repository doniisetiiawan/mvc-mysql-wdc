const models = require('../models/index');
const Band = require('../models/band');

exports.create = (req, res) => {
  models.Band.create(req.body).then(() => {
    res.redirect('/bands');
  });
};

exports.list = (req, res) => {
  models.Band.findAll({
    order: 'createdAt DESC',
  }).then((bands) => {
    res.json(bands);;
  });
};

exports.byId = (req, res) => {
  models.Band.find({
    where: {
      id: req.params.id,
    },
  }).then((band) => {
    res.json(band);
  });
};

exports.update = (req, res) => {
  models.Band.find({
    where: {
      id: req.params.id,
    },
  }).then((band) => {
    if (band) {
      band
        .updateAttributes({
          name: req.body.name,
          description: req.body.description,
          album: req.body.album,
          year: req.body.year,
          UserId: req.body.user_id,
        })
        .then((band) => {
          res.send(band);
        });
    }
  });
};

exports.delete = (req, res) => {
  models.Band.destroy({
    where: {
      id: req.params.id,
    },
  }).then((band) => {
    res.json(band);
  });
};
