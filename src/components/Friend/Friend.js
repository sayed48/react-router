import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
            <Link to={'/friend/'+id}>Details</Link>
            <button onClick={shoeFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;