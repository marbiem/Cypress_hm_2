/// <reference types="cypress" />

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

const LoginPage = new Login();
const HomePage = new Home();

describe("Login on website LMS", () => {
  it("Login with custom method", () => {
    LoginPage.navigate();
    LoginPage.validateInputs();
    LoginPage.validateLoginButton();
    HomePage.validateMenuButton();
    HomePage.validateLogoutButton();
  });
});
