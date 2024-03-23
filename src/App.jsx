import { useState, useLayoutEffect } from "react";

// eslint-disable-next-line react/prop-types
const App = ({ data }) => {
  const [crmData, setcrmData] = useState();
  useLayoutEffect(() => {
    setcrmData(crmData);
    console.log("Data is", data);
  }, [data, crmData]);
  return (
    <section className="mx-8">
      <h1 className="text-2xl">Zoho Widget React Extension(WITH TAILWIND)</h1>
      <p>
        This is a boilerplate for creating a Zoho Widget React Extension.
      </p>
    </section>
  );
};

export default App;
