Feature: Free CRM Login Feature
Scenario: Login for Free CRM

Given user is on the home page
When title of the home page is Free CRM
Then user click on login button
Then user is on login page
Then user enters email and password
Then user clicks on submit button
Then user is able to login to his account
Then close the browser 