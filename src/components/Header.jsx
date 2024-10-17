import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Autocomplete } from "@mui/material";
//import useNews from "../hooks/useNews";
import { useEffect, useState } from "react";
import { NewService } from "../service/newService";
const newService = new NewService();
import { useNavigate } from "react-router-dom";

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newNames, setNewNames] = useState([]);

  useEffect(() => {
    newService.getAll().then((response) => setNewNames(response.data));
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const navigate = useNavigate();

  const handleSelect = (event, value) => {
    if (!value) {
      navigate("/");
      return;
    }
    const selectedNew = newNames.find((option) => option.title === value);
    if (selectedNew) {
      handleViewDetails(selectedNew.id);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/news/${id}`);
  };
  const handleLogin = () => {
    navigate(`/login`)
  }
  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.reload();
  }
  const handleCreateNew = () => {
    navigate(`/create_new`)
  }

  return (
    <>
      <div className="bg-[#248eff] p-4">
        <div className="flex items-center p-4 rounded-md">
          <SearchIcon fontSize="large" />
          <Autocomplete
            id="news-search"
            freeSolo
            options={newNames.map((option) => option.title)}
            onChange={handleSelect}
            renderInput={(params) => (
              <TextField
                sx={{
                  width: 250,
                  color: 'black',
                  '& .MuiInputBase-input': {
                    color: 'black',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'black',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'black',
                  },
                  '& .MuiInput-underline:hover:before': {
                    borderBottomColor: 'black',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'black',
                  }
                }}
                {...params}
                id="standard-basic"
                label="Search New"
                variant="standard"

              />
            )}
          />

          <Typography
            sx={{ mx: "auto", mr: 'auto', fontFamily: "monospace" }}
            variant="h3"
          >
            My Newspaper
          </Typography>


          {!isLoggedIn ? (
            <Button variant="contained" onClick={handleLogin}>Log In</Button>
          ) : (
            <div className="flex items-center" >
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{ marginRight: 2 }}  
              >
                Logout
              </Button>
              <Button
                variant="contained"
                onClick={handleCreateNew}
                sx={{ marginLeft: 2 }}   
              >
                Create new
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
