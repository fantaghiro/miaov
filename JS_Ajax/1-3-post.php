<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);
//$_REQUEST
$username = $_POST['username'];
$age = $_POST['age'];

echo "你的名字：{$username}，年龄：{$age}";