let browser ;
const puppeteer = require('puppeteer');

(async ()=>{
     browser = await puppeteer.launch({headless: false,defaultViewport:null});
})()

exports.openSIS = async ()=>{
    let page = await browser.newPage();  
    await page.goto('http://books.toscrape.com/index.html')
}

exports.loginSIS = async()=>{
    page = await browser.newPage();  
    await page.goto('http://parents.msrit.edu/index.php')
    await page.type('#username','1MS19CS104')
    await page.type('#password','2001-11-11')
    await page.click('#login-form > table > tbody > tr > td:nth-child(4) > div > input[type=image]:nth-child(1)')
    await page.waitForSelector("#myModal > div > div > div.modal-footer > button",{visible: true,timeout:3000})
    await page.click('#myModal > div > div > div.modal-footer > button')

    const textContent =  await page.evaluate(
        ()=>{return document.querySelector('#sub-container > div > div:nth-child(3) > h3 > table > tbody > tr:nth-child(1) > td > h6:nth-child(1)')}
    )

console.log(textContent)
}

exports.test = async()=>{
    let page = await browser.newPage()
    await page.goto('http://books.toscrape.com/',{"waitUntil" : "networkidle0"}) 
   const res = await page.evaluate(()=>{
         return   document.querySelector('#default > div > div > div > div > section > div:nth-child(2) > ol > li:nth-child(1) > article > div.image_container > a > img')
    })
    console.log(res)
}

exports.getContent= ()=>{}


