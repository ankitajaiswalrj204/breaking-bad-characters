import React from 'react';

const Profile=({item})=>{
    return (
        <div>
            <p className="Name">Name: {item.name}</p>
            <p>D.O.B: {item.birthday}</p>
            <p>Occupation: {item.occupation[0]}</p>
            <p>Occupation: {item.occupation[1]}</p>
            <p>Status: {item.status}</p>
            <p>Nickname: {item.nickname}</p>
            <p>Portrayed: {item.portrayed}</p> 
        </div>
    )
}

export default Profile;