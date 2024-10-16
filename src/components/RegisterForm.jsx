import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper } from '@mui/material';
import { UserService } from '../service/userService';
import { useNavigate } from 'react-router-dom';
const userService = new UserService();


export default function RegisterForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { userName, password, email };
        try {

            const response = await userService.registerUser(user)
            console.log('register response', response.data)
            if (response.data && response.data.email) {
                console.log('register succesfuly', response.data)
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate('/')
            } else {
                throw new Error('login failed')
            }
        } catch (err) {
            setError("register failed. invalid info .");
            console.error('register error.', err)
        }
    };

    return (

        <div>
            <Container component="main" maxWidth="xs">
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" component="h1" gutterBottom>
                        Login
                    </Typography>
                    {error && <Typography color='error'>{error}</Typography>}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                         <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type='email'
                            label="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ marginTop: '16px' }}
                        >
                            Login
                        </Button>
                    </form>
                </Paper>
            </Container>
        </div>

    );
};
