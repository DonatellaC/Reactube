import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import youtube from "./apis/youtube";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0].id.videoId,
    });
    // console.log(this.state.videos);
  };

  handleVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Reactube</h1>
        </header>
        <div>
          <SearchBar onFormSubmit={this.handleSubmit} />
          <VideoList videos={this.videos} handleVideoSelect={this.handleVideoSelect} />
          <VideoDetail />
        </div>
      </div>
    );
  }
}

export default App;
