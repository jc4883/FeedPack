import React from "react";

import Leads from "./leads/Leads";
import Alerts from "./layout/Alerts";

const App = () => {
  return (
    <div className="App">
      <Leads />
      <Alerts />
    </div>
  );
};

export default App;
