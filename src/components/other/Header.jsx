import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    
    // window.location.reload();
  }

  return (
    <div className="flex justify-between items-end">
        <h1 className="text-2xl">Hello <br /> <span className="text-3xl font-semibold">{props.data.firstName} 👋</span></h1>
        <button onClick={logOutUser} className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-lg">Logout</button>
    </div>
  )
}

export default Header