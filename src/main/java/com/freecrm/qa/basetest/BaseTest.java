package com.freecrm.qa.basetest;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.crm.qa.util.TestUtil;

public class BaseTest {
	
	protected WebDriver driver;
	protected String curDir=System.getProperty("user.dir");
	private Properties prop;
	protected String url;
	protected String userName;
	protected String password;
	
	public BaseTest(){
		 try {
				prop = new Properties();
				FileInputStream ip = new FileInputStream(curDir+ "/src/main/java/com/crm"
						+ "/qa/config/config.properties");
				prop.load(ip);
			}
			
			catch (FileNotFoundException e) {
				
				e.printStackTrace();
				
			} 
			
			catch (IOException e) {
				
				e.printStackTrace();
				
			}
		 
		 	String browserName = prop.getProperty("browser");
		 	url=prop.getProperty("url");
		 	userName=prop.getProperty("username");
		 	password=prop.getProperty("password");
		 	
			if(browserName.equals("chrome")){
				
				System.setProperty("webdriver.chrome.driver", curDir+"/driver/chromedriver.exe");	
				driver = new ChromeDriver();
				
			}
			else if(browserName.equals("FF")){
				
				System.setProperty("webdriver.gecko.driver", curDir+"/driver/geckodriver.exe");	
				driver = new FirefoxDriver(); 
			}
			
			
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
			
		}
	

}
