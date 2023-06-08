import { useState, useEffect } from "react";
import { UseNavigate } from 'react-router-dom';
import { Paper, IconButton, } from "@mui/material";
import { Search } from "@mui/icons-material"

import { fetchFromApi } from "./Utils/fetchFromApi";

import { setSelectedCategory, selectedCategory, video, setVideo } from "./Utils/useStateMangerMent";



const SearchBar = () => {

    

    const [value, setValue] = useState("")


    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data) => setVideo(data.items))
      },[selectedCategory]);

    let inputHandler = (event) => {
        if (event.key === "Enter") {
            setSelectedCategory(value)
            event.preventDefault();
            event.target.value = ""
        }
    }
    console.log(selectedCategory);

    return (
        <Paper
            component="form"
            onSubmit={() => { }}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5, md: 6, lg: 7 }
            }}
        >
            <input onKeyDown={inputHandler}
                className="search-bar"
                placeholder="Search..."
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <IconButton type="sumbit" sx={{ p: "10px", color: "red" }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar