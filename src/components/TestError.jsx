import React, { useState } from "react";

export default function TestError() {
  const [errrorText, setErrorText] = useState("");

  function handleError(e) {
    if (e.target.value.toUpperCase() == "BOMB") {
      setErrorText("BOMB");
    }
  }
  if (errrorText == "BOMB") {
    throw new Error("Error Boundary. Checked.");
  }
  return (
    <div className="test-error">
      <label>Enter bomb to test Error boundary</label>
      <input
        onChange={handleError}
        type="text"
        placeholder="Enter bomb to check error boundary"
      />
    </div>
  );
}
