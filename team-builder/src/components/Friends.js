import React from "react";
import SingleFriend from './SingleFriend';

const Friends = props => {
    console.log(props);
    return(
        <div className="friend-list">
            {props.friend.map(friend => {
                return <SingleFriend friend={friend} DeleteFriend={props.DeleteFriend}/>
            }
               
            )}

        </div>
    )

}


export default Friends;