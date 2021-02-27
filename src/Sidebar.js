import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user=useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="data:image/jpeg;base64,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" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar" >
                    {user.email[0]}
                    </Avatar>
                <h2>
                    {user.displayName}
                </h2>
                <h4>{user.email}</h4>

            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who view you</p>
                    <p className="sidebar__statNumber">1,543</p>
                </div>

                <div className="sidebar__stat">
                    <p>View on Post</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>



            </div>


            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems("Reactjs")}
                {recentItems("Programming")}
                {recentItems("Redux")}
                {recentItems("Python")}
                {recentItems("Data Science")}

            </div>
        </div>
    );
}

export default Sidebar




