import { useState } from 'react';

const Users = ({ users, setUsers, addUser, updateUser, deleteUser }) => {
    const [newUser, setNewUser] = useState({ firstname: '', lastname: '', email: '', username: '' });
    const [editingUser, setEditingUser] = useState(null);

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingUser) {
            updateUser(editingUser.id, newUser);
            setEditingUser(null);
        } else {
            addUser(newUser);
        }
        setNewUser({ firstname: '', lastname: '', email: '', username: '' });
    };

    const handleEdit = (user) => {
        setNewUser({
            firstname: user.name?.firstname || '',
            lastname: user.name?.lastname || '',
            email: user.email || '',
            username: user.username || '',
        });
        setEditingUser(user);
    };

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>

          
            <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white shadow-md rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstname" value={newUser.firstname} onChange={handleChange} placeholder="First Name" className="border p-2 rounded w-full" required />
                <input type="text" name="lastname" value={newUser.lastname} onChange={handleChange} placeholder="Last Name" className="border p-2 rounded w-full" required />
                <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded w-full" required />
                <input type="text" name="username" value={newUser.username} onChange={handleChange} placeholder="Username" className="border p-2 rounded w-full" required />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded col-span-1 md:col-span-2 hover:bg-blue-600 transition">
                    {editingUser ? "Update" : "Add"} User
                </button>
            </form>

           
            <ul className="space-y-3">
                {users.map((user) => (
                    <li key={user.id} className="p-4 border rounded-lg bg-white shadow flex flex-col md:flex-row md:justify-between md:items-center">
                        <div className="mb-2 md:mb-0">
                            <strong>Name:</strong> {user.name?.firstname || 'N/A'} {user.name?.lastname || 'N/A'} <br />
                            <strong>Email:</strong> {user.email || 'N/A'} <br />
                            <strong>Username:</strong> {user.username || 'N/A'}
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">Edit</button>
                            <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
