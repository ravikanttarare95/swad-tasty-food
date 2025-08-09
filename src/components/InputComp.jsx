import React from "react";

function InputComp({ type, name, value, onchange, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onchange}
      placeholder={placeholder}
      required
      className="bg-white/10 text-white placeholder-white border border-white/30 rounded-lg px-3 py-2 outline-none focus:border-yellow-400"
    />
  );
}

export default InputComp;
