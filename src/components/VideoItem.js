import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <Grid item xs={12}>
            <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => handleVideoSelect(video)}>
                <img
                    width={250} height={200}
                    style={{ marginRight: "10px" }}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.description}
                />
                <Typography variant="subtitle1">{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;

