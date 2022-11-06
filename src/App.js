import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  const navigate = useNavigate();
  const navigateToCounter = ()=>{
    navigate('/Counter.js');
  };
  return (
    <section className='container'>
      <div class='bg'>
      <Navbar/>
      <div className='card'>
      <h1>WELCOME TO COUNTER</h1>
      <p className= 'message'>Make your increments, decrements,</p>
      <p className= 'message'>And also, set your custom values.</p>
      <p className= 'message'>Go on, have fun.</p>
      <p className= 'message'>Don't let me stop you now.</p>
      <button className='button' onClick={navigateToCounter}>PROCEED</button>
      </div>
      </div>
    </section>
  );
}

export default App;
