const router = require('express').Router();
//views подключения
// const mainRouter = require('./main.router');
const classRouter = require('./views/categories.view');

//rout views
router.use('/categories', classRouter);

module.exports = router;
