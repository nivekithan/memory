const mongoose = require("mongoose");

const grpQueSchema = mongoose.Schema({
  day_id: mongoose.Schema.Types.ObjectId,
  ques: [{ type: { type: String }, group: Number }],

});


const GrpQueModel = mongoose.model("questions", grpQueSchema)


module.exports = GrpQueModel

 