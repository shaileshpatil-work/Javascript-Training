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
  
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount(){
    this.unsplash.photos.listPhotos(2, 15, "latest")
      .then(toJson)
      .then(json => {
        this.setState({
          pic: json
        })
      });
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById('header');
    if (this.isBottom(wrappedElement)) {
      this.unsplash.photos.listPhotos(3, 15, "latest")
        .then(toJson)
        .then(data => {
          this.setState({
            // pic: [...this.state.pic,data]
            pic: data
          })
        });
    }
  };

  render() {
    return (
      <div className="App">
          <ul className="listWrapper" id="header">
            {
              this.state.pic.map((item)=><li className="imageWrapper"><img src={item.urls.small}></img></li>)
            }
          </ul>
      </div>
    );
  }
}

export default App;
