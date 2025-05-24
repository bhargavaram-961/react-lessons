
import Product from "./Components/Product";
import Variant from "./Components/Variant";
import Calc from "./Components/Calc";
export default function App1() {
  let a = 10;
  let b = 20;
  return (
    <>
      <h1>This is App1 Component</h1>
      <h2>Components and Props</h2>
      <Product name="Laptop" price={45000} />
      <Variant />
      <Calc v1={a} v2={b} />
    </>
  );
}
