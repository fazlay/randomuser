import React, { useEffect, useState } from 'react'
import { CardGroup, Col, Row } from 'react-bootstrap'
import SingleUser from '../component/SingleUser'



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
            <Row md={4} className="g-4">
           
            {users.map(user=>(<SingleUser key={user.cell} user={user}></SingleUser>))}
                
      
            </Row>
      
               
                

        
        </div>
    )
}

export default HomePage
