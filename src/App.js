import Navbar from "./components/Navbar";
import Destinations from "./components/Destinations";
import data from "./data/data";

function App() {
  const destinations = data.map((item) => {
    return (
      <Destinations
        key={item.id}
        title={item.title}
        location={item.location}
        maps={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        desc={item.description}
        img={item.imageUrl}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <main>{destinations}</main>
    </div>
  );
}

export default App;
