/*
 * @description Movie model
 * @create at 2017/4/30
 * @author 陈海城
 */
const { queryDb } = require('../services/db');

module.exports = {
	findMovieList,
	findMovieById,
	findMoviePeople,
	findMovePlayingInfo
}

/*
 * @description 获取从 第(index + 1) 开始的 counts 部电影的信息
 * @author 陈海城
 */
function findMovieList(index, counts) {
	const sql = `
		SELECT mov_id, name
		FROM movie LIMIT ?, ?
		ORDER BY mov_id;
	`;
	return queryDb(sql, [ index, counts ]);
}

/*
 * @description 查找某部电影
 * @author 陈海城
 */
function findMovieById(mov_id) {
	const sql = `
		SELECT *
		FROM movie
		WHERE mov_id = ?;
	`;
	return queryDb(sql, [ mov_id ]);
}

/*
 * @description 批量查找电影的导演、编剧和主演
 * @param {Number/Array} mov_ids
 * @author 陈海城
 */
function findMoviePeople(mov_ids) {
	mov_ids = Array.isArray(mov_ids) ? mov_ids : [ mov_ids ];
	const sql = `
		SELECT temp.mov_id, temp.director, temp.director_id, temp.scriptwriter, temp.scriptwriter_id, temp.actor, temp.actor_id
		FROM
			(SELECT mp.mov_id AS mov_id, pe.name, pe.peo_id, mp.flag,
					(SELECT pe.name
					 WHERE mp.flag = 3
					) AS director,
					(SELECT pe.peo_id
					 WHERE pe.name = director
					) AS director_id,
					(SELECT pe.name
					 WHERE mp.flag = 2
					) AS scriptwriter,
					(SELECT pe.peo_id
					 WHERE pe.name = scriptwriter
					) AS scriptwriter_id,
					(SELECT pe.name
					 WHERE mp.flag = 1
					) AS actor,
					(SELECT pe.peo_id
					 WHERE pe.name = actor
					) AS actor_id
			 FROM mov_peo mp, people pe
			 WHERE mp.mov_id IN (?) AND mp.flag != 0 AND mp.peo_id = pe.peo_id
			 ORDER BY mp.mov_id
			) AS temp
			ORDER BY temp.mov_id;
	`;
	return queryDb(sql, [ mov_ids ]);
}

/*
 * @description 查找某部电影的所有播放地点信息
 * @author 陈海城
 */
function findMovePlayingInfo(mov_id) {
	const sql = `
		SELECT vm.vh_mov_id, vm.type, vm.starttime, vm.endtime, vm.price,
					 vh.vh_id, vh.name AS vh_name, cm.cin_id,
					 cm.name AS cin_name, cm.address
		FROM
		(
			SELECT *
			FROM video_movie 
			WHERE mov_id = ?
		) AS vm
		NATURAL JOIN video_hell vh
		LEFT JOIN cinema cm ON cm.cin_id = vh.cin_id;
	`;
	return queryDb(sql, [ mov_id ]);
}
