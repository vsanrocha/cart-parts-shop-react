import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "@/components/Header";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
