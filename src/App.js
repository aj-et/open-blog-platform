import './App.css';
import Login from './partials/login.js';
import Register from './partials/register.js';


function App() {
  return (
    <section className='forms'>
      <div className="login-form">
        {<Login></Login>}
      </div>

      <div className='register-form'>
        {<Register></Register>}
      </div>
    </section>
  );
}

export default App;
