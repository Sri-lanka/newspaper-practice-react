import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export default function NavegationSet() {

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }
    return (
        <>
        
            <nav className='flex items-center justify-center bg-white'>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button onClick={handleHome}>Home</Button>
                    <Button>Politics</Button>
                    <Button>Sports</Button>
                    <Button>Technology</Button>
                    <Button>Entertainment</Button>
                    <Button>Health</Button>
                </ButtonGroup>
            </nav>

        </>
    );
}