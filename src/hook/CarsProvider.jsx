import React, { createContext, useEffect, useState } from 'react';
import Axios from '../Component/Axios';

export const CarsContext = createContext()

const CarsProvider = ({children}) => {
    const [cars, setCars] = useState([]);

  useEffect(() => {
    const url = '/allcars';
    Axios.get(url)
      .then(res => {
        setCars(res);
        // console.log("dj", res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

const carsinfo ={
    cars
}
    return (
        <CarsContext.Provider value={carsinfo}>{children}</CarsContext.Provider>
    );
};

export default CarsProvider;