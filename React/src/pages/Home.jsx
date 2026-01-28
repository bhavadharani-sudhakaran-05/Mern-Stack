import {Link} from "react-router-dom"
import Parent from "../components/Parent"
import State from "../hooks/State"
import Form from "../hooks/Form"
import Profile from "../components/Profile"
import {userContext} from"../App"
import {useState} from 'react'
const Home = () => {
  const [user,setUser]=useState("abcd")
  return (
    <div>
     <Link to={'/form'} > Form</Link><br/>
     <Link to={'/state'} > State</Link><br/>
     <Link to={'/reducer'} > Reducer</Link><br/>
<userContext.Provider value={user}>  
 <Profile 
 age={21}
 skills={["html","css"]}/>
</userContext.Provider>
<State/>
<Parent/>
<Form/>

    </div>
  )
}

export default Home