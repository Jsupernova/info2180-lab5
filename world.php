<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
if(isset($_GET)){
    $country = $_GET['country'];
$context =$_GET['context'];
 
if($context=="cities"){
   
$stmt = $conn->query("SELECT cities.name, cities.district, cities.population FROM cities JOIN countries ON cities.country_code = countries.code WHERE countries.name LIKE \"%$country%\" ORDER BY countries.name ASC");
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        print($results) ;
 }else{
     $countrieswhere = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
     $whereresults= $countrieswhere->fetchAll(PDO::FETCH_ASSOC);
 }
}
?>

<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state'];?></li>
<?php endforeach; ?>
</ul>
<?php header('Access-Control-Allow-Origin: *');?>