import React from 'react';
import logo from '../media/yubico_logo.png';

const MainHeader: React.FC<{}> = () => (
  <div className='header'>
    <img src={logo} alt='logo' />
  </div>
);

export default MainHeader;