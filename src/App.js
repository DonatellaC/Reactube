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
    });
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
          <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
          <VideoDetail video={this.state.selectedVideo} />
        </div>
      </div>
    );
  }
}

export default App;
