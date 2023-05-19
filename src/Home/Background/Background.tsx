import './Background.css';

function Background() {
  return (
    <img
      src={require('./background.png')}
      className="home_background"
      alt="drawing in purple contrast of half of the face of the developer Greg GS"
    />
  );
}

export default Background;
