import classes from './NewPost.module.css';

const NewPost = ({onBodyChange, onAuthorChange, onCancel}) => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onAuthorChange}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='button'>Submit</button>
      </p>

    </form>
  )
}

export default NewPost