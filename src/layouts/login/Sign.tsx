import React, { FC, ReactNode, PropsWithChildren } from "react";
interface Props {
  children: ReactNode;
}

const Sign: FC<Props> = ({ children }) => {
  return (
    <div id="container">
      <header style={{ fontSize: "25px" }}>
        <img
          style={{ width: "100px" }}
          src="https://hr.wanted.co.kr/wp-content/uploads/2020/06/cropped-wanted-new-symbol.png"
          alt="slack_favicon"
        />
        Wanted list
      </header>
      {children}
    </div>
  );
};

export default Sign;
