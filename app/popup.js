"use strict";

window.onload = function()
{
    $("smile").each(function(i, element) {
        // Bind "smile" elements
        $(element).click(function(ev) {
            var el = $(this);
            var content = el.html();
            
            copyContentToClipboard( content );            
        });
    });
    
    $("group").each(function(i, element) {
       var el = $(this);
       el.before($("<div class='title'>" + el.data('title') + "</div>")); 
    });    
};

function copyContentToClipboard( text )
{
    
    text = text.replace("&gt;", ">");
    text = text.replace("&lt;", "<");
    
    var container = document.createElement("textarea");
    
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "2em";
    container.style.height = "2em";
    
    container.style.padding = "0";
    
    container.style.border = "none";
    container.style.outline = "none";
    container.style.boxShadow = "none";
    
    container.value = text;
    
    document.body.appendChild( container );
    
    container.select();
    
    try {
        var success = document.execCommand("copy");
        flashSuccess();
    } catch( ex ) {
        console.error("Error", ex);
    }
    
    document.body.removeChild( container );
}

function flashSuccess()
{
    $("body").addClass("success");
    setTimeout(function(){
        $("body").removeClass("success");
    },150);
}
