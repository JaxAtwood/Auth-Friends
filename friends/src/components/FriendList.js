import React from "react";
import axiosWithAuth  from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm";
import LogOut from "./LogOut";
import { Button } from "../styles/StyleButton";
import { Card, CardButtons } from "../styles/StyleCard";

//spinner??
//moment??

export default function FriendList() {

    const [friends, setFriends] = React.useState([]);
    const [editingFriend, setEditingFriend] = React.useState();

    const fetchFriends = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => {
            console.log("FETCH", res);
            setFriends(res.data)
        })
        .catch(error => console.log(error.response));
    };

    React.useEffect(() => {
        fetchFriends()
    }, [])

    const deleteFriend = id => {
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res => {
            console.log("DELETE", res);
            setFriends(res.data);
        })
        .catch(error => console.log(error.response));
    };

    const editFriend = friendObj => { //want friendObj if edittigng to be passed into form... needs to exist as a property
        setEditingFriend(friendObj);
    }

    return (
        <div>
            <FriendForm editingFriend={editingFriend} setFriends={setFriends} setEditingFriend={setEditingFriend}/>
            <h1> Friends </h1>

            {friends.map(friendObj => {
                return (
                    
                    <Card key={friendObj.id}>

                        {" "}
                        <p>{friendObj.name} , {friendObj.age}</p>{" "}
                        {/* <p>{friendObj.age}</p>{" "} */}
                        <p>{friendObj.email}</p>{" "}
                        <CardButtons>
                            <Button onClick={() => editFriend(friendObj)} >EDIT</Button>{" "}
                            {/* <button onClick={() => deleteFriend(friendObj.id)} >DELETE</button>{" "} */}
                            <Button onClick={() =>
                                window.confirm("Are You Sure You Wanna Delete?") &&
                                deleteFriend(friendObj.id) } >DELETE</Button>{" "}
                        </CardButtons>
                    </Card>
                    );
            })}
            <LogOut />
        </div>
    )
}