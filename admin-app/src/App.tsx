import { Button } from "@acme/shared-ui";
import "@acme/shared-ui/style.css";

function App() {
  return (
    <div>
      <h1>ACME Admin App</h1>
      <p>Button imported from our shared design system</p>

      <Button onClick={() => alert("Admin App clicked!")}>
        Admin Button
      </Button>

      <Button variant="secondary">
        Secondary Button
      </Button>
    </div>
  );
}

export default App;