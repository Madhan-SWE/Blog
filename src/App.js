import './App.css';
import SideNavBar from "./components/SideNavBar";
import ContentBar from "./components/ContentBar";


function App() {
  return(
    <>
    <div className="row app_bar p-3">
        <SideNavBar />
        <ContentBar />

    </div>
    </>
  )
}

export default App;
