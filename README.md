# Protractor-Framework using Jasmine framework

Protractor-Javascript-Framework

1. The Framework can be used to test both Angular and Non-Angular Applications
2. Nodejs and protractor needs to be installed as pre-requisite
3. protractor-beautiful-reporter package is used for reporting purpose
4. The "config.js" file contains the critical functionalities of the framework
5. The Page-Object-Model methodolody is followed to avoid redendency
6. The sample arguments are stored under "data" folder
7. The reusable object properties and functions are stored using POM method under "lib" folder
8. Test cases are scripted under "specs" folder
9. Testcases are written in an efficeint manner avoiding "browser.sleep()" command 
10. Finally, run the testcases by executing the config.js file using command - "protractor src\config\config.js"