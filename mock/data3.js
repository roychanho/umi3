export default {
  'POST /umi/login': (req, res) => {
    const { username, password } = req.body;
    if (username === 'alex' && password === 'alex123') {
      res.send({
        err: 0,
        msg: 'success',
        currentAuthority: 'user',
      });
    } else if (username === 'admin' && password === 'admin123') {
      res.send({
        err: 0,
        msg: 'success',
        currentAuthority: 'admin',
      });
    } else {
      res.send({
        err: 1,
        msg: 'fail',
      });
    }
  },
};
