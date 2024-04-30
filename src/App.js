import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";

import Hashnode from "./Components/Hashnode";
import Dev from "./Components/Dev";
import Hackernews from "./Components/Hackernews";
import Producthunt from "./Components/Producthunt";
import Github from "./Components/Github";
import Techcrunch from "./Components/Techcrunch";
import "./index.css";

const App = () => {
  return (
    <div className="  mx-auto ">
      <BrowserRouter>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/3">
            <Sidebar />
          </div>

          <div className=" bg-gray-50 w-full  overflow-y-scroll max-h-screen">
            <Route exact path="/" component={Hashnode} />
            <Route exact path="/dev" component={Dev} />
            <Route exact path="/hackernews" component={Hackernews} />
            <Route exact path="/producthunt" component={Producthunt} />
            <Route exact path="/github" component={Github} />
            <Route exact path="/techcrunch" component={Techcrunch} />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
