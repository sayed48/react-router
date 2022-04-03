import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    // const {name, email, website} = friend;
    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h2>Details of single Friend: {friendId}</h2>
            <h3>Friend: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>Website: {friend.website}</h3>
            <h3><small>City: {friend.address?.city}</small></h3>
            <h3><span>Latitude: {friend.address?.geo?.lat}</span></h3>
        </div>
    );
};

export default FriendDetail;