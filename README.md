## To Run the function
```
npm run test
```
## How to export as ZIP folder

### First Copy the updated index.js file into root directory
```
Copy-Item src\index.js index.js 
```

### Zip the index.jx file with package.json with the desired name (build-recipients.zip)
```
Compress-Archive index.js, package.json build-recipients.zip 
```
### Make sure the zip file contais only `index.js` and `package.json`
```
 tar -tf email-function.zip 
```
### Remove the index.json from the root directory to avoid confusion for anyone refer the code later.
```
Remove-Item index.js
```


## In this project:

#### File name: index.js

#### Exported function: buildRecipients

#### So the handler is:

`index.buildRecipients`
##### This handler is possible to use in Saas platform directly after import that ZIP folder into Saas platform
