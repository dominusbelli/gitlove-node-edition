const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  login: String,
  id: Number,
  avatar_url: String,
  repos_url: String,
  topLanguages: {
    one: String,
    two: String,
    three: String,
  },
  data: [
    {
      language: String,
      value: Number
    }
  ],
  lastUpdate: { type: Date, default: Date.now }
});

userSchema.methods.determineCompatibility = function calculateSimilarity(otherUser) {

}

module.exports = mongoose.model('User', userSchema);
