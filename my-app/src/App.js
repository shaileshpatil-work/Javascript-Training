import React, { Component } from 'react';
import Unsplash, { toJson } from "unsplash-js";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pic: []
    }
    this.unsplash = new Unsplash({
      applicationId: "f7d406b08cfa891e9db5f09bb856c53b001d3dd7ae3b29477c36be0500916103",
      secret: "9d4e87f5bc8b11589e793a8e9ad7f62fcb40a02a0dfa56082927039128431986"
    });
  }
  
  componentDidMount(){
    this.unsplash.photos.listPhotos(2, 15, "latest")
      .then(toJson)
      .then(json => {
        pic: json
      });
  }

  render() {
    return (
      <div className="App">
          <p>OK</p>
      </div>
    );
  }
}

export default App;
