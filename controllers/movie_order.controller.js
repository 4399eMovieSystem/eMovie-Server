/*
 * @description Movie book controller
 * @create 2017/5/1
 * @author 陈海城
 */
const { sendData, cowrapObj, handleError } = require('../utils');
const MovieOrder = require('../models/movie_order.model');
const MovieSeat = require('../models/movie_seat.model');

module.exports = cowrapObj({
	getBookData,
	cancleOrder
})

/*
 * @description 获取支付页面展示数据
 * @author 陈海城
 */
function* getBookData(req, res, next) {
	const { vh_mov_id, seat_id } = req.body;
	if (!vh_mov_id || !seat_id)
		return sendData(req, res, 'PARAM_ERROR', null, '参数错误');
	let data, seat;
	try {
		// 判断座位是否空闲
		data = yield MovieSeat.isValid(seat_id);
		if (!data.length) return sendData(req, res, 'ERROR', null, '该座位已被预定，请重新选择');
		// 判断座位是否属于该放映厅
		data = yield MovieOrder.isSeatBelongToVideoHell(vh_mov_id, seat_id);
		if (!data.length) return sendData(req, res, 'ERROR', null, '所选座位不存在');
		seat = data[0];
		// 设置座位状态
		yield MovieSeat.setSeatStatus(seat_id, 1, req.paramData.user.user_id);
		// 获取支付页面所需数据
		data = yield MovieOrder.findBookDataById(vh_mov_id)
		if (!data.length) return sendData(req, res, 'ERROR', null, '该放映厅不播放该电影');
		data = _rebuild(data[0], seat, req.paramData.movie);
		data.user = {
			phone: req.session.user.phone,
			pay_num: req.session.user.phone
		};
		return sendData(req, res, 'OK', data, '数据获取成功');
	} catch(err) {
		return handleError(req, res, 'DB_ERROR', err, '数据库查询错误');
	}

	function _rebuild(data, seat, movie) {
		let result = {};
		result.vh_mov_id = data.vh_mov_id;
		result.cinema = {
			name: data.cin_name,
			address: data.address
		};
		result.video_hell = {
			name: data.vh_name
		};
		result.movie = {
			name: movie.name,
			language: movie.language,
			type: data.type,
			starttime: data.starttime,
			endtime: data.starttime,
			price: data.price
		};
		result.seat = seat;
		return result;
	}
}

/*
 * @description 撤销未支付订单
 * @author 陈海城
 */
function* cancleOrder(req, res, next) {
	const { seat_id } = req.body;
	if (!seat_id)
		return sendData(req, res, 'PARAM_ERROR', null, '参数错误');
	let data;
	try {
		data = yield MovieSeat.findOneSeatInfo(seat_id);
		if (!data.length)
			return sendData(req, res, 'FAIL', null, '座位不存在，撤销失败');
		if (data[0].status != 1)
			return sendData(req, res, 'FAIL', null, '座位已被预定或未被预定，撤销失败');
		if (req.paramData.user.user_id != data[0].user_id)
			return sendData(req, res, 'NO_PERMISSION', null, '撤销需本人权限');
		yield MovieSeat.setSeatStatus(seat_id, 0);
		return sendData(req, res, 'OK', null, '订单撤销成功');
	} catch(err) {
		return handleError(req, res, 'DB_ERROR', err, '数据库查询错误');
	}
}