const Joi = require("joi");

// 判斷註冊資料是否符合validation
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

// 判斷登入資料是否符合validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(50).required().email(),
    password: Joi.string().min(6).max(255).required(),
  });
  return schema.validate(data);
};

// 判斷收藏影片資料是否符合validation
const collectionValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(1024).required(),
    imgURL: Joi.string().min(6).max(1024).required(),
    videoURL: Joi.string().min(6).max(1024).required(),
    channelTitle: Joi.string().min(1).max(100).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.collectionValidation = collectionValidation;
