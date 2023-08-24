
// Fetch Api methoed

import React,{ useEffect, useState} from "react";

function FetchApi(){
    const[user,setUser] = useState([]);

    const fetchData = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
    }

    useEffect(()=>{
       fetchData();
    },[])

    return(
        <main>
            <ul>
                {user && user.length > 0 && user.map((userObj,index) => (
                    <li key={userObj.id}>{userObj.name}</li>
                ))} 
            </ul>
        </main>
    )
}
export default FetchApi;

// Axion methoed

// import axios from "axios";

// const fetchData = () =>{
//     return axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => setUser(response.data));
// }

// useEffect(()=>{
//    fetchData();
// },[])


// async and await methoed

// async function fetchData(){
//    try{
//      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
//      setUser(response.data)
//    }catch (error){
//      console.error(error);
//    }
// }

// useEffect(()=>{
//     fetchData();
//  },[])

