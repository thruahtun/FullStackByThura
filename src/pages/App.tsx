import { Button } from "@/components/ui/button";
import { Link } from "react-router";

function App() {
  return (
    <div className="">
      <Button>
        <Link to="/login">Login</Link>
      </Button>
      <Button>
        <Link to="/register">Register</Link>
      </Button>
    </div>
  );
}

export default App;
