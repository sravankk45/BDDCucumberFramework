$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/com/freecrm/qa/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login for Free CRM",
  "description": "",
  "id": "free-crm-login-feature;login-for-free-crm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of the home page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user enters email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is able to login to his account",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.userOnHomePage()"
});
formatter.result({
  "duration": 9737706200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyHomePageTitle()"
});
formatter.result({
  "duration": 19045500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickLoginButton()"
});
formatter.result({
  "duration": 4355040300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyLoginPageTitle()"
});
formatter.result({
  "duration": 5882300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.enterEmailPwd()"
});
formatter.result({
  "duration": 598468200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.clickSubmitButton()"
});
formatter.result({
  "duration": 93867600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.verifyLogin()"
});
formatter.result({
  "duration": 2115063300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.closeBrowser()"
});
formatter.result({
  "duration": 758845700,
  "status": "passed"
});
});