import './Link.css';

const Link = ({ url }) => {
  return (
    <div className="link-content">
      <a
        className="link-text"
        type="button"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        Read More
      </a>
      <svg
        className="arrow-next"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M10.6659 9.00002L4.72175 2.93151C4.45672 2.66108 4.45943 2.22838 4.72716 1.95795L5.78996 0.895151C6.06309 0.624718 6.50119 0.624718 6.77163 0.897856L14.3356 8.51053C14.4708 8.64575 14.5385 8.82153 14.5385 9.00002C14.5385 9.1785 14.4708 9.35428 14.3356 9.4895L6.77163 17.1022C6.50119 17.3753 6.06309 17.3753 5.78996 17.1049L4.72716 16.0421C4.45943 15.7717 4.45672 15.339 4.72175 15.0685L10.6659 9.00002Z"
            fill="#c72727"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="18"
              height="18"
              fill="white"
              transform="translate(0 18) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Link;
