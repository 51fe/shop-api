const Model = require('../model');
const {Manufacturer} = Model;

const manufacturerController = {
  all(req, res) {
    Manufacturer.find({})
      .exec((err, manufacturers) => res.json(manufacturers)
      )
  },

  byId(req, res) {
    const idParam = req.params.id;
    Manufacturer
      .findOne({_id: idParam})
      .exec((err, manufacturer) => res.json(manufacturer));
  },
  create(req, res) {
    const requestBody = req.body;
    const newManufacturer = new Manufacturer(requestBody);
    newManufacturer.save((err, saved) => {
      if (saved) {
        Manufacturer
          .findOne({_id: saved._id})
          .exec((err, manufacturer) => res.json(manufacturer));
      }
    })
  },
  update(req, res) {
    const idParam = req.params.id;
    let manufacturer = req.body;
    Manufacturer.findOne({_id: idParam}, (err, data) => {
      data.name = manufacturer.name;
      data.save((err, updated) => res.json(updated));
    })
  },
  remove(req, res) {
    const idParam = req.params.id;
    Manufacturer.findOne({_id: idParam}).remove((err, removed) => res.json(idParam))
  }
};

module.exports = manufacturerController;