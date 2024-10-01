
import Typography from '@mui/material/Typography';
import CardNew from './CardNew';
import  Pagination  from '@mui/material/Pagination';
import useNews from '../hooks/useNews';
import { useState, useEffect } from 'react';
import { NewService } from '../service/newService';

const newService = new NewService();

export default function MainContent() {
   
    const { news, setNews } = useNews();
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchNews = async (page) => {
        try {
            const response = await newService.getRecentNews(page - 1 );
            setNews(response.data.content);
            setPageCount(response.data.totalPages); 
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };
       useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    
    return (
        <>
            <div className="flex-grow bg-green-500">
                <div className='flex flex-col items-center justify-center p-4'>
                    <Typography sx={{ mx: 'auto' }} variant='h5'>Recent News</Typography>
                </div>
                <div className='space-y-4 sm:space-y-0 sm:grid sm:grid-cols-5 sm:gap-6 sm:items-center sm:justify-center ml-4'>
                    {news.map((item, index) => (
                    <CardNew key={index} newItem={item}></CardNew>
                    ))}
                </div>
                <div className='flex items-center justify-center p-3'>
                    <Pagination
                     count={pageCount} 
                     page={currentPage}
                     onChange={handlePageChange}
                     shape="rounded"
                      />
                </div>
            </div>

        </>
    );
}
