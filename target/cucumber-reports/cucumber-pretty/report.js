$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DesktopFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Desktop Features",
  "description": "",
  "id": "desktop-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AssignmentTest"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopStepDefenation.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 365560900,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.get(String)\" because \"core.Base.driver\" is null\r\n\tat core.Base.initializeDriver(Base.java:97)\r\n\tat stepDefinitions.DesktopStepDefenation.user_is_on_Retail_website(DesktopStepDefenation.java:24)\r\n\tat ✽.Given User is on Retail website(Features/DesktopFeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopStepDefenation.user_Click_on_Desktops_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_on_Show_all_desktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "User verify all items are present in Desktops tab",
  "description": "",
  "id": "desktop-features;user-verify-all-items-are-present-in-desktops-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User should see all items are present in Desktop page",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopStepDefenation.user_should_see_all_items_are_present_in_Desktop_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopStepDefenation.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 6099200,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.get(String)\" because \"core.Base.driver\" is null\r\n\tat core.Base.initializeDriver(Base.java:97)\r\n\tat stepDefinitions.DesktopStepDefenation.user_is_on_Retail_website(DesktopStepDefenation.java:24)\r\n\tat ✽.Given User is on Retail website(Features/DesktopFeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopStepDefenation.user_Click_on_Desktops_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_on_Show_all_desktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "User add HP LP 3065 from Desktops tab to the cart",
  "description": "",
  "id": "desktop-features;user-add-hp-lp-3065-from-desktops-tab-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User click ADD TO CART option on \u0027HP LP3065\u0027 item",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select quantity 1",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User click add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should see a message \u0027Success: you have added HP LP 3065 to your Shopping cart!\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 39
    }
  ],
  "location": "DesktopStepDefenation.user_click_ADD_TO_CART_option_on_HP_LP_item(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "DesktopStepDefenation.user_select_quantity(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_add_to_Cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 57
    }
  ],
  "location": "DesktopStepDefenation.user_should_see_a_message_Success_you_have_added_HP_LP_to_your_Shopping_cart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopStepDefenation.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 5745100,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.get(String)\" because \"core.Base.driver\" is null\r\n\tat core.Base.initializeDriver(Base.java:97)\r\n\tat stepDefinitions.DesktopStepDefenation.user_is_on_Retail_website(DesktopStepDefenation.java:24)\r\n\tat ✽.Given User is on Retail website(Features/DesktopFeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopStepDefenation.user_Click_on_Desktops_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_on_Show_all_desktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "User add Canon EOS 5D from Desktops tab to the cart",
  "description": "",
  "id": "desktop-features;user-add-canon-eos-5d-from-desktops-tab-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User click ADD TO CART option on \u0027Canon EOS 5D\u0027 item",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User select color from dropdown \u0027Red\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User select quuantity 1",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User click add too Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User should see a message \u0027Success: You have added Canon EOS 5d to your shopping cart\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "DesktopStepDefenation.user_click_ADD_TO_CART_option_on_Canon_EOS_D_item(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_select_color_from_dropdown_Red()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "DesktopStepDefenation.user_select_quuantity(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_add_too_Cart_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 61
    }
  ],
  "location": "DesktopStepDefenation.user_should_see_a_message_Success_You_have_added_Canon_EOS_d_to_your_shopping_cart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Click on Desktops tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on Show all desktops",
  "keyword": "And "
});
formatter.match({
  "location": "DesktopStepDefenation.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 7743000,
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.get(String)\" because \"core.Base.driver\" is null\r\n\tat core.Base.initializeDriver(Base.java:97)\r\n\tat stepDefinitions.DesktopStepDefenation.user_is_on_Retail_website(DesktopStepDefenation.java:24)\r\n\tat ✽.Given User is on Retail website(Features/DesktopFeature.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopStepDefenation.user_Click_on_Desktops_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_on_Show_all_desktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "User add a review to Canon EOS 5D item in Desktops tab",
  "description": "",
  "id": "desktop-features;user-add-a-review-to-canon-eos-5d-item-in-desktops-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "User click on Canon EOS 5D item",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User click on write a review link",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user fill the review information with below information",
  "rows": [
    {
      "cells": [
        "yourname",
        "yourReview",
        "Rating"
      ],
      "line": 35
    },
    {
      "cells": [
        "AlexJohn",
        "VeryGoodVeryGoodVeryGood",
        "Good"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "User should see a message with \u0027Thank you for your review. It has been submitted to the webMaster for approval\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "DesktopStepDefenation.user_click_on_Canon_EOS_D_item(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_on_write_a_review_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_fill_the_review_information_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_click_on_Continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopStepDefenation.user_should_see_a_message_with_Thank_you_for_your_review_It_has_been_submitted_to_the_webMaster_for_approval()"
});
formatter.result({
  "status": "skipped"
});
});