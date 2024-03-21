import React from 'react'
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {

  let data;

  switch (type) {
    case "user": 
    data={
      title: "USERS",
      isMoney: false,
      link: "See al users",
      icon: (<PersonIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)"}}/>)
    };
    break
    case "order": 
    data={
      title: "ORDERS",
      isMoney: false,
      link: "View al orderes",
      icon: (<StorefrontIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)"}}/>)
    };
    break
    case "earning": 
    data={
      title: "EARNINGS",
      isMoney: true,
      link: "See net earnings",
      icon: (<PaidIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)"}}/>)
    };
    break
    case "balance": 
    data={
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: (<AccountBalanceWalletIcon className='icon' style={{color: "crimson", backgroundColor: "rgba(2550, 0,0,0.2)"}}/>)
    };

    break;
    default: 
        break;
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget