import { Button } from "@acme/shared-ui";
import "@acme/shared-ui/style.css";

function App() {
  return (
    <div>
      <h1>ACME Customer App</h1>
      <p>Button imported from our shared design system</p>

      <Button onClick={() => alert("Customer App clicked!")}>
        Customer Button
      </Button>

      <Button variant="secondary">
        Secondary Button
      </Button>
    </div>
  );
}

export default App;