import React from 'react'
import classes from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div
      className={`${classes.scaleincenter} container p-3 d-flex align-items-center justify-content-center`}
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
