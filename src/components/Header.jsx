import './Header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from '../features/userSlice';
import HeaderOption from './HeaderOption';


function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    const user = useSelector(selectUser);

    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                    alt="Li_icon"
                />

                <div className='header__search'>
                    <SearchRoundedIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={HomeRoundedIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountRoundedIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterRoundedIcon} title='Jobs' />
                <HeaderOption Icon={CommentRoundedIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsRoundedIcon} title='Notifications' />
                <HeaderOption avatar={true} onClick={logoutOfApp} title="me" />
            </div>
        </div>
    )
}

export default Header