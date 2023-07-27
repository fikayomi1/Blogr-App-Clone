import styles from "./Second.module.css"
// import { useEffect, useState } from 'react';


function App() {
  return (
    <div className={styles.Second}>
      <div className={styles.title}>
        <h1>Designed for the future</h1>

      </div>
      <div className = {styles.part}>
        <div className={styles.text2}></div>
        <div className={styles.text}>
        <h2>Introducing an extensible editor</h2>
        <br></br>
        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editr supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide wasy ways to add functionality or change the looks of a blog.</p>
        <br></br> <br></br> <br></br>
        <h2>Robust content management</h2>
        <br></br>
        <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. THis functionality, you're in full control.</p></div>
        
        </div>
    </div>
  );
}

export default App;