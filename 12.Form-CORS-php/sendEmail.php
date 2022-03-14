<?php

  if(isset($_POST)){
    error_reporting(0);
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    $domain = $_SERVER["HTTP_HOST"]; //Url del sitio actual.

    $to = "sebasti1959@hotmail.com";
    $subject = "contacto desde el formulario del sitio $domain: $subject";
    $message = "
      <p>
        Datos enviados desde el formulario del sitio <b>$domain: $subject</b>
      </p>
      <ul>
        <li>Nombre: <b>$name</b>li>
        <li>Email: <b>$email</b>li>
        <li>Asunto: <b>$subject</b>li>
        <li>Comentarios: <b>$comments</b>li>
      </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n" . "Content-type: text/html;charset=utf-8\r\n" . "From: Envio Automatico No Responder <no-reply@$domain>";

    $send_mail = mail($to, $subject, $essage, $headers);

    if($send_mail){
      $response = [
        "error" => false,
        "message" => "Tus datos han sido enviados.",
      ];
    }else{
      $response = [
        "error" => false,
        "message" => "Error al enviar tus datos intenta nuevamente.",
      ];
    }
    header("Acces-Control-Allow-Origin:*"); //(*) domains whitelist
    header('Content-Type:application/json');
    echo json_encode($response);
    exit;
  }

?>