import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Update = () => {
  const [updateMessage, setUpdateMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
axios.defaults.withCredentials = true

  useEffect(() => {
    const updateOrganizations = async () => {
      try {
        const response = await axios.get('https://gsoc-backend.vercel.app/update-organizations');
        console.log('Update successful:', response.data);
        setUpdateMessage('Organizations updated successfully!');
      } catch (error) {
        console.error('Update error:', error);
        setErrorMessage('Error updating organizations. Please try again later.');
      }
    };

    updateOrganizations();

    return () => {
    };
  }, []); 

  return (
    <div>
      <h2>Updating Organizations</h2>
      {updateMessage && <p className="text-green-600">{updateMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Update;
