import { useState } from "react";
import { InfoButton, InfoCol, InfoImg, InfoLayout, InfoTitle } from "./Info.styles";
import { InfoDataType } from "./InfoContainer";

interface InfoProps {
  infoRef: React.RefObject<HTMLDivElement>;
  data: InfoDataType;
}

const Info = ({ data, infoRef }: InfoProps) => {
  const [fold, setFold] = useState(true);
  return (
    <InfoLayout ref={infoRef}>
      <InfoCol>
        <InfoTitle>상품정보</InfoTitle>
        {(fold ? [data[0]] : data).map(src => (
          <InfoImg src={src} key={src} />
        ))}
        <InfoButton onClick={() => setFold(!fold)}>상품정보 {fold ? "더보기" : "접기"}</InfoButton>
      </InfoCol>
    </InfoLayout>
  );
};

export default Info;