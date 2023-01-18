import styled from 'styled-components'

const LabelStyles = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  height: 2.5rem;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }

  &:hover input ~ .checkmark.checkmark-diabled {
    background-color: #eee;
  }

  input:checked ~ .checkmark {
    background-color: #2196f3;
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`

export default LabelStyles
