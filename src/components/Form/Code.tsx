import { Size } from "../../types/common";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";

function Code({ onCodeChange }: CodeProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");

    onCodeChange(Number(e.currentTarget.value));
  };

  return (
    <InputContainer label="보안코드(CVC/CVV)">
      <Input
        size={Size.Medium}
        onChange={onChange}
        name="code"
        maxLength={3}
        type="password"
      ></Input>
    </InputContainer>
  );
}

type CodeProps = {
  onCodeChange: Function;
};

export default Code;
