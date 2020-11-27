import React from "react";

import SignIn from "../../components/sign-in/sing-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SigInAndSignUpPageContainer } from  './sign-in-sign-up.styles.jsx';

const SigInAndSignUpPage = () => (
  <SigInAndSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SigInAndSignUpPageContainer>
);

export default SigInAndSignUpPage;
