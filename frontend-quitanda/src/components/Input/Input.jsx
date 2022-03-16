import React, { Fragment, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styled from 'styled-components';

export const InputVariants = {
  default: 'default',
  password: 'password'
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const InputTitle = styled.p`
  color: #252733;
	font-size: 1rem;
  margin-left: 3%;
	font-weight: 600;
  align-self: flex-start;
`

const Input = styled.input`
  width: 95%;
	font-size: 1rem;
	font-weight: 600;
	padding: 10px 12px;
  border-radius: 5px;
`;

const InputWrapper = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const faEye = (
    <Fragment>
      {showPassword ?
        <FaEyeSlash onClick={() => setShowPassword(false)}
          style={{ position: 'absolute', alignSelf: 'end', marginLeft: '-3%', marginTop: '0.5rem' }}
        /> :
        <FaEye onClick={() => setShowPassword(true)}
          style={{ position: 'absolute', alignSelf: 'end', marginLeft: '-3%', marginTop: '0.5rem' }}
        />
      }
    </Fragment>
  )

  switch (props.variant) {
    case InputVariants.password:
      return (
        <Container>
          <InputTitle>{props.placeholder}</InputTitle>
          <Input {...props} type={showPassword ? 'input' : 'password'} /> 
          {faEye}
        </Container>
      );
    default:
      return (
        <Container>
          <InputTitle>{props.placeholder}</InputTitle>
          <Input {...props} />
        </Container>
      );
  };
};

InputWrapper.defaultProps = {
  type: 'input',
  children: undefined,
  variant: 'default',
  placeholder: ''
};

// InputWrapper.propTypes = {
// 	type: PropTypes.string,
// 	children: PropTypes.node,
//   placeholder: PropTypes.string,
// 	variant: PropTypes.oneOf(Object.values(InputVariants))
// } 

export default InputWrapper;