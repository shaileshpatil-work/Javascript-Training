import ReactDOM from 'react-dom';
import Unsplash from 'unsplash-js';

class HelloComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      photos: []
    }
  }

  componentDidMount(){
    unsplash.collections.listCollections(1, 10, "popular")
      .then(res => res.json())
      .then(data => {
        console.log(data)
      });
  }

  render() {
    return (
      <div className='container'>
        <h1>Hello World</h1>
        <ul>
          {data.map((item)=>{
            return item.preview_photos.map((pic)=>{
              return <li><img src={pic.urls.regular}/></li>
            })
          })}
        </ul>
      </div>
    );
  }
}

const unsplash = new Unsplash({
  applicationId: "f7d406b08cfa891e9db5f09bb856c53b001d3dd7ae3b29477c36be0500916103",
  secret: "9d4e87f5bc8b11589e793a8e9ad7f62fcb40a02a0dfa56082927039128431986"
});


ReactDOM.render(
  <HelloComponent />,
  document.getElementById('youtubeApp')
);
