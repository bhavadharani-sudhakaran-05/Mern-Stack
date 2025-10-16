import React, { useState } from 'react'
const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    const {name,value}=e.target
    setForm((prev)=>({
        ...prev,
        [name]:value
  }))
  }
  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(form);
} 
  return (
    <div>
      <h1>Validation Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        /><br />
        <label htmlFor=''>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        /><br />
        <label htmlFor=''>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        /><br />
        
      <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default Contact
