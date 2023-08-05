import "./App.css";
import { Seat } from "./Seat";

function App() {
  return (
    <div className="App">
      <Seat isBooked="booked" number="1" />

      <Seat isBooked="vacant" number="2" />

      <Seat isBooked="booked" number="3" />
      <Seat number="4" isBooked="vacant" />
    </div>
  );
}

export default App;
