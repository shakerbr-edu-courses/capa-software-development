import { getToken, isLoggedIn } from "../services/auth";
import { useState,useEffect } from "react";

function Dashboard () {
    const yeDaxlKrya = isLoggedIn();
    const [users, setUsers] = useState([])
    

    useEffect(()=>{
        if (!yeDaxlKrya) return

        async function fetchUsers(){
        const jnsya = getToken()
        const response = await fetch("http://localhost:3000/users", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization" : "Bearer " + jnsya
                }
            });
            
            if(!response.ok){
                const data = await response.json();
                throw new Error(data.error)
            }

            const data = await response.json()
            setUsers(data)
        }
        fetchUsers()
    },[yeDaxlKrya])

    return (
        <div className="font-bold text-3xl p-5">
            <table className="border-collapse border w-full max-w-3xl">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Created At</th>
                            <th className="border p-2 text-left">Name</th>
                            <th className="border p-2 text-left">Email</th>
                            <th className="border p-2 text-left">Birthdate</th>
                        </tr>
                    </thead>
                    <tbody>
                            {users.map((user) => (
                            <tr key={user.created_at}>
                                <td className="border p-2">{user.created_at}</td>
                                <td className="border p-2">{user.name}</td>
                                <td className="border p-2">{user.email}</td>
                                <td className="border p-2">
                                    {user.birthdate
                                        ? new Date(user.birthdate).toLocaleDateString()
                                        : '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}

export default Dashboard;