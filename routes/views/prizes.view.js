// const router = require('express').Router();
// const { Prize } = require('../../db/models');  // нет в базе данных 
// const PrizePage = require('../../components/PrizePage');

// router.get('/', async (req, res) => {
//   try {
//     const prizes = await Prize.findAll(); // нет в базе данных как их добавить 
//     const document = res.renderComponent(PrizePage, { title:'big pig', prizes });
//     res.send(document);
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });