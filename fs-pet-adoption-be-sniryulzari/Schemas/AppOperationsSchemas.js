const mongoose = require("mongoose");
const { Schema } = mongoose;

const appOperationsSchema = new Schema(
  {
    petsOfTheWeek: { type: Array },
    isRandomized: { type:  Boolean, defualt: false },
    petsOfTheWeekInfo: {type: Object },
  },
  { collection: "appOperations" }
);

const AppOperations = mongoose.model("AppOperations", appOperationsSchema);

module.exports = AppOperations;
