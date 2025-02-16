import React from 'react'
import {Link} from 'react-router-dom'
import { Account } from '../../../account.jsx'
import { WalletOptions } from '../../../wallet-options.jsx'
import { useAccount } from 'wagmi'

import frameIcon from '../../../assets/Frame.png'
import './style.css'

function ConnectWallet() {
  const { isConnected } = useAccount()
  if (isConnected) return <Account />
  return <WalletOptions />
}

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='header'>
        <Link to={'/'}>
           <img src={frameIcon} />
        </Link>
        <ConnectWallet />
       </div>
    </div>
  )
}

export default Header