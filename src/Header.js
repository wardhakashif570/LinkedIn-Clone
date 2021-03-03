import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import ApoyoImg from './Apoyo.jpg';


function Header() {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const logoutofApp=()=>{
     dispatch(logout());
     auth.signOut();
    };
    return (
        <div className='header'>
            <div className='header__left'>
        <img src={ApoyoImg} alt=""  />



                <div className='header__search'>
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>


            <div className='header__right'>
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption  title="me" avatar={true} onClick={logoutofApp} />
                 
            </div>


        </div>
    )
}

export default Header
