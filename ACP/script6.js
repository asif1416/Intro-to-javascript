function myFunction() {
    var demo = document.getElementById("demo");
    var firstChildValue = demo.firstChild.nodeValue;
    var childNodeValue = demo.childNodes[0].nodeValue;
  
    document.getElementById("result").innerHTML = firstChildValue;
    document.getElementById("result1").innerHTML = childNodeValue;
  }
  