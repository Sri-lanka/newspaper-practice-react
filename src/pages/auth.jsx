
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";

export default function Auth({ children }) {

    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/login')
    }
    const handleRegister = () =>{
        navigate('/register')
    }
    const handleHome = () => {
        navigate('/')
    }
    return (

        <main className="flex flex-col items-center justify-center h-screen">
            <div className="mb-20 w-full text-center"> {/* Aumenté el margen inferior */}
                <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button onClick={handleLogin}>Login</Button>
                    <Button onClick={handleRegister}>Register</Button>
                    <Button onClick={handleHome}>Home</Button>
                </ButtonGroup>
            </div>
            <div className="w-full max-w-md">{children}</div> {/* Formulario centrado */}
        </main>
    );
};
