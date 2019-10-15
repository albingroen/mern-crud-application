const router = require("express").Router()

router.get("/", (req, res) => {
	res.json({
		status: 200
	})
})

module.exports = router
