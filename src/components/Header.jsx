import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export default function Header() {
    //const { news, setNews } = useNews();

    return (
        <>
            <div className="bg-blue-500 p-4">
                <div className="flex items-center p-4 rounded-md">
                    <SearchIcon fontSize='large' className="ml-4 mr-2" />
                    <TextField id="standard-basic" label="Search New" variant="standard" />
                    <Typography sx={{ mx: 'auto', fontFamily: 'monospace' }} variant='h3'>My Newspaper</Typography>
                    <Button variant="contained">Iniciar Sesión</Button>
                </div>
            </div>
        </>
    );
}

