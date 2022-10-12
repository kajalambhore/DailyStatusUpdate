import "./App.css";
import NavbarData from "./components/navbar/NavbarData";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="App">
      <NavbarData />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
