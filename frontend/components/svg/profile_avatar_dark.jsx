import React from 'react'

const ProfileAvatarDark = ({size=24, color="#4A4A4A"}) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
    >
      <defs>
        <rect id="a" width="24" height="24" rx="12" />
        <path
          d="M19.895 18.394c-.754-.36-3.052-1.335-3.473-1.565-1.219-.664-1.789-1.56-1.789-2.953 0-.176.014-.351.04-.526.075-.511.247-.992.522-1.554.14-.285.665-1.258.679-1.285.626-1.197.91-2.11.91-3.285 0-2.425-.835-3.816-2.249-4.581a5.178 5.178 0 0 0-1.567-.534 4.34 4.34 0 0 0-.729-.075 4.372 4.372 0 0 0-.77.075 5.178 5.178 0 0 0-1.568.534C8.487 3.41 7.653 4.8 7.653 7.226c0 1.175.283 2.088.91 3.285.013.027.539 1 .678 1.285.275.562.447 1.043.522 1.554.026.175.04.35.04.526 0 1.389-.562 2.282-1.773 2.945-.422.23-2.73 1.211-3.49 1.573-1.535.732-2.339 1.93-2.503 3.775a.208.208 0 0 0 .189.225l19.966.001a.208.208 0 0 0 .208-.208c-.165-1.862-.969-3.06-2.505-3.793z"
          id="b"
        />
        <rect id="c" width="24" height="24" rx="12" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect stroke="#E6E5E5" x=".5" y=".5" width="23" height="23" rx="11.5" />
        <use
          fill={color}
          fillRule="nonzero"
          xlinkHref="#b"
          transform="translate(0 1.745)"
        />
        <rect stroke={color} x=".5" y=".5" width="23" height="23" rx="11.5" />
      </g>
    </svg>
  );
}

export default ProfileAvatarDark

