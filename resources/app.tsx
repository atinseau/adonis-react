import React from "react";
import ReactDOM from 'react-dom';

import Home from "./Components/Home";
import RouterContext from "../app/Context/RouterContext";

const app = document.getElementById('root')
if (app) {

  const ADONIS_DATA: AdonisData = (window as any).ADONIS_DATA;

  let value = {}
  if (ADONIS_DATA.router)
    value = ADONIS_DATA.router

  ReactDOM.hydrate(<RouterContext.Provider value={value}>
    <Home {...ADONIS_DATA.pageProps}/>
  </RouterContext.Provider>, app, () => {
    console.log('Hydrated')
  })
} else {
  console.warn('No app element found')
}
