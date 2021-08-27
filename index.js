const express = require('express')
const app = express()
const news = require("./models/news")
const mongoose = require("mongoose")
mongoose
	.connect("mongodb+srv://xyz-controller:x1y2z3@cluster0.zfpij.mongodb.net/Information?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()

    app.get("/", async (req, res) => {
    	const posts = await news.find()
      web_content = "";
      for (var i = 0; i < posts.length; i++) {
        web_content += "<h3>"+""+posts[i].title+""+"</h3>"+"<p>"+""+posts[i].content+"</p><br>";
      }
    	res.send(web_content)
    })

		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
