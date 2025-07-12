import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Email regex pattern: /\S+@\S+\.\S+/

function SignUp() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // console.log("user details: ", user);

  function onSubmit(data) {
    const {
      signup_fullname,
      signup_phone_number,
      signup_email,
      signup_password,
      signup_passwordConfirm,
    } = data;

    // navigate("/login");
  }

  return (
    <div className="signup-container">
      <form
        className="signup-form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off" // Disables autofill for entire form
      >
        <h2>Sign Up</h2>

        {/* Full Name */}
        <div>
          <label>Full Name</label>
          <input
            type="text"
            id="fullname"
            autoComplete="off"
            {...register("signup_fullname", {
              required: "This field is required",
            })}
          />
          {errors.signup_fullname && (
            <p className="error">{errors.signup_fullname.message}</p>
          )}
        </div>
        {/* Phone Number */}
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            id="phone_number"
            autoComplete="off"
            {...register("signup_phone_number", {
              required: "This field is required",
            })}
          />
          {errors.signup_phoneNumber && (
            <p className="error">{errors.signup_phone_number.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            autoComplete="off"
            {...register("signup_email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.signup_email && (
            <p className="error">{errors.signup_email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            {...register("signup_password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          {errors.signup_password && (
            <p className="error">{errors.signup_password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            id="passwordConfirm"
            type="password"
            autoComplete="new-password"
            {...register("signup_passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().signup_password ||
                "Passwords do not match",
            })}
          />
          {errors.signup_passwordConfirm && (
            <p className="error">{errors.signup_passwordConfirm.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "15px" }}>
          <button type="reset" onClick={() => navigate("/login")}>
            Cancel
          </button>
          <button type="submit">Create New</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
