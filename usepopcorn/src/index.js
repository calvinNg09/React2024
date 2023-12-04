import React from "react";
import ReactDOM from "react-dom/client";
// import CurrencyConverter from "./CurrencyConverter";
import "./index.css";
import GeolocationApp from "./GeolocationApp";
// import App from "./App";
// import StarRating from "./StarRating";
// import TextExpanderApp from "./TextExpanderApp";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <CurrencyConverter /> */}
    {/* <App /> */}
    {/* <Test /> */}
    {/* <TextExpanderApp /> */}
    <GeolocationApp />
  </React.StrictMode>
);
