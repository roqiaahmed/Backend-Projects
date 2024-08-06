const index = require('../models/index');

const getPepole = async (req, res) => {
  try {
    const personSchema = index('Person');
    const people = await personSchema.find();
    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createPerson = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ msg: 'Please provide name value' });
  }
  try {
    const personSchema = index('Person');
    const person = await personSchema.create({ name });

    res.status(201).json({ person });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getPersonByid = async (req, res) => {
  const { id } = req.params;
  try {
    const personSchema = index('Person');
    const person = await personSchema.findOne({ _id: id });
    if (!person) {
      return res.status(404).json({ msg: `No person with id : ${id}` });
    }
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const personSchema = index('Person');
    let person = await personSchema.findOne({ _id: id });
    if (!person) {
      return res.status(404).json({ msg: `No person with id : ${id}` });
    }
    person = await personSchema.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true }
    );
    res.status(200).json({ person });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deletePerson = async (req, res) => {
  const { id } = req.params;
  try {
    const personSchema = index('Person');
    const person = await personSchema.findOne({ _id: id });
    if (!person) {
      return res.status(404).json({ msg: `No person with id : ${id}` });
    }
    await personSchema.findOneAndDelete({ _id: id });
    res.status(200).json({ msg: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getPepole,
  getPersonByid,
  createPerson,
  updatePerson,
  deletePerson,
};
