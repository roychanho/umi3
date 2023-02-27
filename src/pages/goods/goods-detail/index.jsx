import React from 'react';
// import { history } from 'umi';
import { useHistory, useLocation, useParams, useRouteMatch } from 'umi';

// const GoodsDetail = ({history}) => {
// const GoodsDetail = ({
//   location: { search },
//   match: {
//     params: { id },
//   },
// }) => {
const GoodsDetail = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { id } = useParams();

  const getComment = () => {
    history.push({
      pathname: `/goods/${id}/comment`,
      query: { a: 3 },
    });
  };

  return (
    <div>
      <h3>goods page detail - {id}</h3>
      <div>{search}</div>
      <button onClick={getComment}>click</button>
    </div>
  );
};

export default GoodsDetail;
