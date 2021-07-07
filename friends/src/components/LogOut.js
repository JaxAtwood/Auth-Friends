import React from "react";
import { Button } from "../styles/StyleButton";

export default function LogOut() {

    const logout = e => {
        localStorage.clear();
        window.location.href = "/login";
      }

return (
    <div>
        <Button onClick={logout} >LOG OUT</Button>
    </div>
)};