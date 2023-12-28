import Home from "./Pages/Home"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import PageNotFound from "./ui/PageNotFound"
import Destination from "./Pages/Destination"
import Moon from "./ui/Moon"
import Mars from "./ui/Mars"
import Europa from "./ui/Europa"
import Titan from "./ui/Titan"
import Crew from "./Pages/Crew"
import Technology from "./Pages/Technology"

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="destination" element={<Destination/>}>
      <Route index  element={<Moon/>}/>
      <Route path="mars" element={<Mars/>}/>
      <Route path="europa" element={<Europa/>}/>
      <Route path="titan" element={<Titan/>}/>
    </Route>
    <Route path="crew" element={<Crew/>}/>
    <Route path="technology" element={<Technology/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
}

export default App