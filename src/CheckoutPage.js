import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { CheckoutSchema } from "./schema";
import { useNavigate } from "react-router-dom";


const initialValues = {
  f_name: "",
  l_name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  card_num: "",
  expire: "",
  security: "",
};
// const CheckoutPage = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: initialValues,
//       validationSchema: CheckoutSchema,
//       onSubmit: (values, action) => {
//         console.log(values);
//         action.resetForm();
//       },
// //     });

//   console.log(errors);

  const CheckoutPage = () => {

    const navigate = useNavigate();

    const {
      values,
      errors,
      touched,
      handleBlur,
      handleChange,
      handleSubmit,
      isValid
    } = useFormik({
      initialValues,
      validationSchema: CheckoutSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        navigate("/thankyou");
      }
    });

  const Wrapper = styled.section`
    @import url("https://fonts.googleapis.com/css?family=Arimo");

    $maroon: #8e2807;
    $title: #493b76;

    body {
      display: flex;
      justify-content: center;
    }
    form p {
      color: red;
    }

    .wrapper {
      margin-top: 5%;
      width: 60%;
      margin-left: 20%;
      display: flex;
      justify-content: center;
      font-family: "Arimo";
      background-color: #f5f0bb;
      -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
      -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
      box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
      ${"" /* animation: slideUp 2000ms ease; */}
    }

    @keyframes slideUp {
      0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible;
      }

      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }
    }

    .container {
      width: 65%;
      padding: 5% 10%;
      align: center;
    }

    h1 {
      align-self: center;
    }

    form {
      width: 100%;

      > * {
        margin-top: 20px;
      }

      input {
        width: 100%;
        min-height: 25px;
        border: 0;
        font-size: 1rem;
        letter-spacing: 0.15rem;
        font-family: "Arimo";
        margin-top: 5px;
        color: $maroon;
        border-radius: 4px;
      }

      label {
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
        color: $maroon;
      }

      h1 {
        font-size: 24px;
        line-height: 10px;
        color: $title;
        letter-spacing: 1px;
      }

      h1:nth-of-type(2) {
        margin-top: 10%;
      }
    }

    .name {
      justify-content: space-between;
      display: flex;
      width: 100%;

      div {
        width: 45%;
      }
    }

    .address-info {
      display: flex;
      justify-content: space-between;

      div {
        width: 30%;
      }
    }

    .cc-info {
      display: flex;
      justify-content: space-between;

      div {
        width: 45%;
      }
    }

    .btns {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      button {
        margin: 3px 0;
        height: 30px;
        width: 40%;
        color: #cfc9e1;
        background-color: #4a3b76;
        text-transform: uppercase;
        border: 0;
        border-radius: 0.3rem;
        letter-spacing: 2px;

        &:hover {
          animation-name: btn-hov;
          animation-duration: 550ms;
          animation-fill-mode: forwards;
        }
      }
    }

    @keyframes btn-hov {
      100% {
        background-color: #cfc9e1;
        color: #4a3b76;
        transform: scale(1.05);
      }
    }

    input:focus,
    button:focus {
      outline: none;
    }

    @media (max-width: 736px) {
      .wrapper {
        width: 100%;
      }

      .container {
        width: 100%;
      }

      .btns {
        align-items: center;

        button {
          width: 50%;
        }
      }

      form h1 {
        text-align: center;
      }

      .name,
      .address-info,
      .cc-info {
        flex-direction: column;
        width: 100%;
        justify-content: space-between;

        div {
          align-items: center;
          flex-direction: column;
          width: 100%;
          display: flex;
        }
      }
      form p {
        color: red;
      }

      .street,
      .cc-num {
        text-align: center;
      }

      input {
        margin: 5px 0;
        min-height: 30px;
      }
    }
  `;

  return (
    <Wrapper>
      <div class="wrapper">
        <div class="container">
          <form onSubmit={handleSubmit} action="">
            <h1>
              <i class="fas fa-shipping-fast"></i>
              Shipping Details
            </h1>
            <div class="name">
              <div>
                <label for="f-name">First</label>
                <input
                  type="text"
                  name="f_name"
                  value={values.f_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.f_name && touched.f_name ? (
                  <p className="form-error">{errors.f_name}</p>
                ) : null}
              </div>
              <div>
                <label for="l-name">Last</label>
                <input
                  type="text"
                  name="l_name"
                  value={values.l_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.l_name && touched.l_name ? (
                  <p className="form-error">{errors.l_name}</p>
                ) : null}
              </div>
            </div>
            <div class="street">
              <label for="name">Street</label>
              <input
                type="text"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p className="form-error">{errors.address}</p>
              ) : null}
            </div>
            <div class="address-info">
              <div>
                <label for="city">City</label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.city && touched.city ? (
                  <p className="form-error">{errors.city}</p>
                ) : null}
              </div>
              <div>
                <label for="state">State</label>
                <input
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.state && touched.state ? (
                  <p className="form-error">{errors.state}</p>
                ) : null}
              </div>
              <div>
                <label for="zip">Zip</label>
                <input
                  type="text"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.zip && touched.zip ? (
                  <p className="form-error">{errors.zip}</p>
                ) : null}
              </div>
            </div>
            <h1>
              <i class="far fa-credit-card"></i> Payment Information
            </h1>
            <div class="cc-num">
              <label for="card-num">Credit Card No.</label>
              <input
                type="tel"
                name="card_num"
                value={values.card_num}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.card_num && touched.card_num ? (
                <p className="form-error">{errors.card_num}</p>
              ) : null}
            </div>
            <div class="cc-info">
              <div>
                <label for="card-num">Exp</label>
                <input
                  type="date"
                  name="expire"
                  value={values.expire}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.expire && touched.expire ? (
                  <p className="form-error">{errors.expire}</p>
                ) : null}
                <p>
                  <br></br>
                </p>
                {/* <div>
      <label>
        <input type="checkbox" />
       <center>COD</center> 
      </label>
    </div> */}
              </div>

              <div>
                <label for="card-num">CVV</label>
                <input
                  type="password"
                  name="security"
                  value={values.security}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.security && touched.security ? (
                  <p className="form-error">{errors.security}</p>
                ) : null}
              </div>
            </div>

            <div class="btns">
            <button type="button" onClick={handleSubmit} disabled={!isValid}>Purchase</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default CheckoutPage;
