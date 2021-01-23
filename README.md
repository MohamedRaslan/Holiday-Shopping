# Holiday-Shopping

## Pre-requisites:
1. Install Node.js from [here](https://nodejs.org/en/)

## To Run Holiday-Shopping Project
1. Download the prject
    * Option 1: `git clone https://github.com/MohamedRaslan/Holiday-Shopping.git`
    * Option 2: Download it as a Zip file and extract it
2. CD into the `Holiday-Shopping` folder
3. Set up environment variable `APPLITOOLS_API_KEY` with your own API key.
    * Login to Applitools > Click on the Person icon > My API Key
    * Linux/Mac: export APPLITOOLS_API_KEY=<your_key>
    * Windows: set APPLITOOLS_API_KEY=<your_key>
4. run `npm install`
5. run `npx eyes-setup`
6. run the batch file `.\run.bat`


## How To Explore The Project Briefly
+ The code in `/cypress/integration/holiday_shopping.spec.js` is your start point, and it has the three needed tests.
+ The JSON file in `cypress/fixtures/holiday_shopping_data.json` has all the different configuration for the three different parts of the execution.
+ The bat file `.\run.bat` run the three needed tests in three different parts of the execution (part 1, part 2,and part3) respectively.

+ If you want to run a specific part only you can just set the **env** key **RUN_PART** to different value "1, 2, or 3"

## Test Results
+ **For Part 1**
    + The URL for the batch test results from the applitools dashboard is **[From Here](https://eyes.applitools.com/app/test-results/00000251794231919394?accountId=0BBzkOURv0W_gxSf2WFd0w~~&display=details&top=00000251794231672180%283%29)**

+ **For Part 2**
    + The URL for the batch test results from the applitools dashboard is **[From Here](https://eyes.applitools.com/app/test-results/00000251794231791027?accountId=0BBzkOURv0W_gxSf2WFd0w~~&display=details&top=00000251794231672180%283%29)**
    + And the URL for the root cause analysis (RCA) view of the applitools dashboard for failed Test 3 are
        + For the discount bug **[From Here](https://eyes.applitools.com/app/test-results/00000251794231791027/00000251794231759756/steps/1/edit?accountId=0BBzkOURv0W_gxSf2WFd0w~~&diff=eyJub2RlMSI6eyJ0b3AiOjc3MiwibGVmdCI6ODg4LjcsIndpZHRoIjo4OCwiaGVpZ2h0IjoyMH0sIm5vZGUxaGFzaCI6LTEyMTMyMzI4NjYsIm5vZGUyIjp7InRvcCI6NzcyLCJsZWZ0Ijo4ODguNywid2lkdGgiOjg4LCJoZWlnaHQiOjIwfSwibm9kZTJoYXNoIjotMTIxMzIzMjg2Nn0%3D&mode=step-editor)**
        + For the product details bug **[From Here](https://eyes.applitools.com/app/test-results/00000251794231791027/00000251794231759756/steps/1/edit?accountId=0BBzkOURv0W_gxSf2WFd0w~~&diff=eyJub2RlMSI6eyJ0b3AiOjY1NywibGVmdCI6MTUsIndpZHRoIjo1NzAsImhlaWdodCI6MTQxfSwibm9kZTFoYXNoIjotMTI4ODMzMTI4Mywibm9kZTIiOnsidG9wIjo2NTcsImxlZnQiOjE1LCJ3aWR0aCI6NTAsImhlaWdodCI6MTEwN30sIm5vZGUyaGFzaCI6LTEyODgzMzEyODN9&mode=step-editor)**

+ **For Part 3**
    + The URL for the batch test results from the applitools dashboard is **[From Here](https://eyes.applitools.com/app/test-results/00000251794231672180?accountId=0BBzkOURv0W_gxSf2WFd0w~~&display=details&top=00000251794231672180%283%29)**
