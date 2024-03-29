import InputBox from "./InputBox";
import useFormRecoil from "../../../../../hooks/useFormRecoil";

interface InputBoxContainerProps {
  title: { en: string; ko: string };
  children?: React.ReactNode;
  width?: string;
}

const InputBoxContainer = ({ title, children, width }: InputBoxContainerProps) => {
  const { changeHandler, elementRef } = useFormRecoil(title.en);
  return (
    <InputBox
      title={title.ko}
      changeHandler={changeHandler}
      inputRef={elementRef as React.RefObject<HTMLInputElement>}
      width={width}
    >
      {children}
    </InputBox>
  );
};

export default InputBoxContainer;
