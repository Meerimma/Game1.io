import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import './pages/style/style.scss'
import Game from "./pages/Game/Game";
import Popup from "./pages/Popup/Popup";


function App() {
  return (
      <div className="App">
          <Routes>
                  <Route  path={'/'} element={<Layout/>}>
                  <Route path={'login'} element={<Login/>}/>
                  <Route path={''} element={<Home/>}/>
                  <Route path={'game'} element={<Game/>}/>
              </Route>

          </Routes>
      </div>

  );
}

export default App;
