import { StrictMode } from "react";
import { render } from "react-dom";
import { HomePage } from "../../pages/home-page/HomePage";

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
