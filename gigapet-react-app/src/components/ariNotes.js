import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import { Formik } from "formik";
import * as Yup from "yup";
const Login = props => {
  const dispatch = props.dispatch;
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(login(values.email, values.password, props.history));
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - 8 chars minimum")
          .matches(/(?=.*[0-9])/, "Password must contain a number")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
              <label>
                Email
                <input
                  type="text"
                  name="email"
                  placeholder="example@domain.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
              </label>
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label>
                Password
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
              </label>
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </form>
            {/* navlinks for forgot password and register */}
          </div>
        );
      }}
    </Formik>
  );
};
export default connect(state => state)(Login);
