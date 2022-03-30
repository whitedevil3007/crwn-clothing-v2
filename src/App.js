import { Routes , Route } from 'react-router-dom';

import Nav from './routes/navigation/navigation.component.jsx';

import Home from './routes/home/home.component.jsx';

import SignIn from './routes/sign-in/signin.component'

const Shop = () => {
  return <h1>I am the shop page</h1>
  
}


  const App = () => {

  return (
    <Routes>
    <Route path= '/' element ={<Nav />}>
    <Route index element={<Home/>} /> 
    <Route path='shop' element={<Shop/>} />
    <Route path='sign-in' element={<SignIn/>} />
      </Route>

    </Routes>
  );
  };

  export default App;
