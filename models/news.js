const mongoose = require("mongoose")

const newsSchema = mongoose.Schema({
	title: String,
	content: String,
})

module.exports = mongoose.model("News", newsSchema)
