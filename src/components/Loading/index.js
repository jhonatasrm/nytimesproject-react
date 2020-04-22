import React from '../../../node_modules/react';
import ReactLoading from '../../../node_modules/react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height="20%" width="20%" />
);

export default Loading;
