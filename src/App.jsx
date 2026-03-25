import RouterDemo from "./components/RouterDemo";
import DynamicSPA from "./components/DynamicSPA";
import Todo from "./components/Todo";
import Pagination from "./components/Pagination";
import FetchAPI from "./components/FetchAPI";
import SearchFilter from "./components/SearchFilter";
import Modal from "./components/Modal";
import Timer from "./components/Timer";
import DarkMode from "./components/DarkMode";
import Chat from "./components/Chat";
import CacheAPI from "./components/CacheAPI.jsx";

function App() {
  
  return (
    <div>
      <h1>React SPA All Features</h1>
      <RouterDemo />
      <DynamicSPA />
      <Todo />
      <Pagination />
      <FetchAPI />
      <SearchFilter />
      <Modal />
      <Timer />
      <DarkMode />
      <Chat />
      <CacheAPI />
    </div>
  );
}

export default App;