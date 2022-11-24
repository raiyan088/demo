const puppeteer = require('puppeteer')

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

    await page.close()
    await browser.close()

    console.log('Browser Close')

})()