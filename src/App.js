import Posts from './components/posts'
import CloudAppBar from './components/cloudappbar'
import PostBox from './components/postbox'
import './App.css'

function App() {
  return (
    <>
    <CloudAppBar/>
    <div className="board">
      <PostBox/>
    </div>
    <div className="board" id="posts">
      <Posts/>
    </div>
    </>
  );
}

export default App;
