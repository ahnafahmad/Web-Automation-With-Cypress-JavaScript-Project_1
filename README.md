# Web Automation With JavaScript Cypress Framework

### This is a complete project where an [E-commerce](https://magento.softwaretestingboard.com/) site is automated by writing Test Cases using javaScript Cypress as testing Framework.


## Tool & Technology used in this Project
 - Language: JavaScript
 - Tool: Cypress
 - IDE: VSCode


## Framework used in this Project
 - Cypress Framework
 
 
  ## Project Scenarios
  - The Search Button is Working Properly.
  - The Searching result is displaying properly
  - User can Add Products to their Cart By Choosing a Color or Size
  - User can Remove Products from The Cart.
 
 
  ## How to run this project:
 - Clone this project [Web-Automation-With-JavaScript-Cypress-Framwork](https://github.com/ahnafahmad/Web-Automation-With-Cypress-JavaScript-Project_1.git)
 - hit the following command:
  ```
 npx Cypress open\*
 ```
 
 
 ## Prerequisite
 You have to Install all these Package for run this Project<br>
 ```
node js
 ```
 ```
npm install
```
 
 
 ## Framework Structure

- All elements are stored in a dedicated JavaScript file named elements.js.
- All required data is organized and stored in a JavaScript file named data.js.
- The first spec file focuses on testing the search functionality.
- The second spec file validates the process of adding products to the cart and subsequently removing them.



## Reasoning for Choosing this Design
I designed this framework to centralize all elements and data within dedicated files. This approach ensures that if a locator or data value needs to be updated, the changes can be made in the respective file without modifying any specific test files, making maintenance more efficient.

Additionally, I implemented a custom method for user authentication. If a user attempts to log in but fails due to the absence of prior registration, the sign-in method is triggered, allowing the user to register and then proceed with their desired operations. If the user is already registered, they can directly log in and begin their tasks seamlessly.

My goal is to create a highly dynamic and flexible framework that can operate independently. This design ensures modularity, scalability, and ease of execution, making the project as autonomous and adaptable as possible.


