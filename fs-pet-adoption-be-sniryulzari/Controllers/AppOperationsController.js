const { petOfTheWeekModel } = require("../Models/appOperationsModel");

async function getPetOfTheWeek(req, res) {
  try {
    const petOfTheWeek = await petOfTheWeekModel();
    res.send(petOfTheWeek);
    // console.log("petOfTheWeek", petOfTheWeek);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = {
  getPetOfTheWeek,
};
