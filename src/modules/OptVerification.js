import "./Otp.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useState } from "react";
export const OptVerification = () => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="otp">
      <form>
        <div className="otp_container">
          <h1>Enter your OTP</h1>
          <MuiOtpInput length={4} value={value} onChange={handleChange} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
