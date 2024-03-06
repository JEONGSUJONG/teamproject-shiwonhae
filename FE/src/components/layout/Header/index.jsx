import React from "react";
import * as ST from "./style";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";

const LeftType = {
  LOGO: "로고",
  BACK: "뒤로가기",
};

const CenterType = {
  TEXT: "내용",
  SEARCH: "검색기능",
};

const RightType = {
  SEARCH: "검색버튼",
};

const Header = ({
  typeLeft,
  typeCenter,
  typeRight,
  textCenter,
  leftOnClickEvent,
}) => {
  typeLeft = LeftType[typeLeft];
  typeCenter = CenterType[typeCenter];
  typeRight = RightType[typeRight];

  return (
    <ST.Header>
      <ST.LeftWrap onClick={leftOnClickEvent}>
        {typeLeft === LeftType.BACK && <IoIosArrowBack />}
        {typeLeft === LeftType.LOGO && <div>LOGO</div>}
      </ST.LeftWrap>
      <ST.CenterWrap>
        {typeCenter === CenterType.TEXT && textCenter}
        {typeCenter === CenterType.SEARCH && <div>SEARCH</div>}
      </ST.CenterWrap>
      <ST.RightWrap>
        {typeRight === RightType.SEARCH && <IoIosSearch />}
      </ST.RightWrap>
    </ST.Header>
  );
};

export default Header;
