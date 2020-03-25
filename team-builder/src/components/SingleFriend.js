import React from "react";


const SingleFriend = props => {
    return(
        <>
        <h2>{props.friend.name}</h2>
        <h2>{props.friend.email}</h2>
        <h2>{props.friend.role}</h2>   
        <button onClick={()=> props.DeleteFriend(props.friend)} type="button">Delete</button>
        </>
    )
};

export default SingleFriend;