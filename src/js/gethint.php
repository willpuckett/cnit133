<?php
// Array with names
$a[] = "Amanda";
$a[] = "Anna";
$a[] = "Ari";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Cindy";
$a[] = "Dashawn";
$a[] = "Diana";
$a[] = "Dima";
$a[] = "Doris";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Enda";
$a[] = "Eva";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Fiona";
$a[] = "Gina";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Ivan";
$a[] = "Jack";
$a[] = "Jessica";
$a[] = "Johanna";
$a[] = "Kirstin";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Liza";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Qi";
$a[] = "Raquel";
$a[] = "Richard";
$a[] = "Robert";
$a[] = "Sasha";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Vicky";
$a[] = "Violet";
$a[] = "Wayne";
$a[] = "Wenche";
$a[] = "Wendy";
$a[] = "Xan";
$a[] = "Zennia";

// get the q parameter from URL
$q = $_REQUEST["q"];

$hint = "";

// lookup all hints from array if $q is different from "" 
if ($q !== "") {
  $q = strtolower($q);
  $len=strlen($q);
  foreach($a as $name) {
    if (stristr($q, substr($name, 0, $len))) {
      if ($hint === "") {
        $hint = $name;
      } else {
        $hint .= ", $name";
      }
    }
  }
}

// Output "no suggestion" if no hint was found or output correct values 
echo $hint === "" ? "no suggestion" : $hint;
?>