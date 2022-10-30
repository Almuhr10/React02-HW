import React, { Component } from "react";

import pic1 from "../card7.jpg";
import pic2 from "../card8.jpg";

export default class ClassC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdulkarim",
      Img: <img src={pic1} width={"200px"} height={"200px"} alt="" />,
    };

    this.changeName = () => this.setState({ name: "Ali" });
    this.changeImg = () =>
      this.setState({
        Img: <img src={pic2} width={"200px"} height={"200px"} alt="" />,
      });
  }
  render() {
    return (
      <div className="container">
        <div className="text-center">
          Name is : {this.state.name}
          <br />
          <button onClick={this.changeName} className="btn">
            ChangeName
          </button>
        </div>
        <div className="text-center">
          Photo is : {this.state.Img}
          <br />
          <button onClick={this.changeImg} className="btn">
            ChangePhoto
          </button>
        </div>
      </div>
    );
  }
}
