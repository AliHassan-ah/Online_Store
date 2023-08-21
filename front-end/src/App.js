import { Routes, Route } from "react-router-dom";
import routes from "./routes"

function App() {
  return (
    <div className="App">
      <Routes>
        {
          routes.map((item,index)=>(
        <Route path={item.path} element={item.element} key={index}/>

          ))
        }
      </Routes>
    </div>
  );
}

export default App;
