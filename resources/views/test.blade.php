<!DOCTYPE html>
<html>
  <head>
  <script>
    var request = new XMLHttpRequest();
 
    request.open('GET', 'http://localhost:8000/api/edit_spot/3', true);
    request.responseType = 'json';
 
    request.onload = function () {
      var data = this.response;
      console.log(data);
    };
 
    request.send();
  </script>
  </head>
  <body>
  </body>
</html>