import { Footer } from "./components/Footer";
import { GridSection } from "./components/GridSection";
import { TopSection } from "./components/TopSection";

function App() {
  return (
    <div>
      <div className="hero">
        <TopSection />
        <GridSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
