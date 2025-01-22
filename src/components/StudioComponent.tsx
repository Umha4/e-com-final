import React from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config'; // Adjust the path to your sanity.config file

const StudioComponent = () => {
  return (
    <div>
      <Studio config={config} />
    </div>
  );
};

export default StudioComponent;