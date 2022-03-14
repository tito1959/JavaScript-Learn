<?php

//  print_r($_FILES['files']);

if(isset($_FILES['files'])){

  $name = $_FILES['files']['name'];
  $file = $_FILES['files']['tmp_name'];
  $error = $_FILES['files']['error'];
  $route = "./files/$name";
  $upload = move_uploaded_file($file, $route);
  // var_dump($upload);

   if($upload){

     $response = array(
       "error" => false,
       "status" => http_response_code(200),
       "statusText" => "Archivo $name subido con éxito",
       "files" => $_FILES['files']
     );
   }else{

     $response = array(
       "error" => true,
       "status" => http_response_code(400),
       "statusText" => "Error al cargar el archivo: $name",
       "files" => $_FILES['files']
     );
   }
   echo json_encode($response);
 }

?>