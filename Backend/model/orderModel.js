const {model} =require("mongoose");

const {OrderSchema} = require("../schema/orderSchema");

const OrderModel = new model("Order", OrderSchema);

module.export = {OrderModel};