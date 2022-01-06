import React, { useReducer, useRef, useState } from 'react'

import classes from './Form.module.css'

const formReducer = (state, action) => {
  if (action.type === 'FORM_INPUT') {
    return { value: action.val, isValid: true }
  }
  if (action.type === 'INVALIDFORM_INPUT') {
    return { isValid: false }
  }
  if (action.type === 'MESSAGE_INPUT') {
    return { isValid: true }
  }

  return {
    value: {
      title: '',
      description: '',
      image: '',
      web: '',
      github: '',
    },
    isValid: true,
  }
}

const Form = (props) => {
  const nameProjectInputRef = useRef()
  const nameDescriptionInputRef = useRef()
  const nameImageInputRef = useRef()
  const nameWebLiveInputRef = useRef()
  const nameGitHubInputRef = useRef()

  const [formState, dispatchForm] = useReducer(formReducer, {
    value: {
      title: '',
      description: '',
      image: '',
      web: '',
      github: '',
    },
    isValid: true,
  })

  const submitHandler = (e) => {
    e.preventDefault()

    if (
      !nameProjectInputRef.current.value ||
      !nameDescriptionInputRef.current.value ||
      !nameImageInputRef.current.value ||
      !nameWebLiveInputRef.current.value ||
      !nameGitHubInputRef.current.value
    ) {
      dispatchForm({ type: 'INVALIDFORM_INPUT' })
      setTimeout(() => {
        dispatchForm({ type: 'MESSAGEINPUT' })
      }, 1500)
      return
    }

    dispatchForm({
      type: 'FORM_INPUT',
      val: {
        title: nameProjectInputRef.current.value,
        description: nameDescriptionInputRef.current.value,
        image: nameImageInputRef.current.value,
        web: nameWebLiveInputRef.current.value,
        github: nameGitHubInputRef.current.value,
      },
    })

    props.submitPostProject(formState.value)
  }

  return (
    <div className="container">
      {!formState.isValid && (
        <p className={`${classes.jellohorizontal} fs-3 fw-lighter`}>
          🚨Please complete the form
        </p>
      )}
      {props.error && (
        <p className={`${classes.jellohorizontal} fs-3 fw-lighter`}>
          {props.error}
        </p>
      )}
      {props.uploaded && (
        <p className={`${classes.jellohorizontal} fs-3 fw-lighter`}>
          {props.uploaded}
        </p>
      )}
      <form onSubmit={submitHandler}>
        <div class="mb-3 px-5">
          <label htmlFor="projectname" className="form-label fs-5 fw-bold">
            Title
          </label>
          <input
            ref={nameProjectInputRef}
            type="text"
            className="form-control"
            placeholder="Type your project name"
          />
        </div>
        <div class="mb-3 px-5">
          <label htmlFor="image" className="form-label fs-5 fw-bold">
            Image
          </label>
          <input
            ref={nameImageInputRef}
            type="text"
            className="form-control"
            placeholder="Insert link"
          />
        </div>
        <div class="mb-3 px-5">
          <label htmlFor="web" className="form-label fs-5 fw-bold">
            Web
          </label>
          <input
            ref={nameWebLiveInputRef}
            type="text"
            className="form-control"
            placeholder="Insert link"
          />
        </div>
        <div class="mb-3 px-5">
          <label htmlFor="github" className="form-label fs-5 fw-bold">
            GitHub
          </label>
          <input
            ref={nameGitHubInputRef}
            type="text"
            className="form-control"
            placeholder="Insert link"
          />
        </div>
        <div class="mb-3 px-5 pb-2">
          <label htmlFor="description" className="form-label fs-5 fw-bold">
            Description
          </label>
          <textarea
            ref={nameDescriptionInputRef}
            className="form-control"
            placeholder="Leave a description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-dark bg-gradient fs-5">
          <i className="bi bi-cloud-arrow-up"></i> Upload
        </button>
        <button
          type="button"
          class="btn btn-dark bg-gradient ms-4 fs-5"
          onClick={() => window.location.reload()}
        >
          <i class="bi bi-arrow-clockwise"></i> Refresh
        </button>
      </form>
    </div>
  )
}

export default Form
