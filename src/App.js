import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div>Hello wrold!</div>
  );
}

export default App;
