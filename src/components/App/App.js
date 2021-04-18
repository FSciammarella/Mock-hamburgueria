import { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import './App.css';
import AppBody from '../AppBody/AppBody';
function App() {
  const [product, setProduct] = useState(null);

  useEffect(
    () =>
      axios
        .get(
          'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products'
        )
        .then((res) => {
          let data = res.data[0];
          // delete data.vl_discount;
          setProduct(data);
        }),
    []
  );
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <>
      <NavBar />
      <div className="App mx-auto">
        <AppBody product={product} />
      </div>
    </>
  );
}

export default App;
