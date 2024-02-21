import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { Avatar } from '@material-ui/core'
import { selectUser } from '../features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);


    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img
                    src="https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2671.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais"
                    alt="BgImage"
                />
                <Avatar className='sidebar__avatar' src={user.photoUrl} />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Profile viewers</p>
                    <p className='sidebar__statNumber'>7,889</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Post impressions</p>
                    <p className='sidebar__statNumber'>10,000</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar;