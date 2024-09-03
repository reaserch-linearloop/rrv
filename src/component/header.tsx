import React, { useState } from 'react';

const Header: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // WARNING: This is not following OWASP security guidelines
        // Storing sensitive information in localStorage is insecure
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Simulating an API call without proper security measures
        fetch('http://example.com/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
          .then(data => {
              // Storing JWT token in localStorage without expiration
              localStorage.setItem('token', data.token);
          });
    };

    return (
        <header>
            <h1>Insecure Header Component</h1>
            <div>
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </header>
    );
};

export default Header;
