const mongoose = require("mongoose");
//save referrence to schema constructor
const Schema = mongoose.Schema;

//Create new schema using the Constructor

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
},
link: {
    type: String,
    required: true
},
// summary: {
//     type: String,
//     required: true
//   },
note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
},
saved: {
    type: Boolean,
    default: false
  },
});

// useing schema constructor create new modle and exports
var Article = mongoose.model("Artcle",ArticleSchema);
module.exports = Article;


