/* eslint-disable jsx-a11y/iframe-has-title */
import "./App.css";

function App() {
  return (
    <div>
      <p>iframe</p>
      <iframe
        style={{ border: "4px solid green" }}
        src="https://tkpd.vercel.app"
        height="300px"
        width="300px"
      />
      <br/>
      <br/>
      <br/>
      <a href="https://tkpd.vercel.app">Link to tkpd.vercel.app</a>
    </div>
  );
}

export default App;
