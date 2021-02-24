import React from "react";
import VideoItem from "./VideoItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      handleVideoSelect={handleVideoSelect}
    />
  ));

  return (
    <Grid container spacing={10}>
      {renderedVideos}
    </Grid>
  )
}
export default VideoList

