import React, { useState } from "react";
import Input from "../../Input";
import Button from "../../Button";

const initialValues = {
  name: "",
  email: "",
  phone: "",
};
function StepOne() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameError = () => {
    if (values.name === "") {
      setError(`Name should not be empty`);
    } else if (values?.name.length < 5) {
      setError(`Name must not be less than 5 characters`);
    } else {
      setError("");
    }
  };
  const handlePhoneError = () => {
    if (values.phone === "") {
      setError(`Phone Number should not be empty`);
    } else if (values?.phone.length < 11) {
      setError(`Phone Number must be 11 characters`);
    } else {
      setError("");
    }
  };

  return (
    <div>
      {JSON.stringify(values)}
      <h1 className=" text-primaryMarineBlue mb-2 text-xl font-extrabold">
        Personal Info
      </h1>
      <p className="text-coolGray text-sm  mb-4">
        Please provide your name, email address, and phone number.
      </p>
      <form onSubmit={onSubmit}>
        <label htmlFor="name" className="text-primaryMarineBlue text-md mt-4">
          Name
        </label>
        <Input
          type="text"
          placeholder="e.g Stephen King"
          handleChange={handleChange}
          name="name"
          id="name"
          onBlur={handleNameError}
        />
        <p className="text-red-500">{error}</p>
        <label htmlFor="email" className="text-primaryMarineBlue text-md mt-4">
          Email Address
        </label>
        <Input
          type="email"
          placeholder="e.g stephenking@gmail.com"
          handleChange={handleChange}
          name="email"
          id="email"
        />
        <label htmlFor="phone" className="text-primaryMarineBlue text-md  mt-4">
          Phone Number
        </label>
        <Input
          type="text"
          placeholder="e.g +1234 567 890"
          handleChange={handleChange}
          name="phone"
          id="phone"
          onBlur={handlePhoneError}
        />

        <div className="flex justify-end pt-20">
          <Button
            className=" bg-primaryMarineBlue text-PrimaryLightBlue  px-3 py-2 rounded"
            text="Next Step"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default StepOne;
