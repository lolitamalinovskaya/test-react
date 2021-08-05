import Header from "./Header";
import ContentList from "./ContentList";
import { useFetchContent } from "../hooks/useFetchContent";
import "./App.css";
import Button from "./Button";


const App = () => {

  const [fetchData,fetchNextData, imgList] = useFetchContent();
  return (

    <div className="App">
      <Header onSearch={fetchData}  />
      <h1>Simple content list</h1>
      <ContentList content={imgList} onMore={fetchNextData} />
      {/* TODO: Put FetchMoreButton component here */}
    </div>
  );
};

export default App;
