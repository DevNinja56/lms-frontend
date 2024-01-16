import React from 'react'
interface propsType {
  height:string,
  width:string,
}

const Star = ({height,width} : propsType) => {
  return (
<svg width={`${width}`} height={`${height}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.618 8.55237C17.6942 8.17142 17.3894 7.71427 17.0085 7.71427L12.6656 7.10475L10.6846 3.14285C10.6085 2.99046 10.5323 2.91427 10.3799 2.83808C9.99893 2.60951 9.54179 2.76189 9.31322 3.14285L7.40846 7.10475L3.0656 7.71427C2.83703 7.71427 2.68464 7.79047 2.60845 7.94285C2.30369 8.24761 2.30369 8.70475 2.60845 9.00951L5.73226 12.0571L4.97036 16.4C4.97036 16.5524 4.97036 16.7048 5.04655 16.8571C5.27512 17.2381 5.73226 17.3905 6.11322 17.1619L9.99893 15.1048L13.8846 17.1619C13.9608 17.2381 14.1132 17.2381 14.2656 17.2381C14.3418 17.2381 14.3418 17.2381 14.418 17.2381C14.7989 17.1619 15.1037 16.7809 15.0275 16.3238L14.2656 11.9809L17.3894 8.93332C17.5418 8.85713 17.618 8.70475 17.618 8.55237Z" stroke="white" strokeWidth="1.5"/>
</svg>
  )
}

export default Star