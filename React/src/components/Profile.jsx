const Profile = ({ name, age, skills }) => {
  return (
    <>
      <div>App</div>
      <h1>I am {name} and I am {age} years old</h1>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default Profile;
