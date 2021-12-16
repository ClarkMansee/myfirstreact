import logo from '../Pictures/dota2.png';
import '../App.css';
import Greet from './Greet';
import Button from './Button';
import Hello from './Hello';

const Home = () => {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DOTA 2
        </p>
        <p>{Hello()}</p>
        {/* <Greet/>
         <Message/>  */}
        <Greet name = "noob"/>
          <Button/>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=rovpURXqizo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Dota 2
        </a>
      </header>
    </div>
  );
}

export default Home;
