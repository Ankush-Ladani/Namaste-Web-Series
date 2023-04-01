const React = require("react");
const ReactDOM = require("react-dom");

const Header = () => {};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
