import React from 'react';
import Upper from '../public/upper.svg'
import Lower from '../public/lower.svg'


const CurvyShape: React.FC = () => {
  return (
    <div className="flex bg-transparent">
      <div className="flex flex-col scale-50">
       
        <Upper className="w-auto h-auto"/>
        <Lower className="w-auto h-auto -mt-20 pl-1"/>
      </div>
    </div>
  );
};

export default CurvyShape;
