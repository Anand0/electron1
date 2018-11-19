
// var ipc = require('electron').ipcMain;
// var ipc = require('ipc-renderer');

// const ipcRenderer = require('electron').ipcRenderer;
// const ipcMain = require('electron').ipcMain;
// var ipc = require('ipc');

const {app, BrowserWindow} = require('electron');
var ipc = require('electron').ipcMain;


let mainWindow;

function GetContentsBetweenString1(MainString,startString,endString) {
var Position1 = MainString.indexOf(startString);
var length = MainString.length;
var str = MainString.substring(Position1,length);
MainString = str;
Position1=MainString.indexOf(endString);
str = MainString.substring(0,Position1);
return str;
}

function takeright1(result,hrStart)
{
  var Position1 = result.indexOf(hrStart);
  var length = result.length;
  var strLength = hrStart.length;
  Position1 = Position1+strLength;
  result = result.substring(Position1,length);
  return result;
}


 __myInjection={

   getVal: function(){

         return document.getElementById('header')

     }
     ,clearPNSTo: function(){
        var t=__myInjection
        try{clearTimeout(t.toPNS);}catch(x){}
    }
    ,toPNS: null

 ,

getSearch : function() {
  var result = document.getElementById('results').innerHTML
  alert(result)

  // $("li"),(function () {
  //   alert($(this).attr("data-li-entity-id"));
  // });

},

profile_scroll : function() {
  var id = "li-modal-container"
      id = id.replace("link", "");
        // Scroll
      $('html,body').animate({
          scrollTop: $("#"+id).offset().top},
          'slow');
},

scrollDown : function(){


var id = "smart-search-modal-outlet"
    id = id.replace("link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');


},

loginPage : function (uname, pass, url){
  // alert("LoginCheck")
// alert(uname)


  var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
        $("#login-email").val("venkybb@gmail.com");
        $("#login-password").val("prodex123");
        $(".login-form").submit();
      });
    };
    document.body.appendChild(script);
},
// })();

public_profile : function (){

  var script = document.createElement("script");

    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";

    script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
        // setTimeout(function() {
  //       $("#body").find(".topcard-footer-actions").children("li").each(function(index, element) {
  //      if($(this).hasClass("public-profile searchable"))
  //      {
  //      var url = $(this).find("a");
  //     // alert($(url).html());
  //     $(url)[0].click().delay(2000);
  //     // $(url).simulate('click');
  //      }
  //  });

 // },2000);
      // $(loginTxt).trigger( "click" );
      // alert(1)

      // setTimeout(function() {
    $("li.public-profile a").each(function() {

        var url = $(this).attr("href");
      //  window.navigate(url)
      //  window.location = url
      //  window.navigator.userAgent = "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36";
       window.location.href = url;

      // $(location).attr('href',url);
    });

// },200);

      });
    };
    document.body.appendChild(script);
},

search_visit_flag : function (database){
var recordArray = []
  var script = document.createElement("script");
  // <script>window.$ = window.jQuery = require('./jquery-3.0.0.min.js');</script>
    script.src = require('./jquery-3.2.1.min.js');
    //  script.onload = script.onreadystatechange = function() {
      $(document).ready(function() {
// var aElements = $(".search-result__image-wrapper a");
for(var i = 0; i < $(".search-result__image-wrapper a").length; i++) {

  var url = $(".search-result__image-wrapper a:eq(" + i  + ")").attr("href");

    url = url.replace(/\/$/, '');
  var stampUrl = database.includes(url)
  if (stampUrl==true){
alert('url in exe true : '+url);
// search-result__info pt3 pb4 ph0
// search-result__actions
    $(".search-result__info a:eq(" + i  + ")").append('<div style = \"width:76px; min-height:10px; margin:0; padding:5px 0; background-color:#1ab394; color:#ffffff; font-family:arial; font-size:14px; font-weight:bold; position:absolute; right:0px; top:25px; text-align:center;\">Visited</div>');
  }
  else{
$(".search-result__info a:eq(" + i  + ")").append('<div style = \"width:76px; min-height:10px; margin:0; padding:5px 0; background-color:#f8ac59; color:#ffffff; font-family:arial; font-size:14px; font-weight:bold; position:absolute; right:0px; top:25px; text-align:center;\">Skipped</div>');
    continue;
  }

}
      });
    //  };
    document.body.appendChild(script);

},

visit_profile : function(injectStr, proUrl){

var urlStr =  window.location.href

    var n = urlStr.includes(proUrl);

    if (n==false){
alert("No record");

  }
  else{
alert("profile visited")
    var script = document.createElement("script");
  script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
  script.onload = script.onreadystatechange = function() {
    $(document).ready(function() {
      var all = '<div id="pv-visitor-detail" style="margin:0 -8px 0 0; padding:0 0 0 20px; background-color:#e04c4c; position:absolute; bottom:0px; right:-25px; color:#ffffff; width:210px; text-align:left; box-shadow: 0 8px 6px -6px #888888;" onmouseout="document.getElementById(\'pv-popup#$#-wrapper\').style.display = \'none\';" ><i style="width: 0; height: 0; right: 0px; bottom: -8px; display: block; position: absolute; border-style: solid; border-width: 8px 8px 0 0; border-color: #a53838 transparent transparent transparent;"></i><i style="left: 0; width: 0; height: 0; bottom: -1px; display: block; position: absolute; border-style: solid; border-width: 13px 0 13px 17px; border-color: transparent transparent transparent #fff;"></i><span style="font-size:12px;">You visited:</span> <span id="pv-show-link1" onmouseover="document.getElementById(\'pv-popup#$#-wrapper\').style.display = \'block\';" style="display:inline-block; padding:8px 0; color:#ffffff; text-decoration:underline; text-decoration-style:d:dotted; font-family:inherit; font-size:16px; cursor:pointer;"></span></div>'

          $('.pv-top-card-section__body').append(all);
    });
  };
  document.body.appendChild(script);


  }

},

 onloada : function() {

   var script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
      script.onload = script.onreadystatechange = function() {
        $(document).ready(function() {
          $("#lst-ib").val("Hello, World!");
        });
      };
      document.body.appendChild(script);
  }


}
