import NewPost from "./NewPost"
import Post from "./Post"

export const PostList = () => {

  return (
    <>
    <NewPost />
    <h1>LIST</h1>
    <Post author='author' body='body' />
    <Post author='tester1' body='tested!!' />
    <Post author='tester2' body='tested!!' />
    <Post author='tester3' body='tested!!' />
    </>
  )
}

export default PostList