import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './components/sass/App.sass';

const videoJsOptions = {
  autoplay: true,
  controls: true,
  width: 300,
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};

function App() {
  return (
    <div>
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
}

export default App;
