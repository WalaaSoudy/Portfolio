import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';

let routers= createBrowserRouter([
  {path: '' ,element: <Layout/> ,children:[
    {index:true, element : <Home/>},
    {path: 'about', element : <About/>},
    {path: 'portfolio', element : <Portfolio/>},
    {path: 'contact', element : <Contact/>}
  ] }
])
function App() {  
  return (
    <>
    <RouterProvider router={routers}>
      
      </RouterProvider>
      {/* <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/> */}
    </>
  );
}

export default App;
