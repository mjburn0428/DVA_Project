const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('pilots').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('pilots')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createPilot = async (req, res) => {
  const pilot = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    networkID: req.body.networkID,
    flights: req.body.flights,
    pilotID: req.body.pilotID
  };
  const response = await mongodb.getDb().db().collection('pilots').insertOne(pilot);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(400).json(response.error || 'Some error occurred while creating the contact.');
  }
};

const updatePilot = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const pilot = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    networkID: req.body.networkID,
    flights: req.body.flights,
    pilotID: req.body.pilotID
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('pilots')
    .replaceOne({ _id: userId }, pilot);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(400).json(response.error || 'Some error occurred while updating the contact.');
  }
};

const deletePilot = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('pilots').deleteOne({ _id: userId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
  }
};



module.exports = { getAll, getSingle, createPilot, updatePilot, deletePilot};