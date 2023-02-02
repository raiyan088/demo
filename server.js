const puppeteer = require('puppeteer')
const express = require('express')
const request = require('request')


const app = express()

app.use(express.json())

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Listening on port 3000...")
})



app.get('/ip', async function (req, res) {
    request({
        url: 'https://ifconfig.me/ip',
        method: 'GET',
        followRedirect: false
    }, function(error, response, body) {
        if(error) {
            res.writeHeader(200, { "Content-Type": "text/html" })
            res.write(error)
            res.end()
        } else {
            res.writeHeader(200, { "Content-Type": "text/html" })
            res.write(body)
            res.end()
        }
    })
})


app.get('/', async function (req, res) {
    res.writeHeader(200, { "Content-Type": "text/html" })
    res.write('Invalid Request')
    res.end()
})
