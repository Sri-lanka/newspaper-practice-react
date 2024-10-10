import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
//import { Box } from '@mui/material';
import { UserService } from "../service/userService";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const userService = new UserService();

export default function CardUser() {
    const navigate = useNavigate();

    const [topUsers, setTopUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const res = await userService.getTopUsers();
            setTopUsers(res.data);
            console.log(res.data);
        }
        fetchUsers()
    }, [])

    const podium = [
        "1#",
        "2#",
        "3#",
        "4#",
        "5#",
    ]
    const handleViewUser = (id) => {
        navigate(`/user_news/${id}`);
    };

    return (
        <>
            {topUsers.map(([id, userName, value], index) => (
                <Card key={id} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {podium[index]}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {userName}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                            {value} News
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleViewUser(id)}>View User</Button>
                    </CardActions>
                </Card>
            ))}
        </>
    );
}