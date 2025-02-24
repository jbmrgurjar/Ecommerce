import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = (e) => {
  const {Error}=useRouteError();
// console.log(e.Error);

  return (
    <div>
      <h1>
        this is error page
      </h1>
    </div>
  )
}

export default ErrorPage