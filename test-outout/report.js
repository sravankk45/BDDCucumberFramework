$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/freecrm/qa/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login for Free CRM with valid credentials",
  "description": "",
  "id": "free-crm-login-feature;login-for-free-crm-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the home page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is able to login to his account",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.userOnHomePage()"
});
formatter.result({
  "duration": 9994796000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyHomePageTitle()"
});
formatter.result({
  "duration": 14445000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickLoginButton()"
});
formatter.result({
  "duration": 2877460100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyLoginPageTitle()"
});
formatter.result({
  "duration": 6375600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterEmailPwd()"
});
formatter.result({
  "duration": 551717600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickSubmitButton()"
});
formatter.result({
  "duration": 78583300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyLogin()"
});
formatter.result({
  "duration": 1499544100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 739986000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login for Free CRM with invalid credentials",
  "description": "",
  "id": "free-crm-login-feature;login-for-free-crm-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of the home page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enters invalid email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user gets invalid login message",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.userOnHomePage()"
});
formatter.result({
  "duration": 8994618700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyHomePageTitle()"
});
formatter.result({
  "duration": 105736000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickLoginButton()"
});
formatter.result({
  "duration": 944108400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyLoginPageTitle()"
});
formatter.result({
  "duration": 16873100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterInvEmailPwd()"
});
formatter.result({
  "duration": 2791206900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickSubmitButton()"
});
formatter.result({
  "duration": 75236100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyInvLogin()"
});
formatter.result({
  "duration": 1395394000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 741647300,
  "status": "passed"
});
});