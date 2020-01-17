import React from 'react'

const CheckMark = ({ fill = "#00CDBE"}) => {
    return (
      <svg
        viewBox="0 0 1792 1792"
        width="16px"
        height="16px"
        xmlns="http://www.w3.org/2000/svg"
        fill={fill}
      >
        <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
      </svg>
    );
}

export default CheckMark;
