import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div className="videoItem row" onClick={() => handleVideoSelect(video)}>
            <img className="videoItemImg col-7" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="videoItemTitle col-5">{video.snippet.title}</div>
        </div>
    );
}

export default VideoItem;

