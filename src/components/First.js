import styles from "./First.module.css"
// import { useEffect, useState } from 'react';
import Logo from "./logo.svg"


function App() {
  return (
    <div className={styles.First}>

      <div className={styles.Nav}>
        <div className={styles.Logolink}>
          <div><img src={Logo} alt = "Alyeimage"></img></div>
          <div className={styles.links}>
            <ul>
            <li> <a href = "/">Product </a> </li>
            <li> <a href = "/">Product </a> </li>
            <li> <a href = "/">Product </a> </li>
          </ul>
          </div>
        </div>
        <div className={styles.Navbutton}>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>


      <div className={styles.CenterText}>
        <h1>A modern publishing platform</h1>
        <br></br>
        <p>Grow your audience and build your online brand</p>
        <br></br>
        <br></br>

        <button>Start for Free</button>
        <button>Learn More</button>
      </div>

      <div className="">

      </div>
    </div>
  );
}

export default App;