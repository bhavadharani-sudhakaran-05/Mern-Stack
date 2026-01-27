import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    depart: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <br/>
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
<br/>
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
        <br />
<br/>
        <label htmlFor="depart">Department: </label>
        <input
          type="text"
          name="depart"
          value={form.depart}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
