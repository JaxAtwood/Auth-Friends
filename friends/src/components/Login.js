import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {

    const [form, setForm] = React.useState({ username: "", password: "" }); //React dot notation instead of importing inside {}
        //props for username and pw => destructuring? as empty strings

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); //spreading form then targeting the event to act on the name & value
            //name is assigned below (banana), value is what the input is
    }

    const login = e => {
        e.preventDefault(); //keeps page from refreshing
        axiosWithAuth()
            .post("/api/login", form) //per the ReadMe or server.js data 
            //with a post, needs data- form is our data here bc it has out username and pw
            .then(res => {
                console.log("LOGIN", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/");
            })
            .catch(error => {
                console.log(error.response)
                alert("Incorrect Log In Information")
                setForm({ username: "", password: "" }); //resets form back to nothing if it's incorrect
         });
    };


    return (
        <div>
            <form onSubmit={login}>
                <input //input is a property name from JSX
                    type="text" //type, placeholder, name, etc are attributes of the property "input"
                    placeholder="username"
                    name="username" //must match the name of the property inside of our state
                    onChange={handleChanges}
                    value={form.username}
                />
                <input 
                    type="password"
                    placeholder="password"
                    name="password" //must match the name of the property inside of our state
                    onChange={handleChanges}
                    value={form.password}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login;