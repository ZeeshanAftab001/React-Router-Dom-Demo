import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Github() {
    const [data, setData] = useState({});
    const {username}=useParams()
    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='flex justify-center text-3xl items-center text-center bg-orange-600 p-4 border-none text-white w-full h-screen'>
            <div className='p-4'>Github Followers: {data.followers}</div>
           <div> <img src={data.avatar_url} alt="" height={330} width={220} className="p-4 rounded-full" /></div>
        </div>
    );
}