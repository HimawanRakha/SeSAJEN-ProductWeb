"use client";
import "react-phone-input-2/lib/style.css";
import PhoneInputLib from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = () => {
  return (
    <div className="col">
      <label htmlFor="phone">
        Phone number <span className="text-red-700">*</span>
      </label>
      <PhoneInputLib
        country={"id"}
        value=""
        onChange={(phone) => console.log(phone)}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true,
        }}
        inputClass="w-[900px] h-[60px] rounded-2xl border-gray-300"
        containerClass="mt-2"
        inputStyle={{
          width: "100%",
          height: "60px",
          borderRadius: "16px",
          paddingLeft: "90px",
        }}
        buttonStyle={{
          borderRadius: "16px 0 0 16px",
          paddingRight: "20px",
          paddingLeft: "20px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
