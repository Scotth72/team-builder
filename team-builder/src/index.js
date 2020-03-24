import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function App (){
  const [friend, setFriends] = useState([
    {
    name: "",
    email: "",
    role:
    }
  ]);

  const addNewFriend = input => {
    name: input.name,
    email: input.email,
    role: input.role
  };
  setFriends([...friend, addNewFriend])
};
return (
  <div className = "App">
    <h1>Team Builder</h1>
    <FriendForm addNewFriend={addNewFriend} />
    <Friends friend={friend} />
  </div>
);
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

