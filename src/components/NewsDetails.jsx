
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { useParams } from 'react-router-dom';
import { NewService } from '../service/newService';
import { useEffect, useState } from 'react';
const newService = new NewService();

export default function NewsDetails() {


    const { id } = useParams();
    const [newsItem, setNewsItem] = useState([]);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                const response = await newService.getNewById(id);
                setNewsItem(response.data);
            } catch (error) {
                console.error('Error fetching news details:', error);
            }
        };
        fetchNewsDetail();
    }, [id]);
    console.log(newsItem);
    
    return (
        <>
       
            <div className="flex-grow bg-green-500">
                <div className='flex flex-col items-center justify-center p-4'>
                    <Card sx={{ maxWidth: 700, maxHeight: 500 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {newsItem.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    {newsItem.content}
                                    
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                               {/* {newsItem.user.userName} */}
                                {/* {newsItem.category.nameCategory} */}
                            </Button>
                            <Button size="small" color="primary">
                                {newsItem.publicationDate}
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </>
    );
}
