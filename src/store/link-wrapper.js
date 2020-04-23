import React from '../../node_modules/react';
import { NavLink } from '../../node_modules/react-router-dom';

const LinkWrapper = (props) => (
  <NavLink activeStyle={{ fontWeight: 'bold', color: '#FFFFFF', textDecoration: 'underline' }} {...props} />
);
export default LinkWrapper;
