import React from 'react'

const User = ({ name, department, skills, values }) => {
  return (
    <div>
      <h1>i am {name} from {department} department.</h1>

      <ol>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>   
        ))}
      </ol>

      <ol>
        {values.map((value, index) => (
          <li key={index}>{value}</li>   
        ))}
      </ol>
    </div>
  )
}

export default User
