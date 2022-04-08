import { Routes , Route } from 'react-router-dom';

import Home from './routes/home/home.component.jsx';

import Nav from './routes/navigation/navigation.component';

import Authentication from './routes/authentication/authentication.component';

import Shop from './routes/shop/shop.components'


  const App = () => {

  return (
    <Routes>
    <Route path= '/' element ={<Nav />}>
    <Route index element={<Home/>} /> 
    <Route path='shop' element={<Shop/>} />
    <Route path='auth' element={<Authentication/>} />
      </Route>

    </Routes>
  );
  };

  export default App;
