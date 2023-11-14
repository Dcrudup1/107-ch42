import Product from "../componets/product";
import "./catalog.css";
import DataService from "../services/dataService";

import { useEffect , useState } from "react";

function Catalog(){
    const[products, setProducts]=useState([]);


    useEffect(function(){
        //that code that i have here will be executed,or updated everytime
        //that something changes
        console.log("components is loaded")
        loadCatalog();

    },[]);
    
    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProduct();
        setProducts(prods);
        console.log(prods);
    }


    return(
        <div className="catalog-container">
            <h1>Check out our {products.length} new products</h1>
            {/*do you remember arrow function? =>*/}
            {products.map( arrowProduct => <Product data={arrowProduct}/>)}

            
        </div>

        
    );
}

export default Catalog;