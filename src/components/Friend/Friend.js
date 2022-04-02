import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend
    const navigate = useNavigate();
    const shoeFriendDetail = () => {
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button onClick={shoeFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;