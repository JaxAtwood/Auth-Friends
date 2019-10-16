import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";



export default function FriendForm(props) {

    const [form, setForm] = React.useState({ name: "", age: "", email: "" }); 

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value}); 
    };

    React.useEffect(() => {
        if (props.editingFriend) {
            setForm( {
                name: props.editingFriend.name, 
                age: props.editingFriend.age, 
                email: props.editingFriend.email
            });
        } else {
            setForm({ name: "", age: "", email: "" });
        }
    }, [props.editingFriend])

    


//WHAT DOES PERSIST THE DATA MEAN?
    const submitHandler = e => {
        e.preventDefault();

        if (props.editingFriend) {
            axiosWithAuth()
                .put(`/api/friends/${props.editingFriend.id}`, form)
                .then(res => {
                    console.log("PUT", res)
                    props.setFriends(res.data);
                    setForm({ name: "", age: "", email: "" });
                    props.setEditingFriend(null);
                })
        } else {
            axiosWithAuth()
                .post("/api/friends", form)
                .then(res => {
                    console.log("ADDFRIEND", res);
                    props.setFriends(res.data)        
                    setForm({ name: "", age: "", email: "" });
                })
                .catch(error => console.log(error.response));
            }
        };

        const closeEdit = e => {
            e.preventDefault();
            props.setEditingFriend(null) //set to null will set the "ifs" to false
        }

        return (
            <div className="addNewBud">
                <p>Add New Buddy</p>
                <form onSubmit={submitHandler}>
                    <input 
                        required
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={handleChanges}
                        value={form.name}
                    />
                    <input
                        required
                        type="number"
                        name="age"
                        placeholder="age"
                        onChange={handleChanges}
                        value={form.age}
                    />
                    <input 
                        required
                        type="email"
                        name="email"
                        placeholder="email"
                        onChange={handleChanges}
                        value={form.email}
                    />
                    <button type="submit">{props.editingFriend ? "Submit Edit" : "Add Friend"}</button>
                    <button onClick={closeEdit} >Cancel</button>
                </form>
            </div>
        )
    }