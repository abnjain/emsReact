import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data)
    }
  }, []);
  

  const handleLogin = (email, password) => {
    const admin = userData.admin.find((e)=> email == e.email && password == e.password)
    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin", data: admin}));
    } else if  (userData) {
      const employee = userData.employees.find((e)=> email == e.email && password == e.password)
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role: "employee", data: employee}));
      }
    }
    else {
      alert("Invalid Credentials");
    }
  }
  // console.log(user);
  // console.log(loggedInUserData);
  

  return (
    <>
    {/* <Login /> */}
    
    {!user ? <Login handleLogin = {handleLogin} />: ''}
    {user == "admin" ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App