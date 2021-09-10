const express = require('express');
const app = express();
const fs = require('fs');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');
const port = process.env.Port || 8000;
app.use(bodyParser.text({type:'text/html'}));
var pdfparser = bodyParser.text({ extended: false});

app.post('/gen_pdf', pdfparser, async(req,res)=>{

    try{
        req.accepts('html');

        res.send({message:req.body});
        console.log(req.body);
        const browser = await puppeteer.launch({
            headless:true
        });
        const page = await browser.newPage();

        await page.setContent(req.body);
        await page.emulateMediaFeatures('screen');

       // const pdfBuffer = await page.pdf();
        //fs.writeFileSync("page.pdf", pdfBuffer);
        await page.pdf({path: "page.pdf", format: 'A4', printBackground:true});
    }
    catch(e){
        console.log(e);
    }
});
app.listen(port, ()=>{
    console.log(`connection setup successfull on ${port}`);
})