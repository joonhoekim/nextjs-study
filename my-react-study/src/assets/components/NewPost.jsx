import { useState } from "react";
import classes from './NewPost.module.css';

const NewPost = () => {

  const [currentValue, setCurrentValue] = useState('');

  const changeBodyHandler = (event) => {
    setCurrentValue(event.target.value);
  }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>{currentValue}</p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  )
}

export default NewPost