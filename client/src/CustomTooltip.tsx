import React from 'react';

export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const time = payload[0]?.payload?.time;
    let labelTime;
    if (time > 12) {
      labelTime = time - 12 + 'pm';
    } else {
      labelTime = time + 'am';
    }

    return (
      <div className='custom-tooltip'>
        <p>{label}</p>
        <p>time: {labelTime}</p>
      </div>
    );
  }

  return null;
}
