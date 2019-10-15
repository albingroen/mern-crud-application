const app = require("express")()

const port = 5000 || process.env.PORT

app.use("/", require("./routes/index"))

app.listen(5000, () => console.log(`Server running on port ${port}`))
