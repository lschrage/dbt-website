import styles from '../styles/Home.module.css'
import React from 'react';
import Button from '../components/Button.js';


  
  class Text extends React.Component {
    state = {
        msg: "",

    }
  
    handleCallback = (childData) =>{
        this.setState({msg: childData})
    }
  
    render() {
        const {msg} = this.state;
        return(
           <div>
             <h1 className={styles.text}> {msg} </h1>
             <Button parentCallback = {this.handleCallback}/>    
           </div>
        );
    }

  }
  
  
  export default Text;