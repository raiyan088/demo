const puppeteer = require('puppeteer')
const request = require('request')

;(async() => {

    console.log('Browser Open')

    let browser = await puppeteer.launch({
        headless: true,
        args: [ '--no-sandbox', '--disable-setuid-sandbox' ]
    })

    console.log('Page Open')

    let page = await browser.newPage()

    console.log('Page Load')

    await page.goto("https://www.google.com")
    console.log(await page.title())

    request({
        url: 'https://ifconfig.me/ip',
        method: 'GET',
        followRedirect: false
    }, function(error, response, body) {
        if(error) {
            console.log('Error')
        } else {
            console.log(body)
        }
    })

})()