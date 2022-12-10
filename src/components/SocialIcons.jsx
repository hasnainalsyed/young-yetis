import React from "react";

const SocialIcons = () => {
  return (
    <ul className="navbar-nav me-0 ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <g fill="currentColor">
              <path d="M26.0015 6.9529C24.0021 6.03845 21.8787 5.37198 19.6623 5C19.3833 5.48048 19.0733 6.13144 18.8563 6.64292C16.4989 6.30193 14.1585 6.30193 11.8336 6.64292C11.6166 6.13144 11.2911 5.48048 11.0276 5C8.79575 5.37198 6.67235 6.03845 4.6869 6.9529C0.672601 12.8736 -0.41235 18.6548 0.130124 24.3585C2.79599 26.2959 5.36889 27.4739 7.89682 28.2489C8.51679 27.4119 9.07477 26.5129 9.55525 25.5675C8.64079 25.2265 7.77283 24.808 6.93587 24.312C7.15286 24.1571 7.36986 23.9866 7.57135 23.8161C12.6241 26.1255 18.0969 26.1255 23.0876 23.8161C23.3046 23.9866 23.5061 24.1571 23.7231 24.312C22.8861 24.808 22.0182 25.2265 21.1037 25.5675C21.5842 26.5129 22.1422 27.4119 22.7621 28.2489C25.2885 27.4739 27.8769 26.2959 30.5288 24.3585C31.1952 17.7559 29.4733 12.0212 26.0015 6.9529ZM10.2527 20.8402C8.73376 20.8402 7.49382 19.4608 7.49382 17.7714C7.49382 16.082 8.70276 14.7025 10.2527 14.7025C11.7871 14.7025 13.0425 16.082 13.0115 17.7714C13.0115 19.4608 11.7871 20.8402 10.2527 20.8402ZM20.4373 20.8402C18.9183 20.8402 17.6768 19.4608 17.6768 17.7714C17.6768 16.082 18.8873 14.7025 20.4373 14.7025C21.9717 14.7025 23.2271 16.082 23.1961 17.7714C23.1961 19.4608 21.9872 20.8402 20.4373 20.8402Z"></path>
            </g>
          </svg>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://opensea.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="none"
            viewBox="0 0 100 100"
          >
            <path
              fill="currentColor"
              d="M50 0C22.39 0 0 22.39 0 50C0 77.61 22.39 100 50 100C77.61 100 100 77.61 100 50C100 22.39 77.62 0 50 0ZM24.67 51.68L24.88 51.34L37.89 30.99C38.08 30.7 38.53 30.73 38.67 31.05C40.84 35.92 42.72 41.98 41.84 45.75C41.47 47.3 40.44 49.4 39.28 51.34C39.13 51.62 38.97 51.9 38.79 52.17C38.71 52.29 38.57 52.36 38.42 52.36H25.05C24.69 52.36 24.48 51.97 24.67 51.68ZM82.64 58.68C82.64 58.87 82.53 59.03 82.37 59.1C81.36 59.53 77.91 61.12 76.48 63.11C72.82 68.2 70.03 75.48 63.78 75.48H37.72C28.48 75.48 21 67.97 21 58.7V58.4C21 58.16 21.2 57.96 21.45 57.96H35.97C36.26 57.96 36.47 58.22 36.45 58.51C36.34 59.45 36.52 60.42 36.97 61.3C37.83 63.05 39.62 64.14 41.55 64.14H48.74V58.53H41.63C41.27 58.53 41.05 58.11 41.26 57.81C41.34 57.69 41.42 57.57 41.52 57.43C42.19 56.47 43.15 54.99 44.11 53.3C44.76 52.16 45.39 50.94 45.9 49.72C46 49.5 46.08 49.27 46.17 49.05C46.31 48.66 46.45 48.29 46.55 47.93C46.65 47.62 46.74 47.3 46.82 47C47.06 45.96 47.16 44.86 47.16 43.72C47.16 43.27 47.14 42.8 47.1 42.36C47.08 41.87 47.02 41.38 46.96 40.89C46.92 40.46 46.84 40.03 46.76 39.59C46.65 38.94 46.51 38.29 46.35 37.64L46.29 37.39C46.17 36.94 46.06 36.52 45.92 36.07C45.51 34.67 45.05 33.3 44.55 32.02C44.37 31.51 44.17 31.02 43.96 30.54C43.66 29.8 43.35 29.13 43.07 28.5C42.92 28.21 42.8 27.95 42.68 27.68C42.54 27.38 42.4 27.08 42.25 26.79C42.15 26.57 42.03 26.36 41.95 26.16L41.07 24.54C40.95 24.32 41.15 24.05 41.39 24.12L46.89 25.61H46.91C46.92 25.61 46.92 25.61 46.93 25.61L47.65 25.82L48.45 26.04L48.74 26.12V22.86C48.74 21.28 50 20 51.57 20C52.35 20 53.06 20.32 53.56 20.84C54.07 21.36 54.39 22.07 54.39 22.86V27.71L54.98 27.87C55.02 27.89 55.07 27.91 55.11 27.94C55.25 28.04 55.46 28.2 55.72 28.4C55.93 28.56 56.15 28.76 56.41 28.97C56.94 29.4 57.58 29.95 58.27 30.58C58.45 30.74 58.63 30.9 58.8 31.07C59.69 31.9 60.69 32.87 61.65 33.95C61.92 34.26 62.18 34.56 62.45 34.89C62.71 35.22 63 35.54 63.24 35.86C63.57 36.29 63.91 36.74 64.22 37.21C64.36 37.43 64.53 37.66 64.66 37.88C65.06 38.47 65.4 39.08 65.73 39.69C65.87 39.97 66.01 40.28 66.13 40.58C66.5 41.4 66.79 42.23 66.97 43.07C67.03 43.25 67.07 43.44 67.09 43.62V43.66C67.15 43.9 67.17 44.16 67.19 44.43C67.27 45.28 67.23 46.14 67.05 47C66.97 47.36 66.87 47.7 66.75 48.07C66.62 48.42 66.5 48.78 66.34 49.13C66.03 49.84 65.67 50.56 65.24 51.22C65.1 51.47 64.93 51.73 64.77 51.98C64.59 52.24 64.4 52.49 64.24 52.73C64.01 53.04 63.77 53.36 63.52 53.65C63.3 53.95 63.08 54.25 62.83 54.52C62.49 54.93 62.16 55.31 61.81 55.68C61.61 55.92 61.39 56.17 61.16 56.39C60.94 56.64 60.71 56.86 60.51 57.06C60.16 57.41 59.88 57.67 59.64 57.9L59.07 58.41C58.99 58.49 58.88 58.53 58.77 58.53H54.39V64.14H59.9C61.13 64.14 62.3 63.71 63.25 62.9C63.57 62.62 64.98 61.4 66.65 59.56C66.71 59.49 66.78 59.45 66.86 59.43L82.07 55.03C82.36 54.95 82.64 55.16 82.64 55.46V58.68V58.68Z"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
