package com.freecrm.qa.testrunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src/main/java/com/freecrm/qa/features/login.feature",
			glue="com.freecrm.qa.stepdefinitions",
			format= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, 
			monochrome = true,
			strict = true, 
			dryRun = false			
			)
	 
	public class TestRunner {
	 
	}