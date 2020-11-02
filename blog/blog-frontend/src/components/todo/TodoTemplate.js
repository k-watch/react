import React from 'react';
import styled from 'styled-components';

const TodoTemplateWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f4fdff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateWrap>{children}</TodoTemplateWrap>;
};

export default TodoTemplate;
