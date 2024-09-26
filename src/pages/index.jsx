import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


import ButtonGroup from '@mui/material/ButtonGroup';

export default function Index() {


  return (
    <>

      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <div className="bg-blue-500 p-4">
          <div className="flex items-center p-4 rounded-md">
            <SearchIcon fontSize='large' className="ml-4 mr-2" />
            <TextField id="standard-basic" label="Search New" variant="standard" />
            <Typography sx={{ mx: 'auto' }} variant='h4'>My Newspaper</Typography>
            <Button variant="contained">Iniciar Sesión</Button>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className='flex items-center justify-center bg-white'>
          <ButtonGroup variant="text" aria-label="Basic button group">
            <Button>Deportes</Button>
            <Button>Salud</Button>
            <Button>Entretenimiento</Button>
            <Button>Tecnología</Button>
            <Button>Política</Button>
          </ButtonGroup>
        </nav>

        {/* Main Content */}
        <div className="flex-grow bg-green-500">
          <div className="grid grid-cols-5 grid-rows-4 gap-4 items-center justify-content">
            <div>1</div>
            <div className="col-start-1 row-start-2 bg-yellow-500" >2</div>
            <div className="col-start-1 row-start-3">3</div>
            <div className="col-start-1 row-start-4">4</div>
            <div className="col-start-2 row-start-1">5</div>
            <div className="col-start-2 row-start-2">6</div>
            <div className="col-start-2 row-start-3">7</div>
            <div className="col-start-2 row-start-4">8</div>
            <div className="col-start-3 row-start-1">9</div>
            <div className="col-start-3 row-start-2">10</div>
            <div className="col-start-3 row-start-3">11</div>
            <div className="col-start-3 row-start-4">12</div>
            <div className="col-start-4 row-start-1">13</div>
            <div className="col-start-4 row-start-2">14</div>
            <div className="col-start-4 row-start-3">15</div>
            <div className="col-start-4 row-start-4">16</div>
            <div className="col-start-5 row-start-1">17</div>
            <div className="col-start-5 row-start-2">18</div>
            <div className="col-start-5 row-start-3">19</div>
            <div >20</div>
          </div>

        </div>

        {/* Footer */}
        <footer className="bg-yellow-500">
          <div className='text-center p-4'>
            <p>&copy; 2024 Mi Periódico. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>

    </>
  );
}


