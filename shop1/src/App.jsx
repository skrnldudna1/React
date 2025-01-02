import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import {Routes,Route, Link,useNavigate, Outlet} from 'react-router-dom'
import './App.css';
import bg from './img/bg.jpg';
import shoes3 from './img/shoes3.jpg';
import data from './db/shoes';
import { useState } from 'react';
import Products from './components/Products';
import Detail from './components/Detail';

function App(){
  let [shoes] = useState(data);
  let navigate = useNavigate();
  console.log(shoes[0].price);

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/Cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={() => {navigate('/About')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to = "/">홈</Link>
      <Link to = "/detail">상세페이지</Link>

      <Routes>
        <Route path='/' element={<div>메인페이지</div>} />
        <Route path='detail' element={<div>상세페이지</div>} /> 
        <Route path = "detail" element={<Detail/>} />

        <Route path='/About' element = {<About/>} />
        <Route path='/About/member' element = {<Member/>} />
        <Route path='/About/location' element = {<Location/>} />
        {/* <Route path="*" element={<div>없는 페이지 입니다.</div>} /> */}
      </Routes>

      {/* 슬라이더 */}
      <div className="slider"></div>

      {/* 상품 목록 */}
      <div className="container">
      <div className='slider'></div>
      <div className='container'></div>
        <div className="row">
      
       {
        shoes.map((a,i) => {
          return (
            <Products shoes={shoes[i]} i={i} key={data[i].id} />
          )
        })
       }
          </div>
          </div>

      {/* 배경 이미지 */}
      <div
        className="bg"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
    </div>

  );
}

export default App;
