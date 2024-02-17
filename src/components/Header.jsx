import './Header.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SupervisorAccountRoundedIcon from '@mui/icons-material/SupervisorAccountRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HeaderOption from './HeaderOption';


function Header() {
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
                <HeaderOption
                    avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png'
                    title='me'
                />
                
            </div>

        </div>
    )
}

export default Header