import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./App.css";
import { GET_ALL_USERS } from "./query/user";

const App = () => {
    const { data, loading, error } = useQuery(GET_ALL_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers);
        }
    }, [data]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <form>
                <input type="text" />
                <input type="number" />
                <div className="btns">
                    <button>Create</button>
                    <button>Get</button>
                </div>
            </form>
            <div>
                {users.map((user) => {
                    <div className="user">
                        {user.id}. {user.username} {user.age}
                    </div>;
                })}
            </div>
        </div>
    );
};

export default App;
