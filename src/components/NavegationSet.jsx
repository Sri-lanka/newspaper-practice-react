import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function NavegationSet() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }
    const handlePolitics = () => {
        navigate('/category_news/1');
    }
    const handleSports = () => {
        navigate('/category_news/2');
    }
    const handleTecnology = () => {
        navigate('/category_news/3');
    }
    const handleEntertainment = () => {
        navigate('/category_news/4');
    }
    const handleHealth = () => {
        navigate('/category_news/5');
    }
    return (
        <>
        
            <nav className='flex items-center justify-center bg-[#e0e0e0] '>
                <ButtonGroup variant="text" aria-label="Basic button group" >
                    <Button onClick={handleHome}>Home</Button>
                    <Button onClick={handlePolitics}>Politics</Button>
                    <Button onClick={handleSports}>Sports</Button>
                    <Button onClick={handleTecnology}>Technology</Button>
                    <Button onClick={handleEntertainment}>Entertainment</Button>
                    <Button onClick={handleHealth}>Health</Button>
                </ButtonGroup>
            </nav>

        </>
    );
}