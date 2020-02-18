import React from 'react';

import Aux from '../../hoc/Aux';
import Quote from '../../containers/Quote/Quote';
import BackgroundImage1 from '../../assets/images/background.jpg';

const Layout = () => {
  return (
    <Aux >
      <div style={{ backgroundImage: `url(${BackgroundImage1})` }}></div>
      <Quote />
    </Aux >
  )
}

export default Layout;
