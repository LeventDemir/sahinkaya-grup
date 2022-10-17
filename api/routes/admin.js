const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Admin = require('../models/admin')


router.post('/sign-up', (req, res) => {
    const data = req.body

    const _id = mongoose.Types.ObjectId()

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);

    data._id = _id
    data.password = hash
    data.token = jwt.sign({ user: _id }, 'SeCrEtKeY');
    data.auth = true

    new Admin(data).save(err => {
        if (!err) res.json({ token: data.token })

        else if (err.code == 11000) res.json({ exist: true })

        else res.json({ success: false })
    })
})


router.post('/sign-in', (req, res) => {
    const data = req.body

    Admin.findOne({ username: data.username }, (err, admin) => {
        if (admin) {
            if (bcrypt.compareSync(data.password, admin.password)) {
                if (admin.auth) res.json({ token: admin.token })

                else {
                    admin.token = jwt.sign({ admin: admin._id }, 'SeCrEtKeY');
                    admin.auth = true

                    admin.save(err => {
                        if (!err) res.json({ token: admin.token })

                        else res.json({ success: false })
                    })
                }
            } else res.json({ success: false })
        } else res.json({ success: false })
    })
})


router.post('/sign-out', (req, res) => {
    Admin.findOne({ token: req.body.token }, (err, admin) => {
        if (admin) {
            admin.auth = false

            admin.save(err => {
                if (!err) res.json({ success: true })

                else res.json({ success: false })
            })
        } else res.json({ success: false })
    })
})


router.get('/is-auth', (req, res) => {
    Admin.findOne({ token: req.query.token }, (err, admin) => {
        if (admin) res.json({ auth: admin.auth })

        else res.json({ success: false })
    })
})


module.exports = router