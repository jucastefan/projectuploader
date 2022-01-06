import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Form from '../components/Form'
import useAddProject from '../hooks/useAddProject'

const Page = () => {
  const { uploaded, isError, submitPostProject } = useAddProject()

  const onSubmit = (project) => {
    submitPostProject(project)
  }

  return (
    <main className="container pb-5">
      <Fragment>
        <Header />
        <Form
          submitPostProject={onSubmit}
          error={isError}
          uploaded={uploaded}
        />
      </Fragment>
    </main>
  )
}

export default Page
