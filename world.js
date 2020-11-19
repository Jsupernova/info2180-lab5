window.onload= function()
{
    loadrequest();
}
function loadrequest()
{
    
   
    document.getElementById("lookup").onclick= function()
    {
        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab5/world.php?";
        
        
        const data = "country=" + document.getElementById("country").value+"&context=";
         httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            {
                if (httpRequest.status === 200) 
                {
                    
                        var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= response;
                    
                    
                 } 
            }
        };

        httpRequest.open('GET', url+data,true);
        event.preventDefault();

        
        httpRequest.send();

    }
    document.getElementById("citylookup").onclick= function()
    {
        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab5/world.php?";
        
        
        const data = "country=" + document.getElementById("country").value+"&context=cities";
         httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE) 
            {
                if (httpRequest.status === 200) 
                {
                    
                        var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= response;
                    
                    
                 } 
            }
        };

        httpRequest.open('GET', url+data,true);
        event.preventDefault();

        
        httpRequest.send();

    }
}