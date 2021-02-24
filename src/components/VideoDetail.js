import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "60%" }}>
        <iframe
          frameBorder="0"
          src={videoSrc}
          height="100%"
          width="100%"
          title="Video player"
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.description}
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoDetail

