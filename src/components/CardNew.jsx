import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useNavigate } from 'react-router-dom';



export default function CardNew({newItem}) {
    
    const navigate = useNavigate();
  
    const handleViewDetails = () => {
        navigate(`/news/${newItem.id}`); // Redirige a la ruta de detalles
    };
    const handleUserNews = ()=> {
        navigate(`/user_news/${newItem.user.id}`)
    }
    return (
        <>
    
            <Card  sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {newItem.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {newItem.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleViewDetails}>Learn More</Button>
                    <Button size="small" onClick={handleUserNews}>@{newItem.user.userName}</Button>
                </CardActions>
            </Card>
          
        </>
    );
}