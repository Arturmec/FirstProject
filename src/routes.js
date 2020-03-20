import React from 'react';
/** BrowserRouter permite com que se navegue pelas páginas usando barra, ex: github.com/Arturmec */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/** Cada componente será uma rota */
import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
