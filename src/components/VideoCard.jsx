import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"



const VideoCard = ({ video }) => {
  return (
    <Card sx={{ width:"360px", borderRadius: 0}}>
      <Link >
      <CardMedia
        image={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
        sx={{width:"360px", height: 180}}
      />
      </Link>
      <CardContent sx={{height: 60, backgroundColor: "#1e1e1e"}}>
        <Typography gutterBottom variant="body1" sx={{ fontWeight:"500", color:"white"}} component="div">
          {video.snippet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight:"400", color:"gray"}}>
        {video.snippet.channelTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard