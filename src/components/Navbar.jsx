import React from 'react'
import { Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom'
import icon from '../images/2.png'
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className ='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <h1 className="logo" id='linky'><Link to="/">cryptoCipher</Link></h1>

      </div>
       <Menu theme='light'>
           <Menu.Item icon= {<HomeOutlined/>}>
               <Link to= "/">Home</Link>
           </Menu.Item>
           <Menu.Item icon= {<FundOutlined/>}>
               <Link to= "/cryptocurrencies">Crypto</Link>
           </Menu.Item>
           <Menu.Item icon= {<MoneyCollectOutlined/>}>
               <Link to= "/exchanges">Exchanges</Link>
           </Menu.Item>
           <Menu.Item icon= {<BulbOutlined/>}>
               <Link to= "/news">News</Link>
           </Menu.Item>
</Menu>
    </div>
  )
}

export default Navbar