package com.freecrm.qa.stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import com.freecrm.qa.basetest.BaseTest;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition extends BaseTest{

	
	 @Given("^user is on the home page$")
	 public void userOnHomePage(){
	 driver.get(url);
	 
	 }
	 
	 @When("^title of the home page is Free CRM$")
	 public void verifyHomePageTitle(){
		 
		 String title = driver.getTitle();
		 Assert.assertEquals("Free CRM software can boost your sales by 30%", title);

	 }
	 
	 @Then("^user click on login button$")
	 public void clickLoginButton(){
		 
		 WebElement loginBtn = driver.findElement(By.xpath("//a[contains(text(),'Log In')]"));
		 JavascriptExecutor executor = (JavascriptExecutor)driver;
		 executor.executeScript("arguments[0].click();", loginBtn);
	
	 }
	 
	 @Then("^user is on login page$")
	 public void verifyLoginPageTitle(){
		 
		 String title = driver.getTitle();
		 Assert.assertEquals("Cogmento CRM", title);

	 }
	 
	 @Then("^user enters email and password$")
	 public void enterEmailPwd(){
		 
		 WebDriverWait wait=new WebDriverWait(driver,10);
		 wait.until(ExpectedConditions.elementToBeClickable(By.name("email")));
		 driver.findElement(By.name("email")).sendKeys(userName);
		 driver.findElement(By.name("password")).sendKeys(password);
		 
	 }
	 
	 @Then("^user clicks on submit button$")
	 public void clickSubmitButton(){ 
		 WebElement loginBtn = driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']"));
		 loginBtn.click();
		 
	 }
	 
	 @Then("^user is able to login to his account$")
	 public void verifyLogin(){
		 
		 WebElement displayName=driver.findElement(By.xpath("//span[@class='user-display']"));
		 String userDisplayName = displayName.getText();
		 Assert.assertEquals("Sravan Kumar", userDisplayName);

	 }
	 
	 @Then("^close the browser$")
	 public void closeBrowser(){
		 
		 driver.quit();

	 }

}
