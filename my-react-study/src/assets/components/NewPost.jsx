import { useState } from 'react';
import classes from './NewPost.module.css';

const NewPost = ({onCancel}) => {
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const authorHandler = (event) => {
    setAuthor(event.target.value);
  }

  const bodyHandler = (event) => {
    setBody(event.target.value);
  }

  const submitHandler = (event) => {
    
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={authorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>

    </form>
  )
}

export default NewPost