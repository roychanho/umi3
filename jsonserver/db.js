var Mock = require('mockjs');
let mr = Mock.Random;

module.exports = () => {
  Mock.Mock({
    'goods|3': [
      {
        'id|+1': 1000,
        title: '@ctitle(8,12)',
        des: '@csentence(10,20)',
        time: '@integer(1553425967486,1553475967486)',
        detail: {
          auth: '@cname()',
          auth_icon: mr.image('50x50', mr.color(), mr.cword(1)),
        },
      },
    ],
  });
};
