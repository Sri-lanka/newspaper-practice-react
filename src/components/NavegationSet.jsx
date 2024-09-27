import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
export default function NavegationSet() {


    return (
        <>

            <nav className='flex items-center justify-center bg-white'>
                <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button>Home</Button>
                    <Button>Deportes</Button>
                    <Button>Salud</Button>
                    <Button>Entretenimiento</Button>
                    <Button>Tecnología</Button>
                    <Button>Política</Button>
                </ButtonGroup>
            </nav>

        </>
    );
}