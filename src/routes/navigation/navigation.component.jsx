import { signOut } from 'firebase/auth';

import { Fragment , useContext } from 'react';

import {Outlet , Link } from 'react-router-dom';

import { ReactComponent as Moon } from '../../assets/arr.svg';

import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss'

const Nav = () => {
  const {currentUser } = useContext(UserContext);

    return (
      <Fragment >
        <div className="Nav">
        <Link className='logo-container' to='/'> 
    <Moon className='logo'/>
        </Link>
          
       <div className='nav-links-container'>
       <Link className='nav-link' to='/shop'> 
        SHOP
        </Link>
        {
          currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
            SIGN OUT</span> )
             : (<Link className='nav-link' to ='/auth'>
               SIGN IN
             </Link>
             )
        }
        </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }


  export default Nav;