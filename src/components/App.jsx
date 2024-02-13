// App.jsx

import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { lazy, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";
import Loader from "./Loader";

const Home = lazy(() => import("../pages/Home"));
const Sidebar = lazy(() => import("./Header"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));

export const App = () => {
  const [cars, setCars] = useState([]);

  const favoriteToggle = (_id) => {
    console.log("Toggled car with id:", _id);

    const updatedCars = cars.map((car) => ({
      ...car,
      favorite: car._id === _id ? !car.favorite : car.favorite,
    }));
    setCars(updatedCars);

    const favoriteCars = updatedCars.filter((car) => car.favorite === true);
    localStorage.setItem("favs", JSON.stringify(favoriteCars));
  };

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route
            path="/catalog"
            element={
              <Catalog
                cars={cars}
                setCars={setCars}
                favoriteToggle={favoriteToggle}
              />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites cars={cars} favoriteToggle={favoriteToggle} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
};
