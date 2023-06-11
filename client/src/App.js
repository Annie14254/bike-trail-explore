import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Footer from "./components/Footer";
import {UserProvider} from "./ctx/UserContext";
import Comments from "./components/comments/Comments";


function App() {
  const [currPage, setCurrPage] = useState("home")

  useEffect(() => {
    const path = window.location.href.split(window.location.host)[1]
    console.log(path)
    setCurrPage(path)
  }, [window.location.href])

  return (
    <div className="App">
      <UserProvider>
        <Header />

        { currPage === `/` && <Home /> }
        { currPage === '/maps' && <Maps /> }
        { currPage === '/profile' && <Profile /> }
        { currPage === '/signup' && <SignUp /> }
        { currPage === '/login' && <LogIn /> }
        
        <div className="back">
        <Comments
          commentsUrl="http://localhost:3001/comments"
          currentUserId="1"
        />
      </div>
        
        <Footer />
      </UserProvider>

    </div>
  );
}

export default App;
