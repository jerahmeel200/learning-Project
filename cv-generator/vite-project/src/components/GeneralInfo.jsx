import React, { useState } from "react";

const GeneralInfo = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };
//   console.log("handleChange", formData)
//   console.log("onSubmit", onSubmit)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{fontFamily:"cursive", fontSize:"30px"}}>Enter Your Info</h1>
      <input
        style={{
          width: "500px",
          height: "30px",
          borderRadius: "20px",
          border: "none",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginBottom: "7px",
          fontFamily:"cursive"
        }}
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="enter name"
        value={formData.name}
      />
      <input
        style={{
          width: "500px",
          height: "30px",
          borderRadius: "20px",
          border: "none",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginBottom: "7px",
          fontFamily:"cursive"
        }}
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="enter email"
        value={formData.email}

      />
      <input
        style={{
          width: "500px",
          height: "30px",
          borderRadius: "20px",
          border: "none",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginBottom: "7px",
          fontFamily:"cursive"

        }}
        type="number"
        name="phoneNumber"
        onChange={handleChange}
        placeholder="enter phone number"
        value={formData.phoneNumber}

      />

      <button onClick={()=> onSubmit(formData)} style={{width: "200px",
          height: "35px",
          borderRadius: "20px",
          border: "none",
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor:"blue",
          color:"white",
          cursor:"pointer",
          fontFamily:"cursive"
          }}>
        Submit
      </button>
    </div>
  );
};

export default GeneralInfo;
