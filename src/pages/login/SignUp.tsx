import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Sign from "@layouts/login/Sign";

const SignUp = () => {
  const onSubmitSignUp = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    []
  );

  return (
    <Sign>
      <form onSubmit={onSubmitSignUp}>
        <label id="email-label">
          <span>이메일 주소</span>
          <div>
            <input data-testid="email-input" />
          </div>
        </label>
        <label id="password-label">
          <span>비밀번호</span>
          <div>
            <input data-testid="password-input" />
          </div>
        </label>
        <label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <input data-testid="password-input" type="password" />
          </div>
          {/* {missmatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {nicknameError && <Error>닉네임을 입력해주세요.</Error>}
          {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && (
            <Success>회원가입 되었습니다! 로그인해주세요.</Success>
          )} */}
        </label>
        <button data-testid="signup-button">회원가입</button>
      </form>
      <div>
        이미 회원이신가요?&nbsp;
        <Link to="/signin">로그인 하러가기</Link>
      </div>
    </Sign>
  );
};

export default SignUp;
