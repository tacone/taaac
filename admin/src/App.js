// in src/App.js
import hasuraDataProvider from "ra-data-hasura";
import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import CompositeDataProvider from "./data-providers/compositeDataProvider";


const dataProvider = new CompositeDataProvider([
  {
    dataProvider: jsonServerProvider("https://jsonplaceholder.typicode.com"),
    resources: ["users"],
  },
  {
    dataProvider: hasuraDataProvider("http://localhost:7002", {
      "content-type": "application/json",
      authorization: "bearer <token>",
    }),
    resources: ["tasks"],
  },
]);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="tasks" list={ListGuesser} />
  </Admin>
);

export default App;
