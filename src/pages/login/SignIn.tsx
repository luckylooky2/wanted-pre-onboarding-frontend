import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sign from "@layouts/login/Sign";
import useInput from "@hooks/useInput";

const SignIn = () => {
  const [disabled, setDisabled] = useState(false);
  const [email, emailHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const onSubmitSignUp = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(email);
    },
    [email]
  );

  const check = useCallback((): boolean => {
    if (email.includes("@")) return false;
    return true;
  }, [email]);

  useEffect(() => {
    setDisabled(check());
  }, [email]);

  return (
    <Sign>
      <form onSubmit={onSubmitSignUp}>
        <label id="email-label">
          <span>이메일 주소</span>
          <div>
            <input
              data-testid="email-input"
              value={email}
              onChange={emailHandler}
            />
          </div>
        </label>
        <label id="password-label">
          <span>비밀번호</span>
          <div>
            <input
              data-testid="password-input"
              type="password"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          {/* {logInError && <Error>{logInError}</Error>} */}
        </label>
        <button disabled={disabled} data-testid="signin-button">
          로그인
        </button>
      </form>
      <div>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </div>
    </Sign>
  );
};

export default SignIn;
