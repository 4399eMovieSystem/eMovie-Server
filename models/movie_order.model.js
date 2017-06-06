/*
 * @description Movie book model
 * @create 2017/5/1
 * @author 陈海城
 */
const { queryDb } = require('../services/db');

module.exports = {
	findBookDataById,
  isSeatBelongToVideoHell
}

/*
 * @description 根据 vh_movie_id 获取支付数据
 * @author 陈海城
 */
function findBookDataById(vh_mov_id) {
	const sql = `
		SELECT ?, cm.name AS cin_name, cm.address, vh.name AS vh_name,
					 vm.price, vm.type, vm.starttime, vm.endtime
		FROM video_movie vm, cinema cm, video_hell vh
		WHERE vm.vh_mov_id = ? AND vh.vh_id = vm.vh_id AND vh.cin_id = cm.cin_id;
	`;
	return queryDb(sql, [ vh_mov_id, vh_mov_id ]);
}

/*
 * @description 根据 vh_mov_id 判断是否存在 seat_id
 * @author 陈海城
 */
function isSeatBelongToVideoHell(vh_mov_id, seat_id) {
  const sql = `
    SELECT st.seat_id, st.row_col
    FROM video_movie vm, seat st
    WHERE vm.vh_mov_id = ? AND vm.vh_id = st.vh_id AND st.seat_id = ?;
  `;
  return queryDb(sql, [ vh_mov_id, seat_id ]);
}
