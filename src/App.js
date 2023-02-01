import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddQuiz from "./Component/Quiz/AddQuiz";
import EditQuiz from "./Component/Quiz/EditQuiz";
import ViewQuiz from "./Component/Quiz/ViewQuiz";
function App() {
  let sectorData = [];
  sectorData.push({ name: "mamun", sector: "aaaa" ,id:"22"});
 
  
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AddQuiz sectorData={sectorData}   />
        }
      />
      <Route
        path="/editQuiz/:id"
        element={<EditQuiz sectorData={sectorData} />}
      />
      <Route path="/viewQuiz" element={<ViewQuiz sectorData={sectorData} />} />
    </Routes>
  );
}

export default App;
