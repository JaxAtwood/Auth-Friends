import React from "react";
// import moment from "moment";
// import Loader from "react-router-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        gasPrices: [],
        id: [],
        name: "",
    };

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
            .get("http://localhost:5000/api/friends")
            .then(res => {
                console.log("HELP ME", res.data)
                this.setState({
                    id: res.data.id
                });
            })
                .catch(err => console.log(err.response));
}

render() {
    console.log("NOTHING", this.state.data);
    console.log("ANOTHER", this.state.id);
    return (
          <p>TEST</p>
    );
}
};

export default FriendsList;