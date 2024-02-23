const router = require('express').Router();
const { Category } = require('../../db/models');
const CategoriesPage = require('../../components/CategoriesPage');
const CategoryId = require('../../components/CategoryId');
const { Quiz } = require('../../db/models');
const { Otvet } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const category = await Category.findOne({ where: { id } });
    const quize = await Quiz.findOne({
      where: { categoryId: category.id },
      include: { model: Otvet },
    });
    console.log(quize);
    const document = res.renderComponent(CategoryId, {
      quize,
      category,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:id/:questionId', async (req, res) => {
  try {
    const { id, questionId } = req.params;
    console.log(id);

    const category = await Category.findOne({ where: { id } });
    const quize = await Quiz.findOne({
      where: { categoryId: category.id, id: questionId },
      include: { model: Otvet },
    });
    console.log(quize);
    const document = res.renderComponent(CategoryId, {
      quize,
      category,
    });
    res.send(document);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

// router.get()

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
