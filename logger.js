const moment = require('moment')

const logger = (req, res, next) => {
    console.log(`${moment().format('Ymd')} : ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
}

module.exports = logger