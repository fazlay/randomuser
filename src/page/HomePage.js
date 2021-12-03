import React, { useEffect, useState } from 'react'
import SingleUser from '../component/SingleUser'
import '../App.css'

const HomePage = () => {
    const [users, setUsers]=useState([])
useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res=>res.json())
    .then(data=>{setUsers(data.results)
    console.log(data.results[0].cell
        )})
    }, [])
   
    return (
        <div className="container">
           {users.map(user=>(<SingleUser key={user.cell} user={user}></SingleUser>))}
        </div>
    )
}

export default HomePage
