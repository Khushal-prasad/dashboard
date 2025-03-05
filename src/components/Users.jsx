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
        <div>
            <h2 className="text-2xl font-bold mb-4">Users</h2>

          
            <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white shadow-md rounded">
                <input type="text" name="firstname" value={newUser.firstname} onChange={handleChange} placeholder="First Name" className="border p-2 mr-2" required />
                <input type="text" name="lastname" value={newUser.lastname} onChange={handleChange} placeholder="Last Name" className="border p-2 mr-2" required />
                <input type="email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" className="border p-2 mr-2" required />
                <input type="text" name="username" value={newUser.username} onChange={handleChange} placeholder="Username" className="border p-2 mr-2" required />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2">{editingUser ? "Update" : "Add"} User</button>
            </form>

        
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="mb-2 p-2 border rounded flex justify-between items-center">
                        <div>
                            <strong>Name:</strong> {user.name?.firstname || 'N/A'} {user.name?.lastname || 'N/A'} <br />
                            <strong>Email:</strong> {user.email || 'N/A'} <br />
                            <strong>Username:</strong> {user.username || 'N/A'}
                        </div>
                        <div>
                            <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-3 py-1 mr-2">Edit</button>
                            <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
