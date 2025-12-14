<?php

if (isset($_GET["n1"]) && isset($_GET["n2"]) && isset($_GET["n3"])) {
    $n1 = $_GET["n1"];
    $n2 = $_GET["n2"];
    $n3 = $_GET["n3"];

    $avg = ($n1 + $n2 + $n3) / 3;
    echo "میانگین: $avg<br><br>";
}

if (isset($_GET["n4"])) {
    $n4 = $_GET["n4"];

    if ($n4 > 0) {
        echo "مثبت<br><br>";
    } else {
        echo "منفی<br><br>";
    }
}

if (isset($_GET["n5"])) {
    $n5 = $_GET["n5"];

    if ($n5 % 2 == 0) {
        echo "زوج<br><br>";
    } else {
        echo "فرد<br><br>";
    }
}

if (isset($_GET["n6"]) && isset($_GET["n7"])) {
    $a = $_GET["n6"];
    $b = $_GET["n7"];

    $temp = $a;
    $a = $b;
    $b = $temp;

    echo "first: $a<br>";
    echo "second: $b<br><br>";
}

if (isset($_GET["n8"])) {
    $n8 = $_GET["n8"];
    $rev = strrev($n8);

    echo "برعکس: $rev<br><br>";
}

if (isset($_GET["n9"])) {
    $n9 = $_GET["n9"];
    $digits = str_split($n9);
    
    $sum = 0;
    foreach ($digits as $d) {
        $sum = $sum + $d;
    }

    echo "جمع ارقام: $sum<br><br>";
}

?>

