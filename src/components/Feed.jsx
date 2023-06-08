import React, { useState, useEffect } from 'react'
import { Stack, Box ,Typography } from "@mui/material"

import Sidebar from './Sidebar'
import Videos from './Videos'

import { fetchFromApi } from './Utils/fetchFromApi'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [video, setVideo] = useState([])



  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideo(data.items))
  },[selectedCategory]);


  return (
    <Stack  sx={{
      flexDirection: {xs: "column", md: "row"},
      flexWrap: "warp"
    }}>
      <Box sx={{height: { sx: "auto", md: "92vh" }, borderRight:"1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
        <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2' sx={{ color:"#fff", mt:1.5}}>
          CopyRight 2023 2Fast4U
        </Typography>
      </Box>

      <Box sx={{overflowX:"scroll", width:{xs:"100vw", md:"100%"} , flex: 2}}>
        <Typography variant='h4' color="white" fontWeight="bold" mb={2}>
         {selectedCategory} <span style={{ color: "#F31503"}}>Videos</span>
        </Typography>
      <Videos video={video} />
      </Box>
    </Stack>
  )
}

export default Feed