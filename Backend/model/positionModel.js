const mongoose = require("mongoose");
const {PositionSchema} = require("../schema/positionSchema");

const PositionModel = mongoose.model("Position", PositionSchema);

module.exports = {PositionModel};
