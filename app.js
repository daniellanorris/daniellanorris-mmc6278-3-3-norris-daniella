require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
// TODO: import the getCityInfo and getJobs functions from util.js
const {jobs, cityInfo} = require(`./util.js`)
// TODO: Statically serve the public folder
app.use(express.static('public'))


// TODO: declare the GET route /api/city/:city
app
    .route('/api/city/:city')
    .get((req, res) => {
        
        if(jobs && cityInfo) {
            res.status(200).send(`success!`)
            return(jobs && cityInfo)
        }
        else if(!(jobs && cityInfo)) {
            res.status(404).send(`you didnt enter a city or job`)
            console.log(`error`)
        }
        else if(jobs && !cityInfo) {
            cityInfo === false 
            return jobs
        }
        else if(!jobs && cityInfo) {
            jobs === false 
            return cityInfo

        }
    })

    console.log(jobs)



// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status

app.listen(PORT, () => {
    console.log('Listening on http://localhost:' + PORT)
})

module.exports = app
