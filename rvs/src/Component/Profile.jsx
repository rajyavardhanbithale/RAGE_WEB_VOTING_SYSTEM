import React, { useEffect, useState } from "react"
import Cookies from 'universal-cookie';

function Profile() {
    const [users, setUsers] = useState([])
    let url = "http://127.0.0.1:8000/getuser/"

    const cookies = new Cookies();
    const val = cookies.get('BROWSER-X-RENDER-COOKIE'); 

    const fetchUserData = () => {
        fetch(`http://127.0.0.1:8000/getuser/${val}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div>
            <h1>{users.firstname}</h1>
        </div>
    );
}

export default Profile;