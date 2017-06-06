/*
 * @description Movie router
 * @author 陈海城
 */
const router = require('express').Router();
const mvCtrl = require('../controllers/movie.controller');
const mdRtr = require('./movie_order.router');

module.exports = app => app.use('/api/movies', router);

router.param('mov_id', mvCtrl.paramData);

router.get('/:mov_id', mvCtrl.getMovieDetail);

router.get('/:mov_id/cinemas', mvCtrl.getMovieAndPlayingDetail);

// 挂载子路由
mdRtr(router);