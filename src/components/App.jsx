import UserList from "../components/UserList"
import { useState, useEffect } from "react";
import Search from "./Search"

export default function App() {
  const [users, setUsers] = useState([]);

  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users/");

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setUsers(Array.isArray(data) ? data : [data])
      })
  }, [url])

  function getRandomUser() {
    let randomNo = Math.floor(Math.random() * 10) + 1
    setUrl(`https://jsonplaceholder.typicode.com/users/${randomNo}`)
  }

  function getAllUser(){
    setUrl("https://jsonplaceholder.typicode.com/users/")
  }


  return (
    <>
      {users ? <UserList users={users} getRandomUser={getRandomUser} getAllUser={getAllUser}/> : <p>Loading users...</p>}
    </>
  )
}


