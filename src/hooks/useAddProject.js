import React, { useState } from 'react'

const useAddProject = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [uploaded, setUploaded] = useState(false)

  const submitPostProject = async (project) => {
    try {
      const response = await fetch(
        'https://myworkpotofolio-default-rtdb.europe-west1.firebasedatabase.app/projects.json',
        {
          method: 'POST',
          body: JSON.stringify({
            title: project.title,
            description: project.description,
            img: project.image,
            web: project.web,
            github: project.github,
          }),
          headers: {
            'Content-Type': 'aplication/json',
          },
        },
      )

      const data = await response.json()

      if (data) {
        setIsLoading(true)

        setTimeout(() => {
          setIsLoading(false)
        }, 800)

        setTimeout(() => {
          setUploaded('✔️Project uploaded')
        }, 900)

        setTimeout(() => {
          setUploaded(false)
        }, 2500)
      }
    } catch (err) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 800)

      setTimeout(() => {
        setError(`🚨${err.message}`)
      }, 900)

      setTimeout(() => {
        setError(false)
      }, 2500)
    }
  }

  return {
    uploaded,
    isLoading,
    isError,
    submitPostProject,
  }
}

export default useAddProject
