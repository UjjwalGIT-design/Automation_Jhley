const { chromium } = require('playwright');
(async () => {

    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage()
    await page.goto('https://jh-boliv-ui.herokuapp.com/es') // This is Url that I have used
    await page.click('//button[contains(text(),"Iniciar sesión")]');
    await page.waitForTimeout(30000)
    await page.fill('//input[@id="1-email"]', 'uguleria@gmail.com')
    await page.fill('//input[@name="password"]', 'Jhely@123')
    await page.click("//body/div[@id='auth0-lock-container-1']/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/button[1]/span[1]");
    await page.waitForTimeout(30000)
    await page.click('//span[contains(text(),"Registro de Propriedad")]');
    await page.fill('//input[@id="name"]', 'TestProperty');
    await page.fill("//input[@id='email']", 'test@test.com');
    await page.fill("//input[@id='number']", '7018510094');
    await page.click("//span[contains(text(),'Continuar')]");
    await page.waitForTimeout(10000)
    const imagepath1 = "C:/Users/ujjwa/OneDrive/Desktop/Image1.jpg"; // This is a path of image 1
    const imagepath2 = "C:/Users/ujjwa/OneDrive/Desktop/Image2.jpg"; //This is a path of image 2
    await page.setInputFiles("//input[@type='file']", [imagepath1, imagepath2]); //This is to select multiple files at one time to upload
    browser.close;
})()