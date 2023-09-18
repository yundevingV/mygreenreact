import React from "react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={goBack} style={{ position: "absolute", top: 10, left: 10 }}>
      뒤로 가기
    </button>
  );
}

export default BackButton;
