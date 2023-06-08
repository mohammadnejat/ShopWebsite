import { Stack, Box } from "@mui/system";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
const Videos = ({video}) => {
    
  return (
    <Stack height="100%"  direction="row" flexWrap="wrap" justifyContent="space-evenly" gap={2}>
        {video.map((item, index) => (
            <Box key={index}  >
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard ChannelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos