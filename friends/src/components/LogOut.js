import React from "react";

export default function LogOut() {

    const logout = e => {
        localStorage.clear();
        window.location.href = "/login";
      }

return (
    <div>
        <button onClick={logout} >LOG OUT</button>
    </div>
)};