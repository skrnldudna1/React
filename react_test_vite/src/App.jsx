import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';


function App() {
  const name = "jeongmin";

  return (
    <div className='App'>
      <Header/>
      <Body name={name} location={"Hogwarts"}/>
      <Footer/>
    </div>
  );
}
export default App;

