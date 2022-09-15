import './App.css'
import Header from "./pages/Header";
import MainVisual from './pages/MainVisual'
import MainContent from './pages/MainContent'
import Portfolio from './pages/Portfolio';



function App() {

  return (
    <>
      <div className="Wrap">

        <Header />
        <MainVisual />
        <MainContent />
        <Portfolio />
      </div>
    </>
  )

}
export default App;