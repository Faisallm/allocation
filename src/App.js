import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const App = () => {
  return (
    <div>
      {/* header component */}
      <Header />
      {/* content component */}
      <Content />
      {/* footer component */}
      <Footer />
    </div>
  );
};

export default App;
