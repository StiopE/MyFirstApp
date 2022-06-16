import "./App.css";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <h1>Premier League Football Teams</h1>
      <div className="container">
        {data.data.map((team) => (
          <div className="box" key={team.name}>
            <div className="imgBox">
              <img src={team.image} alt={team.name} />
            </div>
            <div className="content">
              <h2>
                <a href={team.url} rel="noreferrer" target="_blank">
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
