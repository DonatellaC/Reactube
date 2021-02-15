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
      <div className="container-fluid">
        <div className="searchBar">
          <SearchBar onFormSubmit={this.handleSubmit} />
        </div>
        <div className="videos">
          <div className="row">
            <div className="col-8">
              <div className="videoDetail">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
            </div>
            <div className="col-4">
              <div className="videoList">
                <VideoList videos={this.state.videos} handleVideoSelect={this.handleVideoSelect} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

