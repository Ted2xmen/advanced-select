import "./App.css";
import { SelectPreview } from "./components/SelectPreview";

function App() {
  return (
    <main className="flex flex-col justify-start gap-4 items-center h-screen">
      <h1>Vite + React</h1>

      <SelectPreview />
    </main>
  );
}

export default App;
