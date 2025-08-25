import React from "react";
import { useRoutes } from "react-router-dom";

// import pages
import ShowCreators from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";

function App() {
  // define routes
  let routes = useRoutes([
    { path: "/", element: <ShowCreators /> },                // homepage - show all creators
    { path: "/creator/:id", element: <ViewCreator /> },      // view a single creator
    { path: "/add", element: <AddCreator /> },               // add a creator
    { path: "/edit/:id", element: <EditCreator /> },         // edit a creator
  ]);

  return (
    <div className="App min-h-screen bg-blue-100">
      <h1 className="text-4xl font-bold text-center pt-15 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
        Creatorverse
      </h1>
      {routes}
    </div>
  );
}

export default App;