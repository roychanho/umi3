import styles from './index.less';
import { Button } from 'antd';
import { Button as V2Button } from 'antd-mobile-v2';
import { Button as V5Button } from 'antd-mobile';
import user from '../assets/images/531-600x450.jpeg'; // already load
import Child from './child';
import { useState } from 'react';
import AppContext from './context';
import { request, useRequest } from 'umi';
// request(url, options) == axios.get(url,options) ==> res.data

export default function IndexPage() {
  const [count, setCount] = useState('');

  // const { data, error, loading } = useRequest('/umi/goods');

  const getGoods = async () => {
    let res = await request('umi/goods');
    console.log(res);
  };

  // const { data, error, loading, run } = useRequest(
  //   {
  //     url: '/umi/login',
  //     method: 'post',
  //     data: {
  //       username: 'alex',
  //       password: 'alex123',
  //     },
  //   },
  //   { manual: true },
  // );

  // if (loading) {
  //   return <div>loading...</div>;
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  const login = async () => {
    let res = await request('umi/login', {
      method: 'post',
      data: {
        username: 'admin',
        password: 'admin123',
      },
    });
    console.log(res);
  };

  return (
    <AppContext.Provider value={{ count, setCount }}>
      <div>
        <h1 className={styles.title}>Page index</h1>
        <img src={user} />
        {/* <img src={require('../assets/images/531-600x450.jpeg')} />  */}
        <Button type="primary">Button</Button>
        <V2Button type="primary" size="small" inline>
          V2
        </V2Button>
        <V5Button color="primary" size="mini">
          V5
        </V5Button>
        <div style={{ height: 50 }} className={styles.test1}></div>
        {/* global css */}
        {/* <div className="myLink">test</div> */}
        {/* <div className="title">test</div> */}
        {/* current page css */}
        {/* <div className={styles.header}>Testing</div> */}
        {/* <div id={styles.a1}>testing 1</div> */}
        {/* <div className={styles.a2}>testing 2</div> */}
        <div className={styles.nesting}>
          <h3>title</h3>
          <p>testing</p>
        </div>
        {/* <div>Get data : {JSON.stringify(data)}</div> */}

        <div className={styles.bar_right}>
          <button className={`ant-btn`} onClick={getGoods}>
            click
          </button>
          <button className={`ant-btn`} onClick={login}>
            login
          </button>
        </div>

        {/* <Child /> */}
      </div>
    </AppContext.Provider>
  );
}
