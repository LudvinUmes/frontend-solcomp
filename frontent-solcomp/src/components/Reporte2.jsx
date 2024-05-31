import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Reporte2 = () => {
  const [totalVentas, setTotalVentas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/totalventas');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const datos = await response.json();

        if (datos && datos.total_ventas !== undefined) {
          setTotalVentas(datos.total_ventas);
        } else {
          setTotalVentas(null);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
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
      <h3>Total de Ventas</h3>
      <h1>{totalVentas !== null ? "Q "+ `${totalVentas}` +".00" : 'No disponible'}</h1>
    </div>
  );
};

export default Reporte2;
