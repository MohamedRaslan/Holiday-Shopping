echo off
echo ### Running The Holiday Shopping Hackathon Tests ###
call npm run cy:clean-reports
:: ---> ### Running The First Part ###
call npx cypress run --browser chrome --headless --reporter mochawesome --env RUN_PART=1
:: ---> ### Running The Second Part ###
call npx cypress run --browser chrome --headless --reporter mochawesome --env RUN_PART=2
:: ---> ### Running The Third Part ###
call npx cypress run --browser chrome --headless --reporter mochawesome --env RUN_PART=3
