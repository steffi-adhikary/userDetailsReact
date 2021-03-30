import './App.css';
import React, { useState, useEffect } from "react";


/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


const Users = () => {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState({});

  async function fetchData() {
    const res = await fetch("https://reqres.in/api/users/");
    res
      .json()
      .then((res) => {
        const usr = res.data;
        var usrArr = [];
        usr.forEach((element) => {
          usrArr.push(element.email);
        });
        console.log('res', usr);
        setUsers(usr);
      })
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      {/* {users.map((user, index) => (
          <div key={index} className='userBorder'>
            <img className='imgStyle' src={user.avatar} alt={user.first_name + ' ' + user.last_name}/>
            <p className='emailStyle'>{user.email}</p>
            <p className='userNameStyle'>{ user.first_name + ' ' + user.last_name}</p>
          </div>
        ))} */}
        {users.map((user, index) => (
          <div key={index} className='userBorder'>
            <img className='imgStyle' src={user.avatar} alt={user.first_name + ' ' + user.last_name}/>
            <p className='emailStyle'>{user.email}</p>
            <p className='userNameStyle'>{ user.first_name + ' ' + user.last_name}</p>
          </div>
        ))}
      {/* <span>{JSON.stringify(users)}</span> */}
      <hr />
      {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
    </div>
  );

  //   return (
  //     <>
  //         {users.map( d => <div>{d}</div>)}<input type="text" placeholder="Type your query" onEnter={searchQuery} />
  //     </>
  // )
};
export default Users;

//export default App;
