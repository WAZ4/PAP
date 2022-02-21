<?php
//Var1 = Uploads/posts/idpost/imagem
//formato de dados no servidor
//com o post eu consigo tirar o id da pagina    
// Allowed origins to upload images
$accepted_origins = array("http://localhost:8888");

// Images upload path
$imageFolder = "../uploads/";
$urlPrefix = "http://localhost:8888/PAP/Company/uploads/";

reset($_FILES);
$temp = current($_FILES);
if(is_uploaded_file($temp['tmp_name'])){
    if(isset($_SERVER['HTTP_ORIGIN'])){
        // Same-origin requests won't set an origin. If the origin is set, it must be valid.
        if(in_array($_SERVER['HTTP_ORIGIN'], $accepted_origins)){
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        }else{
            header("HTTP/1.1 403 Origin Denied");
            return;
        }
    }
  
    // Sanitize input
    if(preg_match("/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'])){
        header("HTTP/1.1 400 Invalid file name.");
        return;
    }
  
    // Verify extension
    if(!in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array("gif", "jpg", "png"))){
        header("HTTP/1.1 400 Invalid extension.");
        return;
    }
  
    // Accept upload if there was no origin, or if it is an accepted origin
    $filename = time() . '-' . random_int(1, 9999) . substr($temp["name"], strpos($temp["name"], '.'));
    $filetowrite = $imageFolder . $filename;
    move_uploaded_file($temp['tmp_name'], $filetowrite);
    $imageUrl = $urlPrefix . $filename;
    // Respond to the successful upload with JSON.
    echo json_encode(array("success" => 1, "file" => array("url" => $imageUrl)));
} else {
    // Notify editor that the upload failed
    header("HTTP/1.1 500 Server Error");
}
?>