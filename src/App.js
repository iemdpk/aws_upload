import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home2 } from './Components/Home/Home2';
import { Teach2 } from './Components/Teach Online/Teach2';
import { Library2 } from './Components/Library/Library2';
import { Ask2 } from './Components/Asked questions/Ask2';
import { Create2 } from './Components/Create Lessons/Create2';
import { Create21 } from './Components/Create Lessons/Create21';
import { Create1 } from './Components/Create Content/Create1';
import { Create101 } from './Components/Create Content/Create101';
import { Create111 } from './Components/Create Content/Create111';
import { Create121 } from './Components/Create Content/Create121';
import { Create131 } from './Components/Create Content/Create131';
import { Discuss2 } from './Components/Discussion/Discuss2';
import { Profile2 } from './Components/Profile/Profile2';
import { Room2 } from './Components/Staff Room/Room2';
import { Library22 } from './Components/Library/Library22';
import { Library21 } from './Components/Library/Library21';
import { Library23 } from './Components/Library/Library23';

import Navbar from "./Navbar";
import Topbar from "./Topbar";

function App() {
  return (
        <BrowserRouter>
        <FullPage>
          <Navbar/> 
        <CompletePage>
               <Topbar/>
        <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route index element={<Home2/>} />
            <Route exact path="/library" element={<Library2/>} />
            <Route exact path="/askedquestions" element={<Ask2/>} />
            <Route exact path="/createcontent" element={<Create1/>} />
            <Route exact path="/createlesson" element={<Create2/>} />
            <Route exact path="/discussion" element={<Discuss2/>} />
            <Route exact path="/profile" element={<Profile2/>} />
            <Route exact path="/staffroom" element={<Room2/>} />
            <Route exact path="/teachonline" element={<Teach2/>} />
            <Route exact path="/questionPaper" element={<Library22/>} />
            <Route exact path="/articles" element={<Library21/>} />
            <Route exact path="/videos" element={<Library2/>} />
            <Route exact path="/others" element={<Library23/>} />
            <Route exact path="/createNewLesson" element={<Create21/>} />
            <Route exact path="/newvideo" element={<Create101/>} />
            <Route exact path="/newquestion" element={<Create111/>} />
            <Route exact path="/newslideshow" element={<Create131/>} />
            <Route exact path="/newarticle" element={<Create121/>} />
        </Routes>
        </CompletePage>
        </FullPage>
        </BrowserRouter>
  );
}
const FullPage=styled.div`
display: flex;
flex-direction:row;
`
const CompletePage=styled.div`
display: flex;
flex-direction:column;
width:100%;
`
export default App;
