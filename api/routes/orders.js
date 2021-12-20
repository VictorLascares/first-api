const express = require('express')

const router = app.router()
router.get('/', (req, res) => {
    res.send('Hola orders')
})

router.post('/', (req, res) => {
    res.send('post orders')
})

module.exports = router