import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  border: solid 10px pink;
`;

function Message({ children }) {
  return <MessageContainer>{children}</MessageContainer>;
}

export default Message;
