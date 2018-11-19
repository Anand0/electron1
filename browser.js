const {dialog} = require('electron').remote
var fs = require('fs');
var isLoading = false;
const {BrowserWindow} = require('electron')
var $ = require('./jquery-3.0.0.min.js');
var recordList = [];
var XLSX = require('xlsx');
var headerArray = []


document.getElementById("myfileInput").addEventListener("click", function(){
  var lines = {};

  var table = document.createElement('table');
  table.border = "1";


  var modal = document.getElementById('myModal');
  // modal.style.display = "block";

var finalOp;
      dialog.showOpenDialog({
        filters: [

               { name: 'files', extensions: ['csv', 'xlsx','xls'] },

             ],
        properties: [ 'openFile' ] }, function ( filename ) {
          console.log( filename.toString() );

          var filepath=filename.toString();

  var papa = require('papaparse');
  var info;
  var final=[];

  var data2;
  var lines = [];
  var headers = [];

/*
  let csvToJson = require('convert-csv-to-json');
  let json = csvToJson.getJsonFromCsv(filepath);
  // let json= csvToJson.fieldDelimiter('~') .getJsonFromCsv(filepath);
  //  csvToJson.formatValueByType().getJsonFromCsv(filepath);
  console.log("json=="+json.toString())

  // var lines = [];

  for(let i=0; i<json.length;i++){
      console.log(json[i]);
      lines.push(json[i])
  }

  console.log(lines);
  var result3=JSON.stringify(lines);
  result3 = result3.replace(/\r?\n|\r/g, " ");
  console.log("result3==>"+result3); */

            var array = fs.readFileSync(filepath).toString();
           xlsxformatter(filepath)

               //Get the count of columns.

            var f = array.split("\n");
            // Get first row for column headers
            var headers = f.shift().split(",");

            // console.log("headers -->"+headers);
          /*     var columnCount = headers.length, td, checkbox;
              //  var columnCount =
              // var rows = table.insertRow(-1);
               for (var i = 0; i < columnCount; i++) {
                   var tr = document.createElement("tr");
                   for (var j = 1; j < 3; j++) {
                     td = document.createElement("td");
                      checkbox = document.createElement('input');
                     checkbox.type = "checkbox";
                    //  checkbox.setAttribute("display","inline-block");
                     checkbox.setAttribute("width","60px");
                     checkbox.setAttribute("height","34px");
                     checkbox.setAttribute("position","relative");
                     checkbox.setAttribute("value",headers[i]);
                    //  checkbox.setAttribute("onchange",checkedvalue(this.value));
                     if(j == 1)
                     {
                     var newStr = headers[i].replace(/^"?(.+?)"?$/,'$1');
                       td.innerHTML = newStr;
                       tr.appendChild(td);
                     }
                     else if(j == 2) {
                       td.appendChild(checkbox);
                       tr.appendChild(td);

                       }

                   }

                   table.appendChild(tr);


               }
               var dvTable = document.querySelector(".modal-body");
               dvTable.innerHTML = "";
               dvTable.appendChild(table);
                modal.style.display = "block";

            var json4 = [];
            f.forEach(function(d){
                // Loop through each row
              var  tmp = {}
              var  row = d.split(",")

                for(var i = 0; i < headers.length; i++){
                    tmp[headers[i]] = row[i];

                }
                // Add object to list

                json4.push(tmp);
            }); */
    //          finalOp = JSON.stringify(json4);
    //         var Op = finalOp.replace(/\r?\n|\r/g, " ");
    // console.log("json4=="+Op);



       //Add the header row.


      //  //Add the data rows.
      //  for (var i = 1; i < Op.length; i++) {
      //      row = table.insertRow(-1);
      //      for (var j = 0; j < columnCount; j++) {
      //          var cell = rows.insertCell(-1);
      //          cell.innerHTML = Op[i][j];
      //      }
      //  }



});

});

function xlsxformatter(filenames) {
  var workbook = XLSX.readFile(filenames);
var sheet_name_list = workbook.SheetNames;

var table = document.createElement("TABLE");
var checkbox = document.createElement('switch');
checkbox.type = "checkbox";
table.setAttribute("id", "table");
table.setAttribute("border-collapse", "collapse");

checkbox.setAttribute("display","inline-block");
checkbox.setAttribute("width","60px");
checkbox.setAttribute("height","34px");
checkbox.setAttribute("position","relative");

table.setAttribute("width", "100%");
   table.border = "1";

recordList = [];
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    var headerArray = [];
    for(z in worksheet) {
        if(z[0] === '!') continue;
        //parse out the column, row, and value
        var tt = 0;
        for (var i = 0; i < z.length; i++) {
            if (!isNaN(z[i])) {
                tt = i;
                break;
            }
        };
        var col = z.substring(0,tt);
        var row = parseInt(z.substring(tt));
        var value = worksheet[z].v;

        // headers[col] = value;
       //  headerArray.push(headers[col]);

// console.log("data row=="+value);
        //store header names
        if(row == 1 && value) {
            headers[col] = value;
            headerArray.push(headers[col]);

            continue;
        }

// console.log("data headers=="+value);
        if(!data[row]) data[row]={};
        data[row][headers[col]] = value;
    }
    console.log("headerArray=="+headerArray);
    var columnCount = headerArray.length, td, checkbox;
   //  var columnCount =
   // var rows = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var tr = document.createElement("tr");
        for (var j = 1; j < 3; j++) {
          td = document.createElement("td");
           checkbox = document.createElement('input');
          checkbox.type = "checkbox";
         //  checkbox.setAttribute("display","inline-block");
          checkbox.setAttribute("width","60px");
          checkbox.setAttribute("height","34px");
          checkbox.setAttribute("position","relative");
          checkbox.setAttribute("value",headers[i]);
         //  checkbox.setAttribute("onchange",checkedvalue(this.value));
          if(j == 1)
          {
          var newStr = headerArray[i].replace(/^"?(.+?)"?$/,'$1');
            td.innerHTML = newStr;
            tr.appendChild(td);
          }
          else if(j == 2) {
            td.appendChild(checkbox);
            tr.appendChild(td);

            }

        }

        table.appendChild(tr);


    }
    var dvTable = document.querySelector(".modal-body");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
     modal.style.display = "block";


    //drop those first two rows which are empty
    data.shift();
    data.shift();

    // return headerArray;
    // console.log("data=="+data);
});

}

/*
function CSVtoArray(text) {
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    console.log("CSVArray -->"+a);
    return a;
}; */

$(document).on('change','#table input:checkbox' ,function(){
     // $this will contain a reference to the checkbox
      var $this = $(this);
    if ($this.prop("checked")){//To CHECK CHECK BOX IS CHECKED OR NOT
        //  $(this).closest('div').toggleClass('highlight');
        recordList.push($(this).parent("td").siblings().text());
        console.log("recordList=="+recordList);
        //  alert($(this).parent("td").siblings().text());
    }else{

      for (var n = 0 ; n < recordList.length ; n++) {
          if (recordList[n] == $(this).parent("td").siblings().text()) {
            var removedObject = recordList.splice(n,1);
            removedObject = null;
            break;
          }
      }


      console.log("recordList=="+recordList);
    }
});

$(document).on('click', '#Option', function(){
  var modal = document.getElementById('myModal');
  modal.style.display = "none";
// alert("its working");

});


$(document).on('click', '#run', function(){

alert(recordList);
var modal = document.getElementById('myModal');
modal.style.display = "none";
});
