require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
const { getJobs, getCityInfo } = require(`./util.js`)
// TODO: Statically serve the public folder
app.use(express.static('public'))

// TODO: declare the GET route /api/city/:city
app
    .route('/api/city/:city')
    .get(async (req, res) => {
        console.log(req.params)
        console.log(req.params.city)
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


// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status
module.exports = app
