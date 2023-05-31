import { Route, Routes } from "react-router-dom";

import NavSideBar from "./NavSideBar";
import { Dashboard, Transactions, Home } from "./pages";

const App = () => {
  return (
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
      <NavSideBar />
      <main style={{ color: "white", marginLeft: "5rem" }}>
        <h1>React-Pro-Sidebar</h1>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
