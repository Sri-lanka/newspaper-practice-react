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
  const [newNames, setNewNames] = useState([]);

  useEffect(() => {
    newService.getAll().then((response) => setNewNames(response.data));
  }, []);

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

  return (
    <>
      <div className="bg-blue-500 p-4">
        <div className="flex items-center p-4 rounded-md">
          <SearchIcon fontSize="large" />
          <Autocomplete
            id="news-search"
            freeSolo
            options={newNames.map((option) => option.title)}
            onChange={handleSelect}
            renderInput={(params) => (
              <TextField
                sx={{ width: 250 }}
                {...params}
                id="standard-basic"
                label="Search New"
                variant="standard"
              />
            )}
          />

          <Typography
            sx={{ mx: "auto", mr: 84, fontFamily: "monospace" }}
            variant="h3"
          >
            My Newspaper
          </Typography>
          <Button variant="contained">Iniciar Sesión</Button>
        </div>
      </div>
    </>
  );
}
