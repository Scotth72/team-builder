import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Friends from './components/Friends'
import FriendForm from './components/FriendForm'

const App = () => {
  const [friend, setFriends] = useState([{
    name: "",
    email: "",
    role:""
    }]);

  const addNewFriend = input => {
    const newFriend = {
    name: input.name,
    email: input.email,
    role: input.role
  };
  setFriends([...friend, newFriend])
};
const DeleteFriend = output => {
  setFriends(friend.filter(friend => friend !== output))
}
return (
  <div className = "App">
    <h1>Team Builder</h1>
    <FriendForm addNewFriend={addNewFriend}  />
    <Friends friend={friend} DeleteFriend={DeleteFriend}/>
  </div>
  );
}

export default App;
