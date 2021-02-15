import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe src={videoSrc} allowFullScreen title='Video player' />
      <div>
        <h4 >{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail

