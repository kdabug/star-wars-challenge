import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  border: solid 10px pink;
  height: 50%;
  padding: 10%;
  font-size: 2rem;
  margin: 20% auto;
  text-align: center;
  font-family: "Star Jedi";
`;

function Message({ children }) {
  return <MessageContainer>{children}</MessageContainer>;
}

export default Message;
