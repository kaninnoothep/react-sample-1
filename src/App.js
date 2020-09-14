import React, { Component, useState } from "react";
import Button from "./components/Button/Button";
import LabelInput from "./components/LabelInput/LabelInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <LabelInput
            title="Username"
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <LabelInput
            title="Password"
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <Button label="submit" />
        </form>
      </div>
    );
  }
}

export default App;

// const App = () => {
//   const [input, setInput] = useState({
//     username: "",
//     password: "",
//   });
//   const handleOnChange = (e) => {
//     setInput({ ...input, [e.target.id]: e.target.value });
//   };
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     setInput({ username: "", password: "" });
//   };

//   return (
// <div>
//   <form onSubmit={handleOnSubmit}>
//     <LabelInput
//       title="Username"
//       type="text"
//       id="username"
//       value={input.username}
//       onChange={handleOnChange}
//     />
//     <LabelInput
//       title="Password"
//       type="password"
//       id="password"
//       value={input.password}
//       onChange={handleOnChange}
//     />
//     <Button label="submit" />
//   </form>
// </div>
//   );
// };

// export default App;
