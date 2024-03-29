import React from "react";
import { AgreeList } from "../../../types";
import {
  AgreeBox,
  AgreeLayout,
  AgreeSelectAll,
  AgreeSelectAllInput,
  AgreeSelectAllLabel,
  AgreeSelectInput,
  AgreeSelectItem,
  AgreeSelectList,
  AgreeSelectLabel,
  AgreeTitle,
  AgreeSelectAllText,
  AgreeSelectText,
} from "./Agree.styles";

interface AgreeProps {
  agreeList: AgreeList;
  checkedList: AgreeList;
  handleChangeAll: (checked: any) => void;
  handleChangeElement: (checked: any, list: any) => void;
}

const Agree = ({ agreeList, checkedList, handleChangeAll, handleChangeElement }: AgreeProps) => {
  return (
    <AgreeLayout>
      <AgreeTitle>약관동의</AgreeTitle>
      <AgreeBox>
        <AgreeSelectAll>
          <AgreeSelectAllInput
            type="checkbox"
            id="all"
            onChange={(e: any) => handleChangeAll(e.target.checked)}
            checked={checkedList.length === 0 ? false : checkedList.length === agreeList.length ? true : false}
          />
          <AgreeSelectAllLabel htmlFor="all">전체동의</AgreeSelectAllLabel>
          <AgreeSelectAllText> (선택항목에 대한 동의 포함)</AgreeSelectAllText>
        </AgreeSelectAll>
        <AgreeSelectList>
          {agreeList.map(item => (
            <AgreeSelectItem key={item.id}>
              <AgreeSelectInput
                type="checkbox"
                id={"ck" + item.id}
                onChange={(e: any) => handleChangeElement(e.target.checked, item)}
                checked={checkedList.includes(item as never) ? true : false}
              />
              <AgreeSelectLabel htmlFor={"ck" + item.id}>{item.text}</AgreeSelectLabel>
              <AgreeSelectText color={item.description === "(선택)" ? "#A7A7A8" : "inherit"}>
                {item.description}
              </AgreeSelectText>
            </AgreeSelectItem>
          ))}
        </AgreeSelectList>
      </AgreeBox>
    </AgreeLayout>
  );
};

export default Agree;
