/*
 * 阿里大于短信验证服务
 * @create 2017/4/29
 * @author 陈海城
 */
const config = require('../config/config').alidays;
const AliDaYu = require('super-alidayu');
const Promise = require('promise');

const client = new AliDaYu(config.secret);

module.exports = {
  smsSend,
  getCode
}

/*
 * @description 短信发送函数
 * @return promise
 * @author 陈海城
 */
function smsSend(phone, code) {
  return new Promise((resolve, reject) => {
    client.sms(getOption(phone, code), (err, ret) => {
      if (err)
        resolve(err);
      else resolve(ret);
    });
  });
}

/*
 * @description 验证码生成函数
 * @author 陈海城
 */
function getCode() {
  const size = Math.floor((Math.random() * 4 + 4) % 14);
  let code = [];
  for (let i = 0; i < size; ++i) {
    code.push(Math.floor(Math.random() * 10));
  }
  return code.join('');
}

function getOption(phone, code) {
  return {
    sms_free_sign_name: config.sign_name,
    sms_type: config.sms_type,
    sms_param: {
        name: code
    },
    rec_num: phone,
    sms_template_code: config.template_code
  }
}
