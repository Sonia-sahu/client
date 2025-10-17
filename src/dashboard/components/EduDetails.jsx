import React from 'react'
import EduRow from './EduRow'

const EduDetails = () => {
  return (
    <>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <EduRow/>
        </tbody>
      </table>
    </>
  )
}

export default EduDetails
