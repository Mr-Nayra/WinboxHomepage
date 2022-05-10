const Icon = (props) => {
  return (
    <svg
      className={props.className}
      width="auto"
      height="auto"
      viewBox="0 0 158 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      display="inline"
    >
      <rect width="57" height="56" rx="5" fill={props.color ||"#0415AA"} />
      <path
        d="M21.484 16.512H26.056L28.936 24.972L31.816 16.512H36.424L32.068 28.14L35.308 36.312L42.544 16.44H47.944L37.54 42H33.364L28.936 31.272L24.508 42H20.332L10 16.44H15.328L22.6 36.312L25.768 28.14L21.484 16.512Z"
        fill={props.color ? "#0415aa" : "#fff"}
      />
      <path
        d="M63.7913 42V23.136H68.6153V42H63.7913ZM63.7913 20.508V15.72H68.6153V20.508H63.7913ZM90.4991 42H85.6751V31.416C85.6751 29.904 85.4111 28.8 84.8831 28.104C84.3551 27.408 83.6231 27.06 82.6871 27.06C82.2071 27.06 81.7151 27.156 81.2111 27.348C80.7071 27.54 80.2271 27.816 79.7711 28.176C79.3391 28.512 78.9431 28.92 78.5831 29.4C78.2231 29.88 77.9591 30.408 77.7911 30.984V42H72.9671V23.136H77.3231V26.628C78.0191 25.428 79.0271 24.492 80.3471 23.82C81.6671 23.148 83.1551 22.812 84.8111 22.812C85.9871 22.812 86.9471 23.028 87.6911 23.46C88.4351 23.892 89.0111 24.456 89.4191 25.152C89.8271 25.848 90.1031 26.64 90.2471 27.528C90.4151 28.416 90.4991 29.316 90.4991 30.228V42ZM115.754 35.412C115.754 36.492 115.538 37.44 115.106 38.256C114.674 39.072 114.074 39.756 113.306 40.308C112.562 40.86 111.686 41.28 110.678 41.568C109.694 41.856 108.638 42 107.51 42H95.1617V16.44H108.842C109.73 16.44 110.534 16.632 111.254 17.016C111.974 17.4 112.586 17.904 113.09 18.528C113.594 19.128 113.978 19.824 114.242 20.616C114.53 21.384 114.674 22.164 114.674 22.956C114.674 24.204 114.362 25.38 113.738 26.484C113.114 27.564 112.202 28.368 111.002 28.896C112.466 29.328 113.618 30.108 114.458 31.236C115.322 32.34 115.754 33.732 115.754 35.412ZM110.75 34.476C110.75 34.02 110.666 33.588 110.498 33.18C110.354 32.748 110.15 32.376 109.886 32.064C109.622 31.752 109.31 31.512 108.95 31.344C108.59 31.152 108.194 31.056 107.762 31.056H100.13V37.788H107.51C107.966 37.788 108.386 37.704 108.77 37.536C109.178 37.368 109.526 37.14 109.814 36.852C110.102 36.54 110.33 36.18 110.498 35.772C110.666 35.364 110.75 34.932 110.75 34.476ZM100.13 20.688V27.132H106.754C107.594 27.132 108.302 26.844 108.878 26.268C109.478 25.692 109.778 24.9 109.778 23.892C109.778 22.908 109.502 22.128 108.95 21.552C108.422 20.976 107.762 20.688 106.97 20.688H100.13ZM127.874 42.36C126.338 42.36 124.958 42.096 123.734 41.568C122.51 41.04 121.466 40.332 120.602 39.444C119.762 38.532 119.114 37.488 118.658 36.312C118.202 35.136 117.974 33.9 117.974 32.604C117.974 31.284 118.202 30.036 118.658 28.86C119.114 27.684 119.762 26.652 120.602 25.764C121.466 24.852 122.51 24.132 123.734 23.604C124.958 23.076 126.338 22.812 127.874 22.812C129.41 22.812 130.778 23.076 131.978 23.604C133.202 24.132 134.234 24.852 135.074 25.764C135.938 26.652 136.598 27.684 137.054 28.86C137.51 30.036 137.738 31.284 137.738 32.604C137.738 33.9 137.51 35.136 137.054 36.312C136.598 37.488 135.95 38.532 135.11 39.444C134.27 40.332 133.238 41.04 132.014 41.568C130.79 42.096 129.41 42.36 127.874 42.36ZM122.942 32.604C122.942 33.444 123.062 34.212 123.302 34.908C123.566 35.58 123.914 36.168 124.346 36.672C124.802 37.176 125.33 37.572 125.93 37.86C126.53 38.124 127.178 38.256 127.874 38.256C128.57 38.256 129.218 38.124 129.818 37.86C130.418 37.572 130.934 37.176 131.366 36.672C131.822 36.168 132.17 35.568 132.41 34.872C132.674 34.176 132.806 33.408 132.806 32.568C132.806 31.752 132.674 30.996 132.41 30.3C132.17 29.604 131.822 29.004 131.366 28.5C130.934 27.996 130.418 27.612 129.818 27.348C129.218 27.06 128.57 26.916 127.874 26.916C127.178 26.916 126.53 27.06 125.93 27.348C125.33 27.636 124.802 28.032 124.346 28.536C123.914 29.04 123.566 29.64 123.302 30.336C123.062 31.032 122.942 31.788 122.942 32.604ZM143.174 23.136L147.242 29.04L147.53 29.688L147.89 29.04L151.922 23.136H156.89L150.158 32.604L156.998 42H152.03L147.854 36.132L147.53 35.52L147.242 36.132L143.102 42H138.134L144.938 32.604L138.242 23.136H143.174Z"
        fill={props.color || "#0415AA"}
      />
    </svg>
  );
};

export default Icon;
