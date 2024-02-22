const router = require('express').Router();
//views подключения
// const mainRouter = require('./main.router');
const classRouter = require('./views/categories.view');
const authRouter = require('../routes/views/auth.view');

const authApiRouter = require('./api/auth.api.router');

//rout views
router.use('/categories', classRouter);

router.use('/registration', authRouter);

//api
router.use('/api', authApiRouter)


module.exports = router;
