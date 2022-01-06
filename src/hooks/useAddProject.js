import React, { useState } from 'react'

const useAddProject = () => {
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
        setUploaded('✔️Project uploaded')
        setTimeout(() => {
          setUploaded(false)
        }, 2000)
      }
    } catch (err) {
      if (err) {
        setError(`🚨${err.message}`)
        setTimeout(() => {
          setError(false)
        }, 2000)
      }
    }
  }

  return {
    uploaded,
    isError,
    submitPostProject,
  }
}

export default useAddProject
