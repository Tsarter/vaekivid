import Card from "./components/Card";
import kjall from "./assets/kjall.png"

function App() {
  return (
    <div>
      <h1>Või vali mõni spetsialistide poolt loodud väekivi</h1>
      <div className="card-table">
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall}/>
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall}/>
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall}/>
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall}/>
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall}/>
        <Card name="Kjallfrogenäider" price="21.99€" image={kjall}/>
      </div>
    </div>
  );
}

export default App;
