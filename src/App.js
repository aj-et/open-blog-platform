import './App.css';
import Login from './partials/login.js';
import Register from './partials/register.js';
// import Login from './partials/login.js';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

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
