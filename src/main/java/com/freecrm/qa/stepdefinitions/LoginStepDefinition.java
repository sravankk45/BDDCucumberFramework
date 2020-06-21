package com.freecrm.qa.stepdefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class LoginStepDefinition {
	
	private WebDriver driver;
	
	 @Given("^user is on the home page$")
	 public void userOnHomePage(){
		 
	 System.setProperty("webdriver.chrome.driver","/driver/chromedriver");
	 driver = new ChromeDriver();
	 driver.get("https://www.freecrm.com/index.html");
	 
	 }
	 
	 @When("^title of the home page is Free CRM$")
	 public void verifyHomePageTitle(){
		 
		 String title = driver.getTitle();
		 Assert.assertEquals("Free CRM #1 cloud software for any business large or small", title);

	 }
	 
	 @Then("^user click on login button$")
	 public void clickLoginButton(){
		 
		 WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		 loginBtn.click();
	 }
	 
	 @Then("^user is on login page$")
	 public void verifyLoginPageTitle(){
		 
		 String title = driver.getTitle();
		 Assert.assertEquals("Cogmento CRM", title);

	 }
	 
	 @Then("^user enters email and password$")
	 public void enterEmailPwd(){
		 
		 driver.findElement(By.name("username")).sendKeys("sravank.587@gmail.com");
		 driver.findElement(By.name("password")).sendKeys("Srav123456789");
		 
	 }
	 
	 @Then("^user clicks on submit button$")
	 public void clickSubmitButton(){
		 
		 WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
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
