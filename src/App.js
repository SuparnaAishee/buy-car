import { useEffect, useState } from "react";
import "./App.css";
import Items from "./Component/Items/Items";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <Items data={data}> </Items>
    </div>
  );
}
export default App;
