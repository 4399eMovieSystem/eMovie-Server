/**
 * @api {get} {url}/api/cinemas/:cin_id 获取影院相关信息
 * @apiName getCinDetailInfo
 * @apiGroup Cinema
 * 
 * @apiParamExample Request Example
 *      /api/cinemas/5
 * 
 * @apiSuccessExample OK
 *      {
 *        "status": "OK",
 *        "data": {
 *          "cin_id": 5,
 *          "name": "大学城聚爱影院",
 *          "address": "广东省广州市番禺区大学城中环西路232号广州大学商业中心2层",
 *          "phone": "020-31061505",
 *          "jobtime": "10:00-22:00",
 *          "description": null,
 *          "movies": [
 *            {
 *              "mov_id": 1,
 *              "name": "春娇救志明",
 *              "type": "剧情 / 喜剧 / 爱情",
 *              "length": 117,
 *              "imgUrl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2456056900.webp"
 *            },
 *            {
 *              "mov_id": 2,
 *              "name": "记忆大师",
 *              "type": "剧情 / 悬疑 / 惊悚 / 犯罪",
 *              "length": 119,
 *              "imgUrl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2455156816.webp"
 *            },
 *            {
 *              "mov_id": 5,
 *              "name": "釜山行",
 *              "type": "动作 / 惊悚 / 灾难",
 *              "length": 118,
 *              "imgUrl": "https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2360940399.webp"
 *            },
 *            {
 *              "mov_id": 6,
 *              "name": "美国队长3",
 *              "type": "动作 / 科幻 / 冒险",
 *              "length": 148,
 *              "imgUrl": "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2332503406.webp"
 *            }
 *          ],
 *          "comments": [],
 *          "vedio_hells": {
 *            "3号厅": {
 *              "2017-5-10": [
 *                {
 *                  "vh_mov_id": 66,
 *                  "mov_id": 5,
 *                  "type": "2D",
 *                  "starttime": "2017-05-10T02:00:00.000Z",
 *                  "price": "30"
 *                },
 *                .....
 *                {
 *                  "vh_mov_id": 206,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-05-10T08:00:00.000Z",
 *                  "price": "30"
 *                },
 *                {
 *                  "vh_mov_id": 207,
 *                  "mov_id": 1,
 *                  "type": "2D",
 *                  "starttime": "2017-05-10T10:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ],
 *              "2017-6-10": [
 *                {
 *                  "vh_mov_id": 340,
 *                  "mov_id": 5,
 *                  "type": "2D",
 *                  "starttime": "2017-06-10T02:00:00.000Z",
 *                  "price": "30"
 *                },
 *                ......
 *                {
 *                  "vh_mov_id": 344,
 *                  "mov_id": 1,
 *                  "type": "2D",
 *                  "starttime": "2017-06-10T10:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ],
 *              "2017-8-10": [
 *                {
 *                  "vh_mov_id": 482,
 *                  "mov_id": 5,
 *                  "type": "2D",
 *                  "starttime": "2017-08-10T02:00:00.000Z",
 *                  "price": "30"
 *                },
 *                ......
 *                {
 *                  "vh_mov_id": 485,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-08-10T08:00:00.000Z",
 *                  "price": "30"
 *                }
 *              ]
 *            },
 *            "1号厅": {
 *              "2017-5-10": [
 *                {
 *                  "vh_mov_id": 71,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-05-10T06:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ],
 *              ....
 *              "2017-8-10": [
 *                {
 *                  "vh_mov_id": 487,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-08-10T06:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ]
 *            },
 *            "2号厅": {
 *              "2017-5-10": [
 *                {
 *                  "vh_mov_id": 72,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-05-10T06:00:00.000Z",
 *                  "price": "39"
 *                },
 *                {
 *                  "vh_mov_id": 209,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-05-10T06:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ],
 *              "2017-6-10": [
 *                {
 *                  "vh_mov_id": 346,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-06-10T06:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ],
 *              "2017-8-10": [
 *                {
 *                  "vh_mov_id": 488,
 *                  "mov_id": 2,
 *                  "type": "2D",
 *                  "starttime": "2017-08-10T06:00:00.000Z",
 *                  "price": "39"
 *                }
 *              ]
 *            }
 *          }
 *        },
 *        "time": "2017-06-09T08:11:12.035Z",
 *        "msg": "信息获取成功",
 *        "user": null
 *      }
 */