const express = require('express')
const admin = require('../middleware/admin')
const Reference = require('../models/reference')

const router = express.Router()


router.post('/create', admin, (req, res) => {
    Reference(req.body).save(err => {
        if (!err) res.json({ success: true })

        else res.json({ success: false })
    })
})


router.post('/update', admin, (req, res) => {
    const data = req.body

    Reference.findById(data.id, (err, reference) => {
        if (reference) {
            reference.photo = data.photo
            reference.description = data.description
            reference.status = data.status

            reference.save(err => {
                if (!err) res.json({ success: true })

                else res.json({ success: false })
            })
        } else res.json({ success: false })
    })
})


router.post('/delete', admin, (req, res) => {
    Reference.deleteOne({ _id: req.body.id }, err => {
        if (!err) res.json({ success: true })

        else res.json({ success: false })
    })
})


router.get('/references', (req, res) => {
    Reference.find({}, (err, references) => {
        if (references) res.json({ references })

        else res.json({ success: false })
    })
})


router.get('/reference', (req, res) => {
    Reference.findById(req.query.id, (err, reference) => {
        if (reference) res.json({ reference })

        else res.json({ success: false })
    })
})


module.exports = router