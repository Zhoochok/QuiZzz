const router = require('express').Router();
const { Category } = require('../../db/models');
const CategoriesPage = require('../../components/CategoriesPage');
const CategoryId = require('../../components/CategoryId');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const category = await Category.findOne({ where: { id } });
    const document = res.renderComponent(CategoryId, { category });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    const document = res.renderComponent(CategoriesPage, {
      title: 'cat',
      categories,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});


module.exports = router;

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

module.exports = router;
