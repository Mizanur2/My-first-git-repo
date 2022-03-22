import logo from './logo.svg';
import './App.css';

const number = 3432;
const singerStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '20px'
}


const singers = [
  { name: 'Dr. Mahfujur Rahman', job: 'singer' },
  { name: 'Hero alom', job: 'babu khaiche' },
  { name: 'jems', job: 'baba' },
  { name: 'tahsan khan', job: 'prem tumi' }
];
function App() {
  const players = ['tamim', 'liton', 'mosaddek', 'miraz', 'shanto', 'mashrafee', 'mushfiqe', 'mahmudulldah', 'sofiul'];
  return (
    <div className="App">
      {
        players.map(nayok => <li>{nayok}</li>)
      }
      {
        players.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      <header className="App-header">
        <h1>javascript xml</h1>
        <div className="container">
          <h3>Hello react js </h3>
        </div>
        <div className="music">
          {/* <p style={singerStyle}>Name: {singer.name}</p>
          <p>Job: {singer.job}</p> */}
          <Person name="Rubel Hossain" nayika="Bulbuli Khanom"></Person>
          <Person name="Taskin Ahmed" nayika="Ajaira khatun"></Person>
          <Person name="Shakib Al Hasan" nayika="Shisir Hasan"></Person>
          <Person name={players[0]}></Person>
          <Person name={players[1]}></Person>
          <Person name={players[2]}></Person>
          <Person name={players[3]}></Person>
          <h3>New Components</h3>
          <Friend phone='0194834'></Friend>
          <Friend phone='0183743'></Friend>
          <Friend phone='0170248'></Friend>
        </div>
      </header>
    </div>
  );
}


function Person(props) {
  // console.log(props)
  return (
    <div className='person'>
      <h3>Name : {props.name}</h3>
      <p>Wife : {props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h2>Name : Alim uddin</h2>
      <p>Phone : {props.phone}</p>
    </div>
  )
}
export default App;
