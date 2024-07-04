import NewPost from "./NewPost"
import Post from "./Post"
import classes from "./PostsList.module.css"

export const PostList = () => {

  return (
    <>
    <h1>LIST</h1>
    <NewPost />
    <div className={classes.posts}>
    <Post  author='author' body='body' />
    <Post author='tester1' body='tested!!' />
    <Post author='tester2' body='tested!!' />
    <Post author='tester3' body='tested!!' />
    </div>
    </>
  )
}

export default PostList