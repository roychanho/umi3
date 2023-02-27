import React from 'react';
import Menu from '../../components/menu';
import styles from './index.less';

const AsideLayouts = (props) => {
  return (
    <div className={styles.layout2_wrap}>
      <div className={styles.layout2_nav}>
        <Menu></Menu>
      </div>
      <div className={styles.layout2_content}>{props.children}</div>
    </div>
  );
};

export default AsideLayouts;
