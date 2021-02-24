import React from "react";
import { Grid } from "@material-ui/core";
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
      <div>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={11}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8} className="videoDetail">
                <VideoDetail video={this.state.selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList
                  videos={this.state.videos}
                  handleVideoSelect={this.handleVideoSelect}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
