import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';

const Myapplications = () => {
    const [application,setapplication]=useState([]);
    const {user}=useContext(AuthContext)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setapplication(data))
    },[])

    return (
        <div>
            <h1>My applications</h1>
        </div>
    );
};

export default Myapplications;