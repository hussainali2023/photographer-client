import logo from "./logo.svg";
import "./App.css";
import Main from "./layout/Main";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
