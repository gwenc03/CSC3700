const express = require('express');
const router = express.Router();
// const path = require('path');
// const adminData = require("./admin");
const productsController = require ('../controllers/products');
// router.get(  '/showProducts', (req, res, next) => {
//     console.log( "----------------");
//     console.log( adminData.products);
//     //res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
//     res.render( 'showProducts', {
//         title: "Show Available Products",
//         from: 'showProducts',
//         products : adminData.products
//     });
// });
router.get ('/showProducts', productsController.getProducts);
module.exports = router;