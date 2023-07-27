import styles from "./Fifth.module.css"
// import { useEffect, useState } from 'react';


function App() {
  return (
    <div className ={styles.Fifth}>
      <div className={styles.Name}>
        <h1>Blogr</h1>
      </div>

      <div>
        <p>Product</p>
        {/* <br></br> */}
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </div>
      <div>
        <p>Company</p>
        {/* <br></br> */}
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>

      </div>

      <div className="">
        <p>Connect</p>
        {/* <br></br> */}
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>

      </div>
    </div>
  );
}

export default App;