import Image from 'next/image';
import React from 'react';

interface CurvedPicProps {
  imagesrc: string;
  imagetitle: string;
  classname: string
}

const CurvedPic: React.FC<CurvedPicProps> = ({ imagesrc, imagetitle, classname }) => {
  return (
    <div className={`relative ${classname}`}>
      <div className={`border-2 border-[#F78716] rounded-t-full absolute top-1 left-1 w-full h-full`} />
        <Image 
          src={imagesrc} 
          alt={imagetitle} 
          width={200}
          height={200}
          className={`rounded-t-full w-full h-full`} 
        />
    </div>
  );
};

export default CurvedPic;
