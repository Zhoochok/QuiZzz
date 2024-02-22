// const router = require('express').Router();
// const { Product } = require('../../db/models');
// const ProductPage = require('../../components/ProductPage');
// const FormUpdateProduct = require('../../components/FormUpdateProduct');

// router.get('/', async (req, res) => {
//   try {
//     const user = res.app.locals.user;
//     const products = await Product.findAll();
//     const document = res.renderComponent(ProductPage, { products, user });
//     res.send(document);
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// router.get('/category', async (req, res) => {
//   try {
//     const { categoryId } = req.query;
//     let products;
//     if (categoryId === '0') {
//       products = await Product.findAll();
//     } else {
//       products = await Product.findAll({ where: { categoryId } });
//     }
//     const document = res.renderComponent(ProductPage, { products });
//     res.send(document);
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// router.get('/:id/update', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const newProduct = await Product.findOne({ where: { id } });
//     res.send(res.renderComponent(FormUpdateProduct, { product: newProduct }));
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// module.exports = router;
