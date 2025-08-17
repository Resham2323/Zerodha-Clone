const mongoose = require("mongoose");
const { HoldingSchema } = require("../schema/holdingSchema"); // {} lagana zaruri hai

const HoldingsModel = mongoose.model("Holding", HoldingSchema);

module.exports = {HoldingsModel};