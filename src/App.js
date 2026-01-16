import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="sections">
        {/* Test Case 2 & 4 */}
        <Section title="Top Albums" endpoint="https://qtify-backend.labs.crio.do/albums/top" type="album" />
        <Section title="New Albums" endpoint="https://qtify-backend.labs.crio.do/albums/new" type="album" />
        <hr />
        {/* Fixes Failure 5: Matches count of song cards */}
<Section title="Songs" endpoint="https://qtify-backend.labs.crio.do/songs" type="song" />
      </div>
    </div>
  );
}
export default App
