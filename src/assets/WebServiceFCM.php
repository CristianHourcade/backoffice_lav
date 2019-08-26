<?php

$token = $_GET["token"];
$title = $_GET["title"];
$body = $_GET["body"];
$icon = $_GET["icon"];

$url = 'https://fcm.googleapis.com/fcm/send';
$data = array('key1' => 'value1', 'key2' => 'value2');

$arrNotificationMessage =   array(
  'title'=>$title,
  'text'=>$body,
  'image'=>$icon,
  'sound' => "mySound",
  'priority'=>"high"                              
);

$extraData  =   array(
'any_extra_data'    =>"any data"
);
$deviceToken    =   $token;
$ch = curl_init("https://fcm.googleapis.com/fcm/send");
$header=array('Content-Type: application/json',
"Authorization: key=AAAAXYE7yJI:APA91bEcmekxjiKIfx-pHJsNoE1_43Lkl1D0Xdp6KK-nDPc_gJeF-ua28xNXtUqNotCrC9Uf2FWoW10Vs5LtNMjUB9pSFPK4j8U3s6LCKJIrJR-MkeOUGvVZ5CYRiL8oLjQxm4J2yCBY");
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );

curl_setopt($ch, CURLOPT_POST, 0);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{ \"notification\": ".json_encode($arrNotificationMessage).", \"data\":" . json_encode($extraData) . ", \"to\" : ".json_encode($deviceToken)."}");

$result =   curl_exec($ch);
curl_close($ch);
print_r($result);
if ($result === FALSE) {
//log_message("DEBUG", 'Curl failed: ' . curl_error($ch));
}
else{
$result =   json_decode($result);
if($result->success ===1){
return true;
}
else{
return false;
}
}



?>