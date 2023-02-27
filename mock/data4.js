import Mock from 'mockjs';

export default {
  'POST /umi/list': (req, res) => {
    console.log(req.body);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body, a: 2 },
            msg: 'success',
          },
          { code: 1, msg: 'error' },
        ],
      }).data,
    );
  },
  'DELETE /umi/list/:id': (req, res) => {
    console.log(req.params.id);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { task_id: '123' },
            msg: 'success',
          },
          { code: 1, msg: 'error' },
        ],
      }).data,
    );
  },
  'PATCH /umi/list/:id': (req, res) => {
    console.log(req.body);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body },
            msg: 'success',
          },
          { code: 1, msg: 'error' },
        ],
      }).data,
    );
  },
};
