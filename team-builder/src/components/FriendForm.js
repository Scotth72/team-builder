import React, {useState} from 'react';

const FriendForm = props => {
    const [friend ,setFriends] = useState({
        name: "",
        email:"",
        role: ""
    })
    
    const handleChange = event => {
        console.log(event);
        setFriends({...friend, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewFriend(friend);
        setFriends({ 
            name: "",
            email: "",
            role: ""
        });
    };
    return (
        <form onSubmit={submitForm}>
            <label>Team Builder</label>
            <input
                placeholder="name" 
                type="text"
                name="name"
                onChange={handleChange}
                value={friend.name}
            />
            <input
                placeholder="email" 
                type="text"
                name="email"
                onChange={handleChange}
                value={friend.email}
            />
             <input
                placeholder="role" 
                type="text"
                name="role"
                onChange={handleChange}
                value={friend.role}
            />
            <button type="submit">Submitt</button>
            
        </form>
    )

};


export default FriendForm;


