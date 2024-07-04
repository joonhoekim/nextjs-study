import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

export const PostList = ({isPosting, onStopPosting}) => {

  return (
    <>
    {isPosting && (<Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} />
    </Modal>) }
    <div className={classes.posts}>
    <Post author='tester1' body='tested!!' />
    <Post author='tester2' body='tested!!' />
    <Post author='tester3' body='tested!!' />
    </div>
    </>
  )
}

export default PostList