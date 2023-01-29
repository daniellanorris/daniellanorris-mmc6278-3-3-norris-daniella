require('dotenv').config()
const express = require('express')
const app = express()
const { getJobs, getCityInfo } = require(`./util.js`)

app.use(express.static('public'))

app
    .route('/api/city/:city')
    .get(async (req, res) => {
        const jobs = await getJobs(req.params.city)
        const cityInfo = await getCityInfo(req.params.city)
        const cityJobs = { jobs, cityInfo }
        if ((jobs || cityInfo)) {
            res.json(cityJobs)
        }
        else {
            res.status(404).json({ error: `no jobs or city info` })
        }
    })
module.exports = app
