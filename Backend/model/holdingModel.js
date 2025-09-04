const mongoose = require("mongoose");
const { HoldingSchema } = require("../schema/holdingSchema");

const HoldingsModel = mongoose.model("Holding", HoldingSchema);

module.exports = {HoldingsModel};