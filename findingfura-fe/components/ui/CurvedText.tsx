'use client'
import React from 'react';
import styled from 'styled-components';

interface CurvedTextProps {
  text: string;
  objectSize?: number;
  spacing?: number;
  offset?: number;
  overlap?: boolean;
}

const CurvedText: React.FC<CurvedTextProps> = ({ text, objectSize = 45, spacing = 12, offset = 12, overlap = false }) => {
  const d = objectSize + spacing;
  const r = objectSize / 2 + spacing / 2;

  const CurvedTextWrapper = styled.div`
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: ${d + offset * 2}px;
    height: ${r + offset}px;

    path {
      fill: transparent;
    }

    text {
      fill: currentColor;
      text-anchor: middle;
    }
  `;

  return (
    <CurvedTextWrapper className="curved-text relative">
      <svg viewBox={`0 0 ${d + offset * 2} ${r + offset * 2}`}>
        <path
          id="curve"
          d={`M${offset},${r + offset} A${r},${r} 0 0,1 ${d + offset},${r + offset}`}
        />
        <text width="500">
          <textPath xlinkHref="#curve" startOffset="50%">
            {text}
          </textPath>
        </text>
      </svg>
    </CurvedTextWrapper>
  );
};

export default CurvedText;
