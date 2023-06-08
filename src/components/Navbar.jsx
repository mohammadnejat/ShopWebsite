import React from 'react'
import Title from "../images/Title.png"
import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }} >
        <img src={Title} alt="logo"  height={45}/>
      </Link>
      <SearchBar />
    </Stack>
  )

}

export default Navbar