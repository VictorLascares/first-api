const express = require('express')

const router = app.router()
router.get('/', (req, res) => {
    res.send('Hola meals')
})

router.post('/', (req, res) => {
    res.send('post meals')
})

module.exports = router