import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
position: fixed;

font-size : 30px;

background: transparent;
border: 0px;
font-weight : 100;

font-family : SB;
`

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button onClick={goBack} >
        &lt;

    </Button>
  );
}

export default BackButton;
