import React, { useState } from "react";

const RandomUserFetcher = () => {
    const [userData, setUserData] = useState(null);
    
    const fetchRandomUser = async () => {
        try{
            const randomId = Math.floor(Math.random() * 10) + 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${randomId}`)
            const data = await response.json();
            setUserData(data);
            console.log(userData)
        }catch(err){
            console.log("error");
        }
    }

        return(
            <div className="card">
                <h2 >Random User Fetcher</h2>
                <button onClick={fetchRandomUser}>Get Random User</button>
                
                {userData ? (
                    <div className="user">
                        <h2>Name: {userData.name}</h2>
                        <h2>Address: {userData.address.city}</h2>
                        <h2>Phone: {userData.phone}</h2>
                        <h2>Company: {userData.company.name}</h2>
                    </div>
                ) : (
                    ""
                )}
                
            </div>
        )
    
}

export default RandomUserFetcher;