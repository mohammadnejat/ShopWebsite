import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Feed from "./components/Feed"
import VideoDetail from "./components/VideoDetail"
import ChannelDetail from "./components/ChannelDetail"
import SearchFeed from "./components/SearchFeed"
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", height:"100%" }}>
        <Navbar />
        <Switch >
          <Route exact path="/" component={Feed} />
          <Route path="/Video/:id" component={VideoDetail} />
          <Route path="/Channel/:id" component={ChannelDetail} />
          <Route path="/Search/:searchTerm" component={SearchFeed}  />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App