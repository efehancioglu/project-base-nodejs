const express = require('express')
const router = express.Router()

const isAuthanticated = true

router.all("*", (req, res, next) => {
    if (isAuthanticated) {
        next()
    }
    else {
        res.json({ success: "false", error: "Not Authenticated." })
    }
})

router.get('/', (req, res, next) => {
    res.json({ success: "true" })
})

module.exports = router