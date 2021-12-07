//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import { ModulesLayout } from './layouts/ModulesLayout';
import { PrincipalLayout } from './layouts/PrincipalLayout';

import { GestionAvances } from './pages/GestionAvances';
import { GestionInscripciones } from './pages/GestionInscripciones';
import { GestionProyectos } from './pages/GestionProyectos';
import { GestionUsuarios } from './pages/GestionUsuarios';
import {Principal} from './pages/Principal';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client = { client }>
      <Router>
          <ModulesLayout>
            <Routes>
              <Route exact path="/GestionAvances" element={<GestionAvances/>}/>
              <Route exact path="/GestionInscripciones" element={<GestionInscripciones/>}/>
              <Route exact path="/GestionProyectos" element={<GestionProyectos/>}/>
              <Route exact path="/GestionUsuarios" element={<GestionUsuarios/>}/>              
            </Routes>
          </ModulesLayout>          
   {/* traer layouts nuevos */}

          <PrincipalLayout>
            <Routes>
              <Route exact path="/Principal" element={<Principal/>}/>              
            </Routes>
          </PrincipalLayout>
      </Router>
    </ApolloProvider>


  );
}

export default App;