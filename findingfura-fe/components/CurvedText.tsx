import React from 'react';

interface CurvedTextProps {
  startOffset?: string; // startOffset as a percentage or pixel value
  text?: string;
  fontSize?: number;
  color?: string;
}

const CurvedText: React.FC<CurvedTextProps> = ({
  startOffset,
  text,
  fontSize,
  color 
}) => {
  return (
    <svg width="300" height="150" viewBox="0 0 300 150">
      {/* Define a circular path */}
      <path
        id="circlePath"
        d="M 75, 75 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        fill="none"
      />
      {/* Text that follows the circular path */}
      <text fontSize={fontSize} fill={color}>
        <textPath href="#circlePath" startOffset={startOffset}>
          {text}
        </textPath>
      </text>
    </svg>
  );
};

export default CurvedText;
