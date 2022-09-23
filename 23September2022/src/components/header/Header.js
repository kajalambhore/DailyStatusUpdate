import { createTheme, MenuItem, TextField, ThemeProvider } from "@mui/material";
import React from "react";
import "./Header.css";
import Categories from "../data/Categories";
const Header = ({ Category, setCategory, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : "#fff",
      },
      mode: lightMode ? "light" : "dark",
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord("");
  };
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      {/* if anything in word-display word or if nothing then display word hunt */}
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="select"
            select
            label="Language"
            value={Category}
            onChange={(e) => handleChange(e.target.value)}
            variant="standard"
          >
            {Categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            className="search"
            label="Search a Word"
            id="standard-basic"
            variant="standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
