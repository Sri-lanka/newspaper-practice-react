import Typography from "@mui/material/Typography";
import CardNew from "./CardNew";
import Pagination from "@mui/material/Pagination";
import useNews from "../hooks/useNews";
import { useState, useEffect } from "react";
import { NewService } from "../service/newService";
//import { UserService } from "../service/userService";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import CardUser from "./CardUser";


const newService = new NewService();
//const userService = new UserService();
export default function MainContent() {
    const { id } = useParams();
    const { id_category } = useParams();
    const { news, setNews } = useNews();
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
 
    const location = useLocation();



    const fetchNews = async (page, page_size, id = null) => {
        try {
            console.log()
            const response = await getNewsService(page, page_size, id); //newService.getRecentNews(page - 1 );
            setNews(response.data.content);
            setPageCount(response.data.totalPages);
          
            if (page > response.data.totalPages && response.data.totalPages > 0) {
                setCurrentPage(response.data.totalPages);
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const getNewsService = (page, page_size, id) => {
        if (location.pathname === "/") {
            return newService.getRecentNews(page - 1, page_size);
        } else if (location.pathname.startsWith("/user_news")) {
            return newService.getNewsByUser(page - 1, page_size, id);
        } else if (location.pathname.startsWith("/category_news")) {
            return newService.getNewsByCategory(page - 1, page_size, id_category);
        }
        return Promise.reject(new Error("No valid path found"));
    };
    useEffect(() => {
        setCurrentPage(1);
    }, [id]);

    useEffect(() => {
        fetchNews(currentPage, 10, id);
    }, [currentPage, id, id_category]);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <div className="flex-grow bg-green-500">
                <div className="flex flex-col items-center justify-center p-4">
                    <Typography sx={{ mx: "auto" }} variant="h5">
                        Recent News
                    </Typography>
                </div>
                <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-5 sm:gap-6 sm:items-center sm:justify-center ml-4">
                    {news.map((item, index) => (
                        <CardNew key={index} newItem={item}></CardNew>
                    ))}
                </div>
                <div className="flex items-center justify-center p-3">
                    <Pagination
                        count={pageCount }
                        page={currentPage}
                        onChange={handlePageChange}
                        shape="rounded"
                    />
                </div>
                <div className="flex items-center justify-center p-3">
                    <Typography variant="h6">Top Users</Typography>
                </div>
               
                <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-5 sm:gap-6 sm:items-center sm:justify-center ml-4 mb-4 mr-4">
                    <CardUser></CardUser>
                </div>
            </div>
        </>
    );
}
