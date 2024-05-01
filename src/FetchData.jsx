import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(' https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data))
        .catch(err => console.log(err));

    }, [])
    return (
        <div className="container">
            <div>
                <h3>Fetch Data</h3>
                <table>
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>Id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user, index) => {
                                return <tr key={index}>
                                    <td>{user.userId}</td>
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FetchData