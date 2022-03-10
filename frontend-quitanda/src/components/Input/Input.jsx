import React, { Fragment } from 'react';
import styled from 'styled-components';

export const InputVariants = {
	default: 'default',
	password: 'password'
};

export const Container = styled.div`
  display: flex;
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
	padding: 12px 12px;
  border-radius: 5px;
`;

const InputPassword = styled(Input)`
  width: 95%;
	font-size: 1rem;
	font-weight: 600;
  border-radius: 5px;
`;


const InputWrapper = (props) => {
	switch (props.variant) {
		case InputVariants.password:
			return (
        <Fragment>
          <InputTitle>{props.placeholder}</InputTitle>
          <InputPassword {...props}/> 
        </Fragment>
      );
		default:
			return (
        <Fragment>
          <InputTitle>{props.placeholder}</InputTitle>
          <Input {...props} />
        </Fragment>
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