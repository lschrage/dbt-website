import styles from './Button.module.css'
import Text from '../components/Text.js';
import React from "react";



class Button extends React.Component {
    onTrigger = () => {
        const strategies = ["go on a walk outside","go buy flowers","journal about your day","challenge your distorted thinkling", "relax your muscles, one body part at a time","listen to your favorite music", "watch your favorite movie", "read your favorite book", "listen to your favorite podcast", 
                            "go on a run", "call a person you love", "clean your room", "solve a puzzle", "count up to 100 by 7s", "squeeze a stressball", "play video games", "eat your favorite food", "make a soothing cup of tea", "pet an animal", "take a warm bath", "go outside and listen to the sounds of the city", 
                            "bake chocolate chip cookies"];
        let index = Math.floor(Math.random() * strategies.length)
        this.props.parentCallback(strategies[index]);
        
    };
  
    render() {
      return (
        <div>
          <button className={styles.submit} onClick={this.onTrigger}>Press me!</button>
        </div>
      );
    }
}


export default Button;
