import React, { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState({
    fullName: "",
    password: "",
    repassword: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    if (inputValue.password == inputValue.repassword) {
      console.log("Success");
    } else {
      console.log("Re-ENter the password");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue.fullName}
          onChange={onChangeHandler}
          type="text"
          name="fullName"
          placeholder="Name"
        />
        <input
          value={inputValue.password}
          onChange={onChangeHandler}
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          value={inputValue.repassword}
          onChange={onChangeHandler}
          type="password"
          name="repassword"
          placeholder="Re-Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
