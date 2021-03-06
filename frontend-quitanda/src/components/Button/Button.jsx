import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ButtonColors = {
	default: 'default',
	primary: 'primary',
	danger: 'danger'
};

export const ButtonsVariants = {
	default: 'default',
	outlined: 'outlined',
	link: 'link',
  form: 'form',
  slim: 'slim'
};

const getMainColor = ({ theme, color }) => {
	switch (color) {
		case ButtonColors.primary:
			return theme.colors.primary.main;
		case ButtonColors.danger:
			return theme.colors.danger.main;
		default:
			return '#863e03'
	};
};

const getDarkColor = ({ theme, color }) => {
	switch (color) {
		case ButtonColors.primary:
			return theme.colors.primary.dark;
		case ButtonColors.danger:
			return theme.colors.danger.dark;
		default:
			return '#863e03'
	};	
};

const getOutlinedText = (props) => {
	if (props.color === ButtonColors.default) {
		return "#212121";
	};

	return getMainColor(props);
};

const getFormText = (props) => {
	if (props.color === ButtonColors.default) {
		return "#FFFFFF";
	};

	return getMainColor(props);
};

const getLinkText = (props) => {
	if (props.color === ButtonColors.default) {
		return "#757575";
	};

	return getMainColor(props);	
};

const getSlimText = (props) => {
	if (props.color === ButtonColors.default) {
		return "#FFFFFF";
	};

	return getMainColor(props);
};

const getColorText = ({ theme, color }) => {
	switch (color) {
		case ButtonColors.primary:
			return theme.colors.primary.text;
		case ButtonColors.danger:
			return theme.colors.danger.text;
		default:
			return '#212121'
	};
};

const Button = styled.button`
	font-size: 1rem;
	font-weight: 600;
	text-transform: uppercase;
	padding: 12px 36px;
	cursor: pointer;
	background-color: ${getMainColor};
	border: 2px solid ${getMainColor};
	color: ${getColorText};
	&:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	};
	&:hover:enabled {
		background-color: ${getDarkColor};
		border: 2px solid ${getDarkColor};
	};
`;


const ButtonOutlined = styled(Button)`
	background: transparent;
	color: ${getOutlinedText};
	&:hover:enabled {
		background-color: transparent;
		color: ${getDarkColor};
	};
`;


const ButtonLink = styled(Button)`
	background-color: transparent;
	border-color: transparent;
	color: ${getLinkText};
	padding-left: 0;
	padding-right: 0;
	&:hover:enabled {
		background-color: transparent;
		border-color: transparent;
		color: ${getDarkColor};
	};
`;


const ButtonForm = styled(Button)`
	width: 95%;
  border-radius: 5px;
	padding: 10px 30px;
  color: ${getFormText};
	&:hover:enabled {
		background-color: transparent;
		color: ${getDarkColor};
	};
`;

const ButtonSlim = styled(Button)`
	font-size: 0.7rem;
  border-radius: 5px;
  padding: 6px 20px;
  color: ${getSlimText};
	&:hover:enabled {
		background-color: transparent;
		color: ${getDarkColor};
	};
`;

const ButtonWrapper = (props) => {
	switch (props.variant) {
		case ButtonsVariants.outlined:
			return <ButtonOutlined {...props} />;
		case ButtonsVariants.link:
			return <ButtonLink {...props} />;
    case ButtonsVariants.form:
      return <ButtonForm {...props} />;
    case ButtonsVariants.slim:
      return <ButtonSlim {...props} />;
    default:
			return <Button {...props} />;
	};
};


ButtonWrapper.defaultProps = {
	type: 'button',
	children: undefined,
	color: 'default',
	variant: 'default'
};

ButtonWrapper.propTypes = {
	type: PropTypes.string,
	children: PropTypes.node,
	color: PropTypes.oneOf(Object.values(ButtonColors)),
	variant: PropTypes.oneOf(Object.values(ButtonsVariants))
}

export default ButtonWrapper;