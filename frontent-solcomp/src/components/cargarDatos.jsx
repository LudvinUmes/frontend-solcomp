import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!file) {
      alert('Por favor selecciona un archivo.');
      return;
    }

    const formData = new FormData();
    formData.append('archivoExcel', file);

    setUploading(true);
    setUploadError(null);

    try {
      const response = await fetch('http://localhost:3000/upload-excel', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Error al cargar el archivo.');
      }

      // Procesar la respuesta si es necesario
      console.log('Archivo cargado exitosamente');
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
      setUploadError('Ocurrió un error al cargar el archivo.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Cargar Archivo Excel</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <button type="submit" disabled={uploading}>Cargar</button>
        </div>
      </form>
      {uploadError && <p>{uploadError}</p>}
      {uploading && <p>Cargando...</p>}
    </div>
  );
};

export default UploadForm;
