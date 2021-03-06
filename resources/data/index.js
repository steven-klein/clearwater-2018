var package = require('./../../package.json');
var images = require('./images.js');

module.exports = {
    "_comment": "Application data made available to handlebars.",
    "name": "Clearwater 2018",
    "description": "",
    "version": package.version || "",
    "environment": process.env.NODE_ENV || "development",
    "production": (process.env.NODE_ENV === "production"),
    "images": JSON.stringify(images.get()),
    "download_url": "https://drive.google.com/drive/folders/1sW1FUim8lotEZBH2jesYHJGZqM0_Qmar?usp=sharing"
}
