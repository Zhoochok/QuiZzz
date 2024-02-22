// const router = require('express').Router();

// const ProductPage = require('../../components/ProductPage');
// const { Product, Category } = require('../../db/models');
// const ProductItem = require('../../components/ProductItem');

// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     const categories = await Category.findAll();
//     const html = res.renderComponent(ProductPage, {
//       title: 'Vi kto takie?',
//       products,
//       categories,
//     });
//     res.send(html);
//   } catch ({ message }) {
//     res.status(500).send({ error: message });
//   }
// });



// router.post('/', async (req, res) => {
//   try {
//     const { productName, description, price, image } = req.body;
//     console.log(productName, description, price, image, '<----');
//     const data = {
//       userId: 2,
//       stockCount: 322,
//       categoryId: 1,
//       productName,
//       description,
//       price,
//       image,
//     };
//     const product = await Product.create(data);
//     if (product) {
//       // здесь важно правильно отправить форму
//       const html = res.renderComponent(
//         ProductItem,
//         { product },
//         { doctype: false }
//       );
//       res.status(201).json({ message: 'success', html });
//     }
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// router.put('/:id/update', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { productName, description, price, image } = req.body;

//     const result = await Book.update(
//       { productName, description, price, image },
//       { where: { id } }
//     );
//     if (result[0]) {
//       res.status(200).json({ message: 'success' });
//     }
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await Product.destroy({ where: { id } });
//     if (result > 0) {
//       res.status(200).json({ message: 'success' });
//     }
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// module.exports = router;
