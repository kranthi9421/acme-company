import { Button } from "./index";
function App() {
  return (
    <div>
      <h1>ACME Shared UI</h1>

      <Button onClick={() => alert("Primary clicked!")}>
        Primary Button
      </Button>

      <Button variant="secondary">
        Secondary Button
      </Button>
    </div>
  );
}

export default App;