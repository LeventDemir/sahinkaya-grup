const Admin = require('../models/admin')


module.exports = (req, res, next) => {
    const token = req.query.token || req.body.token

    Admin.findOne({ token }, (err, admin) => {
        if (admin && admin.auth) {
            next()
        } else {
            res.json({ permission: false })
        }
    })
} 