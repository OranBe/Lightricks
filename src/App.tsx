import Board from "./components/Board";

function App() {
  return (
    <div>
      <center>
        <h1>React Tic Tac Toe</h1>
        <Board />
      </center>
    </div>
  );
}

export default App;

// import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { NavBar } from "../NavBar";
// import { HomePage } from "../src/HomePage";

// import Board from "./components/Board";

// export function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Switch>
//           <Route path="/" exact>
//             <HomePage />
//           </Route>
//           <Route path="/Borad">
//             <Borad />
//           </Route>
//         </Switch>
//       </BrowserRouter>
//     </>
//   );
// }
