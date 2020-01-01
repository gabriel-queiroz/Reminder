const Youch = require('youch');

const execptionHandler = async (error, req, res, next) => {
  const errors = await new Youch(error, req).toJSON();
  return res.status(500).send(errors);
};

module.exports = execptionHandler;
