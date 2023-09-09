import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


const queryParameters = new URLSearchParams(window.location.search)
const id = queryParameters.get("id")
async function fetchUserData() {


    const cookies = new Cookies();
    const valc = cookies.get('BROWSER-X-RENDER-COOKIE')

    const navigate = useNavigate();

    if (valc === undefined)
        navigate('/')

    
    const id = queryParameters.get("id")

    

    try {
        const response = await fetch(`http://127.0.0.1:8000/getelecions/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function Votingpage() {
    const navigate = useNavigate();
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchUserData();
            if (data) {
                setUsers(data);
            }
            setLoading(false);
        }

        fetchData();
    }, []);





    const cookies = new Cookies();
    var tempsr = cookies.get("BROWSER-X-RENDER-COOKIE")
 
    
    const [receivedData, setReceivedData] = useState({});
    const [id, setId] = useState('');

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/getuser/${tempsr}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setReceivedData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [tempsr]);

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search);
        const idFromQueryParam = queryParameters.get('id');
        setId(idFromQueryParam);
    }, []);

    useEffect(() => {
        // Check if id is in receivedData.voted
        if (id && receivedData.voted && receivedData.voted.includes(id)) {
            console.log('Id matches a value in voted array');
            navigate('/')
        }else{
            console.log("NOT MATCH")
        }
    }, [id, receivedData]);

    
    
    const handleVote = async (candidateName) => {
        try {
            // Create the URL with the selected candidate's name as a parameter
            const url = `http://127.0.0.1:8000/getvote?user_id=${id}&name=${candidateName}&usrid=${cookies.get('BROWSER-X-RENDER-COOKIE')}`;

            // Send a GET request to the API
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log(`Vote for ${candidateName} successful!`);
                navigate('/')
                // Optionally, you can update the UI or state to reflect the vote.
            } else {
                console.error('Error casting vote:', response.statusText);
            }
        } catch (error) {
            console.error('Error casting vote:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!users) {
        return <div>Error fetching data.</div>;
    }


    return (
        <>
            <header className="flex justify-center p-5 bg-cover bg-[url('./assets/BG.png')] border-b-2">
                <h1 className="font-bold text-3xl text-center text-gray-950">Voting Section</h1>
            </header>
            <center>
                <p className="text-3xl p-5 m-2">Free Election</p>
            </center>
            <div className="flex justify-center w-full items-center gap-4 h-full p-20">
                {users &&
                    users.candis.map((data) => (
                        <div key={data} className="border-2 border-gray-400 w-60 h-auto rounded-2xl shadow-2xl ">
                            <h2 className="m-5 font-bold text-3xl text-center text-gray-950">{data}</h2>
                            <div className='flex  justify-center'>
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" /></div>

                            <div className='flex  justify-center'>
                            <button
                                onClick={() => handleVote(data)} // Pass the candidate's name to handleVote
                                className="px-10 mt-6 mb-6 py-1 text-sm text-black-600 font-semibold rounded-full border-2 border-gray-200 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition delay-100 duration-500 ease-in-out"
                            >
                                Vote
                            </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Votingpage;
