const { url } = require('inspector');
const puppeteer = require('puppeteer')
const mongoose = require("mongoose");
const Producto = require("./models/productModel");
require("./database/mongo")

//Recoge los datos de cada producto 
//!CAMBIAR POR CADA SCRAPEO
const extractData = async (url, browser) => {
    try {
        productData = {}
        const page = await browser.newPage()
        await page.goto(url);
        productData.nombre = await page.$eval("h1", title => title.innerText);
        productData.target = "hombre";
        productData.tipo_prenda = "abajo";
        productData.estilo = "casual";
        productData.color = "verde";
        productData.imgUrl = await page.$eval(".swiper-slide-active > img", imgUrl => imgUrl.src);
        return productData
    }
    catch (error) {
        console.log(error)
    }
}

//! CAMBIAR LA URL DE LA PRENDA CON LOS FILTROS
const buscarPrendas = async (num) => {
  
    
    let url = "https://es.shein.com/Women-Clothing-c-2030.html?attr_values=Green-Elegant&ici=CCCSN%3DWomenHomePage_ON%3DBanner_OI%3D1_CN%3Dnull_TI%3D50001_aod%3D0_PS%3DHZ-5-11_ABT%3D0&scici=WomenHomePage~~ON_Banner%2CCN_null%2CHZ_1%2CHI_hotZone64li4rofd1p~~5_11~~real_2030~~~~&srctype=homepage&userpath=%3EWomenHomePage%3EWomen-Clothing&child_cat_id=1767&attr_ids=27_81-27_334-27_2436-27_2566-27_1000132-27_1000133-101_257&exc_attr_id=101"
    const scrapedData = []
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);
    
    const productUrls = await page.$$eval('.S-product-item__name > a ', (etiquetaEnlace) => etiquetaEnlace.map(a => a.href));

        
    for (let i = 0; i < num; i++) {
        const productsInfo = await extractData(productUrls[i], browser)
        scrapedData.push(productsInfo);
    }

    return scrapedData
}


async function addPrendasDB(num) {
    let scrapedData = await buscarPrendas(num)
    for (let i = 0; i < scrapedData.length; i++) {
        let productoScraped = new Producto(scrapedData[i]);
        productoScraped.save(function (err) {
            if (err) throw err;
            console.log("Inserción correcta");
        })
    }
}

addPrendasDB(2);

const scrapping = {
    buscarPrendas: buscarPrendas,
    addPrendasDB: addPrendasDB
}

module.exports = scrapping