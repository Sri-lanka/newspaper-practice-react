import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CoPresentIcon from '@mui/icons-material/CoPresent';
export default function Index() {


  return (
    <>
      <div className="grid grid-cols-5 grid-rows-5 gap-0">
        <div className="col-span-5 bg-blue-500">
          <div className="flex items-center p-4 rounded-md">
            <SearchIcon fontSize='large' className="ml-4 mr-2" />
            <TextField id="standard-basic" label="Search New" variant="standard" />
            <Typography sx={{ mx: 'auto' }} variant='h4'>My Newspaper</Typography>
            <Button variant="contained">Iniciar Sesión</Button>
          </div>
        </div>
        <div className="col-span-5 row-span-3 row-start-2 bg-green-500">
          <div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                >
                  Deportes
                </AccordionSummary>
                <AccordionDetails>
                  <Card variant="outlined" sx={{ maxWidth: 360 }}>
                    <Box sx={{ p: 2 }}>
                      <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <Typography gutterBottom variant="h5" component="div">
                          titulo
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          usuario
                          <CoPresentIcon></CoPresentIcon>
                        </Typography>
                      </Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                      </Typography>
                    </Box>
                  </Card>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion sx={{ bgcolor: 'red', color: 'white' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Categories
                </AccordionSummary>
                <AccordionDetails>
                  <a>News</a><br />
                  <a>Sports</a><br />
                  <a>Technology</a><br />
                  <a>Entertainment</a><br />
                  <a>Politics</a><br />
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion sx={{ bgcolor: 'red', color: 'white' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Categories
                </AccordionSummary>
                <AccordionDetails>
                  <a>News</a><br />
                  <a>Sports</a><br />
                  <a>Technology</a><br />
                  <a>Entertainment</a><br />
                  <a>Politics</a><br />
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion sx={{ bgcolor: 'red', color: 'white' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Categories
                </AccordionSummary>
                <AccordionDetails>
                  <a>News</a><br />
                  <a>Sports</a><br />
                  <a>Technology</a><br />
                  <a>Entertainment</a><br />
                  <a>Politics</a><br />
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
            <Accordion sx={{ bgcolor: 'red', color: 'white' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Categories
              </AccordionSummary>
              <AccordionDetails>
                <a>News</a><br />
                <a>Sports</a><br />
                <a>Technology</a><br />
                <a>Entertainment</a><br />
                <a>Politics</a><br />
              </AccordionDetails>
            </Accordion>
          </div>
          </div>
        </div>
        <div className="col-span-5 row-start-5 bg-yellow-500">
          <div class="container" className='items-center'>
            <p>&copy; 2024 Mi Periódico. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>

    </>
  );
}


