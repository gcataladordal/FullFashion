const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");


async function example() {
    
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000");

    await driver.findElement(By.xpath('//*[@id="root"]/div[2]/div[1]/div/div[1]/div[2]/ul/a/button')).click();

    //Cerramos el navegador
    //await driver.quit();
}

example();