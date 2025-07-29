import React, { useRef, useState } from "react";
import TextInput from "../../../InputFields/TextInput";
import OrangeButton from "../../../Button/OrangeButton";

const ContactUser = ({ userDetail, setUserDetail, setStage }) => {
  const [error, setError] = useState(0);
  const nameRef = useRef();
  const contactNumberRef = useRef();
  const emailRef = useRef();
  const handelData = () => {
    if (nameRef.current?.value == "" || nameRef.current == null) {
      setError(1);
    } else if (
      contactNumberRef.current?.value == "" ||
      contactNumberRef.current == null
    ) {
      setError(2);
    } else if (emailRef.current?.value == "" || emailRef.current == null) {
      setError(3);
    } else {
      setError(0);
      setUserDetail({
        userName: nameRef.current.value,
        contactNumber: contactNumberRef.current.value,
        email: emailRef.current.value,
        password: "",
        city: "",
        street: "",
        deliveryDescription: "",
      });
    }
  };

  return (
    <div>
      <TextInput label={"Name"} placeholder={"Enter a Name"} ref={nameRef} />
      <TextInput label={"Email"} placeholder={"Enter a Email"} ref={emailRef} />
      <TextInput
        label={"ContactNumber"}
        placeholder={"Enter a Contact Number"}
        ref={contactNumberRef}
      />
      <div>
        <OrangeButton title={"Proceed"} onClick={() => handelData()} />
      </div>
    </div>
  );
};

export default ContactUser;
