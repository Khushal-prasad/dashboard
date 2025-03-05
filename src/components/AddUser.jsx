import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = ({ addUser }) => {
    const [user, setUser] = useState({ firstname: "", lastname: "", email: "", username: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.firstname && user.lastname && user.email && user.username) {
            addUser(user);
            navigate("/users");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Add New User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={user.firstname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={user.lastname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;
