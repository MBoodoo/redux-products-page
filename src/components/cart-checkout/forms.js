import React, { useState, useEffect } from "react";
import Link from "next/link";
import Select from "react-select";
import useForm from "react-hook-form";
import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const CheckoutSchema = yup.object().shape({
  firstName: yup.string().required("Must be filled in"),
  lastName: yup.string().required("Must be filled in"),
  email: yup
    .string()
    .required("Must be filled in")
    .email()
    .typeError("Email not valid"),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid")
  //state:
});
const options = [{ value: "Kentucky", label: "KY" }];
export default () => {
  const [isLoading, setLoading] = useState(false);
  const [hasAgreed, setAgreed] = useState(false);
  const [selectedOption, setSelected] = useState("");

  const { register, handleSubmit, errors } = useForm({
    validationSchema: CheckoutSchema
  });

  const onSubmit = data => {
    if (isLoading) {
      return;
    } else if (!hasAgreed) {
      alert("Please agree to terms");
      return;
    }
    setLoading(true);
    // submit "data" value to CMS or database
    return setLoading(false);
  };

  return (
    <form className="forms" onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <input name="firstName" ref={register} placeholder="First Name" type="text" />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div className="field">
        <input name="lastName" ref={register} placeholder="Last Name" type="text" />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div className="field">
        <input name="email" ref={register} placeholder="Email" type="email" />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div className="field">
        <input name="phone" ref={register} placeholder="Phone" type="tel" />
        {errors.phone && <p>{errors.phone.message}</p>}
      </div>
      <Select
        className="select-state"
        options={options}
        value={selectedOption}
        onChange={val => setSelected(val)}
      /> 
      <div className="terms">
        <input
          checked={hasAgreed}
          onChange={e => setAgreed(e.target.checked)}
          type="checkbox"
        />
        I agree to the terms and conditions
      </div>
      <div>
        <button type="submit" className="verify">
          Check Out
        </button>
      </div>
      <Link href="/">
        <a className="continue">Continue shopping</a>
      </Link>
    </form>
  );
};
