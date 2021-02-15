import React from "react";

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div className="videoItem" onClick={() => handleVideoSelect(video)}>
            <img className="videoItemImg" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="videoItemTitle">{video.snippet.title}</div>
        </div>
    );
}

export default VideoItem;

