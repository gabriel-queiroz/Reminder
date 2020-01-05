import Youch from 'youch';

const execptionHandler = async (error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(error, req).toJSON();
    return res.status(500).send(errors);
  }
  return res.status(500).send({ error: 'Internal server error' });
};

module.exports = execptionHandler;
