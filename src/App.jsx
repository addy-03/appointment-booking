import "./App.css";
import AppointmentScheduler from "./components/AppointmentScheduler";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="main">
          <AppointmentScheduler />
        </div>
      </div>
    </>
  );
}

export default App;
