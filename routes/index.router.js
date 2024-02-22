const router = require('express').Router();
//views подключения
// const mainRouter = require('./main.router');
const classRouter = require('./views/categories.view');
const authRouter = require('../routes/views/auth.view');

//rout views
router.use('/categories', classRouter);
router.use('/registration', authRouter);

module.exports = router;
