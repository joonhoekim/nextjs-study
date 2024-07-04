import { useState } from 'react';
import './App.css';
import MainHeader from './assets/components/MainHeader';
import PostList from './assets/components/PostList';

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const showModalHandler = () => {
    setModalIsVisible(true);
  }
  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App
