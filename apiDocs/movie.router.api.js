/**
 * @api {get} {url}/api/movie/:mov_id 获取具体某部电影的信息
 * @apiName getMovieDetail
 * @apiGroup Movie
 *
 * @apiParamExample Request API
 *      /api/movies/2 // 获取 id 为2的电影信息
 *
 * @apiSuccessExample OK
 *      {
 *        "status": "OK",
 *        "data": {
 *          "mov_id": 2,
 *          "name": "记忆大师",
 *          "grade": 7.4,
 *          "starttime": "2017-04-27T16:00:00.000Z",
 *          "type": "剧情 / 悬疑 / 惊悚 / 犯罪",
 *          "place": "中国大陆",
 *          "language": "汉语普通话",
 *          "length": 119,
 *          "imgUrl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455156816.webp",
 *          "prevueUrl": null,
 *          "description": "<span property=\"v:summary\" class=\"\">\n\n                                　　故事发生在2025年，因为和妻子张代晨（徐静蕾 饰）婚姻破裂，男主角江丰（黄渤 饰）走进记忆大师医疗中心接受手术，却不料手术失误记忆被错误重载，他莫名其妙变成了“杀人凶手”。警官沈汉强（段奕宏 饰）的穷追不舍让他逐渐发现，自己脑内的错误记忆不仅是破案的关键，更是救赎自己的唯一希望。与此同时，妻子身边出现的女人陈姗姗（杨子姗 饰）、记忆中浮现出的神秘女子（许玮甯 饰），似乎也和真相有着千丝万缕的联系，一场记忆烧脑战也随之开始。\n\n                        </span>",
 *          "directors": [
 *            {
 *              "name": "陈正道",
 *              "id": 9
 *            }
 *          ],
 *          "scriptwriters": [
 *            {
 *              "name": "任鹏",
 *              "id": 10
 *            }
 *          ],
 *          "actors": [
 *            {
 *              "name": "段奕宏",
 *              "id": 13
 *            },
 *            {
 *              "name": "杨子姗",
 *              "id": 14
 *            },
 *            {
 *              "name": "黄渤",
 *              "id": 11
 *            },
 *            {
 *              "name": "徐静蕾",
 *              "id": 12
 *            }
 *          ]
 *        },
 *        "time": "2017-04-30T12:29:45.916Z",
 *        "msg": "电影信息获取成功",
 *        "user": null
 *      }
 *
 * @apiErrorExample PARAM_ERROR
 *      {
 *        "status": "PARAM_ERROR",
 *        "data": null,
 *        "time": "2017-04-30T12:39:24.443Z",
 *        "msg": "电影不存在",
 *        "user": null
 *      }
 */

/**
 * @api {get} {url}/api/movie/:mov_id/cinemas 获取具体某部电影+播放该电影的影院-影厅信息
 * @apiName getMovieAndPlayingDetail
 * @apiGroup Movie
 *
 * @apiParamExample Request API
 *      api/movies/4/cinemas // 获取 id 为 4 的电影以及播放该电影的影院-影厅信息
 *
 * @apiSuccessExample OK
 *      {
 *        "status": "OK",
 *        "data": {
 *          "mov_id": 4,
 *          "name": "守护者：世纪战元",
 *          "grade": 4,
 *          "starttime": "2017-05-18T16:00:00.000Z",
 *          "type": "动作 / 科幻",
 *          "region": "俄罗斯",
 *          "language": "俄语",
 *          "length": 100,
 *          "imgUrl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2437307414.webp",
 *          "prevueUrl": null,
 *          "description": "<span property=\"v:summary\" class=\"\">\n\n                                　　一直从事兵器研究的邪恶的克拉托夫教授欲用生物兵器达成自己的野心，在俄罗斯境内的各大城市制造了一系列大规模爆炸恐怖袭击。为了消灭邪恶势力，拯救面临生物兵器毁灭的国家，俄罗斯国防部派出了冷战时期创建的名为“爱国者”的超级英雄团队，各个英雄异于常人，身怀特技，与号称统 治世界的邪恶教授展开了一场殊死较量。\n\n                        </span>",
 *          "directors": [
 *            {
 *              "name": "萨里·奥德赛耶",
 *              "id": 20
 *            }
 *          ],
 *          "scriptwriters": [],
 *          "actors": [
 *            {
 *              "name": "艾琳娜·拉尼娜",
 *              "id": 21
 *            }
 *          ],
 *          "play_cinemas": [
 *            {
 *              "cin_id": 1,
 *              "name": "大地影院",
 *              "address": "广州天河区奥体南路12号高德美居中心家居馆3楼",
 *              "detail": [
 *                {
 *                  "date": "4月10日",
 *                  "video_hell": [
 *                    {
 *                      "vh_id": 1,
 *                      "name": "3号厅",
 *                      "price": "39",
 *                      "starttime": "16:00",
 *                      "endtime": "17:30"
 *                    },
 *                    {
 *                      "vh_id": 3,
 *                      "name": "1号厅",
 *                      "price": "19",
 *                      "starttime": "09:30",
 *                      "endtime": "10:30"
 *                    }
 *                  ]
 *                }
 *              ]
 *            },
 *            {
 *              "cin_id": 4,
 *              "name": "天宜影院",
 *              "address": "大学城西五路华师教学区西门正对面",
 *              "detail": [
 *                {
 *                  "date": "4月10日",
 *                  "video_hell": [
 *                    {
 *                      "vh_id": 13,
 *                      "name": "4号厅",
 *                      "price": "19",
 *                      "starttime": "16:00",
 *                      "endtime": "17:30"
 *                    }
 *                  ]
 *                }
 *              ]
 *            }
 *          ]
 *        },
 *        "time": "2017-04-30T19:35:43.482Z",
 *        "msg": "电影+播放信息获取成功",
 *        "user": null
 *      }
 *
 * @apiErrorExample PARAM_ERROR
 *      {
 *        "status": "PARAM_ERROR",
 *        "data": null,
 *        "time": "2017-04-30T12:39:24.443Z",
 *        "msg": "电影不存在",
 *        "user": null
 *      }
 */