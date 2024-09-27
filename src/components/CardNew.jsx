import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { NewService } from "../service/newService";
import { useEffect, useState } from 'react';

const newService = new NewService();

export default function CardNew() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        newService.getRecentNews().then((response) => setNews(response.data));
    }, []);

    return (
        <>
        {news.map((u) => (
            <Card key={u.id} sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {u.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {u.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                    <Button size="small">{u.user.userName}</Button>
                </CardActions>
            </Card>
            ))}
        </>
    );
}