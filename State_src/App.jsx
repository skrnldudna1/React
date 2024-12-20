import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';

function ChildComp() {
  return <div>child component</div>;
}
function App() {

  return (
    <div className='App'>
      <Header/>
      <Body><ChildComp/>
      </Body>
      <Footer/>
    </div>
  );
}
export default App;

