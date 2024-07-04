import { useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

export const PostList = () => {

  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');

  const authorHandler = (event) => {
    setAuthor(event.target.value);
  }

  const bodyHandler = (event) => {
    setBody(event.target.value);
  }

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
    {modalIsVisible && (<Modal onClose={hideModalHandler}>
      <NewPost onBodyChange={bodyHandler} onAuthorChange={authorHandler} />
    </Modal>) }
    <div className={classes.posts}>
    <Post author={author} body={body} />
    <Post author='tester1' body='tested!!' />
    <Post author='tester2' body='tested!!' />
    <Post author='tester3' body='tested!!' />
    </div>
    </>
  )
}

export default PostList