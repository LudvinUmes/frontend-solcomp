import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reporte1 = () => {
  const [totalUnidades, setTotalUnidades] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/totalunidades');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const datos = await response.json();

        if (datos && datos.totalUnidadesVendidas !== undefined) {
          setTotalUnidades(datos.totalUnidadesVendidas);
        } else {
          setTotalUnidades(null);
        }

        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data'); // Maneja el error
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  if (loading) {
    return <div>Cargando...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div className='card'>
      <h3>Total de Unidades Vendidas</h3>
      <h1>{totalUnidades !== null ? `${totalUnidades}` : 'No disponible'}</h1>
    </div>
  );
};

export default Reporte1;
