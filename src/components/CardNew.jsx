import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
export default function CardNew({ newItem }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const userData = localStorage.getItem("user");
    useEffect(() => {
        
        if (userData) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    const user = JSON.parse(userData);

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/news/${newItem.id}`); // Redirige a la ruta de detalles
    };
    const handleUserNews = () => {
        navigate(`/user_news/${newItem.user.id}`);
    };

    const truncate = (title, limit) => {
        if (title.length > limit) {
            return title.slice(0, limit - 3) + "...";
        }
        return title;
    };
    return (
        <>
            <Card sx={{ maxWidth: 345, minHeight: 200, maxHeight: 200 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {newItem.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {truncate(newItem.content, 100)}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginBlock: "auto" }}>
                    <Button size="small" onClick={handleViewDetails}>
                        Learn More
                    </Button>
                    <Button size="small" onClick={handleUserNews}>
                        @{newItem.user.userName}
                    </Button>
                    {!isLoggedIn || user.id != newItem.user.id ? (null) : (<EditIcon></EditIcon>)}
                </CardActions>
            </Card>
        </>
    );
}
