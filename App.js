
import './App.css';
import Footer from './componets/footer';
import Navbar from './componets/navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Catalog from './pages/catalog';

function App() {
  return (
    <div className="App">
      <h1>Hello from react</h1>
      <Navbar/>
      <Catalog/>
      {/*creat a footer componet and import it here*/}
      <Footer/>

    </div>
  );
}

export default App;

//please create a product componet with t he h5 for the title 
//render the <quantityPicker /> componet inside
//on catalog render 5 products 