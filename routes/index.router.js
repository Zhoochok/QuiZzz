const router = require('express').Router();
//views подключения
const mainRouter = require('./main.router');
const classRouter = require('./views/categories.view');
const authRouter = require('../routes/views/auth.view');
// const prizeRouter = require('./views/prizes.view');

//rout views
router.use('/', mainRouter);
router.use('/categories', classRouter);
// router.use('/prizes', prizeRouter);
router.use('/registration', authRouter);


module.exports = router;
