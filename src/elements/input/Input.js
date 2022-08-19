import styled from 'styled-components';

const Input = ({ type, value, _onChange, _ref, style }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={_onChange}
      ref={_ref}
      width={style?.width}
      height={style?.height}
      ft_size={style?.ft_size}
      bg_color={style?.bg_color}
      color={style?.color}
      pd_top={style?.pd_top}
      pd_bottom={style?.pd_bottom}
      pd_left={style?.pd_left}
      pd_right={style?.pd_right}
      mg_top={style?.mg_top}
      mg_bottom={style?.mg_bottom}
      mg_left={style?.mg_left}
      mg_right={style?.mg_right}
      bd_radius={style?.bd_radius}
      bd_color={style?.bd_color}
    />
  );
};

export default Input;

export const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '50px')};
  font-size: ${(props) => (props.ft_size ? props.ft_size : '13px')};
  background-color: ${(props) => props.bg_color ? props.bg_color : 'white'};
  color: ${(props) => (props.color ? props.color : '#525252')};
  padding-top: ${(props) => (props.pd_top ? props.pd_top : '0px')};
  padding-bottom: ${(props) => (props.pd_bottom ? props.pd_bottom : '0px')};
  padding-left: ${(props) => (props.pd_left ? props.pd_left : '0px')};
  padding-right: ${(props) => (props.pd_right ? props.pd_right : '0px')};
  margin-top: ${(props) => (props.mg_top ? props.mg_top : '0px')};
  margin-bottom: ${(props) => (props.mg_bottom ? props.mg_bottom : '0px')};
  margin-left: ${(props) => (props.mg_left ? props.mg_left : '0px')};
  margin-right: ${(props) => (props.mg_right ? props.mg_right : '0px')};
  border-radius: ${(props) => (props.bd_radius ? props.bd_radius : '0px')};
  border: 1px solid ${(props) => (props.bd_color ? props.bd_color : '0px')};
  outline: none;
`;
