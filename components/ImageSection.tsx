import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <div className="flex-shrink-0 w-full lg:w-[35%] min-w-[280px]">
      <img 
        src="girl.jpg" 
        alt="Jannie" 
        className="w-full rounded-2xl object-cover shadow-lg shadow-black/50 block"
      />
    </div>
  );
};

export default ImageSection;