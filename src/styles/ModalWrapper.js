import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  button{
    top: 30px;
    right: 30px;
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    color: white;
    font-weight: 700;
    border: 0;
    cursor: pointer;
    font-size: 20px;
  }
  & .container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`