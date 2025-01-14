# Web Automation With JavaScript Cypress Framework

### This is a complete project where an [E-commerce](https://magento.softwaretestingboard.com/) site is automated by writing Test Cases using Python selenium and Robot as testing Framework.


## Tool & Technology used in this Project
 - Language: JavaScript
 - Tool: Cypress
 - IDE: VSCode


## Framework used in this Project
 - Cypress Framework
 
 
  ## Project Scenarios
  - The Search Button is Working Properly.
  - The Searching result is displating properly
  - User can Add Products to their Cart By Choosing Color or Size
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
 
 
 ## FrameWork Structure

 -All the Elements have been stored is a js file named elements.js
- All the desired data has been stored in a js file named data.js
- In the first Spec file searching functionality is being checked.
- In the Second Spec file Product Adding to the Cart and removing from the cart is being checked.



## Reasoining for Choosing this Design
 I choose this design because is all the elements are being stored in a file and all the data are being stored in a file then if i need to change the locator or data then i have to change only in that specific file and no need to touch any of the epec file for thay particular changes. I also add a custom method of for signing in and logging in. First User wants to log in to the system but if failed for for not doing registration then the sign in method will be called and the usercan sign in to the system and then he can do his desired operation. and if the user has no registraion issue then he can directly login to the system and starting his operation.

I want to make it dynamic frameework as much as possible for me. I want to run this project Independently. That's why I make it dynamic


