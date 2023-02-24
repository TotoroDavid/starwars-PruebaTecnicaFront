import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StarWarsPeople } from './components/StarWarsPeople';
import {
  Inicio,
  Naves,
  Peliculas,
  Personajes,
  Razas,
  Planetas,
  RazaById,
  NaveById,
  PeliculasById,
  PersonajesById,
  PlanetasById
} from './pages'


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            {/* <Route path="/" element={<StarWarsPeople />} /> */}
            <Route path="/" element={<Inicio />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/naves" element={<Naves />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/planetas" element={<Planetas />} />
            <Route path="/razas" element={<Razas />} />
            <Route path="/razas/:id" element={<RazaById />} />
            <Route path="/naves/:id" element={<NaveById />} />
            <Route path="/peliculas/:id" element={<PeliculasById />} />
            <Route path="/personajes/:id" element={<PersonajesById />} />
            <Route path="/planetas/:id" element={<PlanetasById />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
