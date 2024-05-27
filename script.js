function doGet(e) {
    var x = HtmlService.createTemplateFromFile("index");
    var y = x.evaluate();
    var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return z;
  }
  
  function checkLogin(username, password) {
    var url = 'Sheet Link';
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("DATA");
    var getLastRow =  webAppSheet.getLastRow();
    var found_record = '';
    for(var i = 1; i <= getLastRow; i++) {
     if(webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
       webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase()) {
       found_record = 'TRUE';
       break; // Stop loop once a match is found
     }    
    }
    if(found_record == '') {
      found_record = 'FALSE'; 
    }
    
    return found_record;
  }
  
  function AddRecord(username, password, email, phone) {
    var url = 'Sheet Link';
    var ss= SpreadsheetApp.openByUrl(url);
    var webAppSheet = ss.getSheetByName("DATA");
    webAppSheet.appendRow([username, password, email, phone]);
  }