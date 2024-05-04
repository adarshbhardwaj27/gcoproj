import { useState, useLayoutEffect } from "react";
import Pricingtable from "./components/Pricingtable";
import Invoice from "./components/Invoice";

// eslint-disable-next-line react/prop-types
const App = ({ data }) => {
  const [crmData, setcrmData] = useState();
  useLayoutEffect(() => {
    setcrmData(crmData);
    console.log("Data is", data);
  }, [data, crmData]);
  return (
    <section className="flex h-screen  justify-center items-center">
      <Pricingtable />
      {/* <Invoice /> */}
    </section>
  );
};

export default App;
