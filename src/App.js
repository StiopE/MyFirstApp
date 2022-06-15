import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";

function App() {
  console.log(data.data.map((team) => team));
  return (
    <div className="App">
      <h1>Premier League Football Teams</h1>
      <div className="container">
        {data.data.map((team) => (
          <div class="box">
            <div class="imgBox">
              <img src={team.image} />
            </div>
            <div class="content">
              <h2>
                <a href={team.url} target="_blank">
                  {team.name}
                </a>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
