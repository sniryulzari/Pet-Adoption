const { petOfTheWeekModel } = require("../Models/appOperationsModel");

async function getPetOfTheWeek(req, res) {
  try {
    const petOfTheWeek = await petOfTheWeekModel();
    res.send(petOfTheWeek);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  getPetOfTheWeek,
};
