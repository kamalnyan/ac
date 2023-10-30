<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['name'];
    $uid = $_POST['uid'];
    $phone = $_POST['phone'];
    $pphone = $_POST['pphone'];
    $password = $_POST['password'];
    $gender = $_POST['gender'];
   
    $con = new mysqli("localhost", "root", "", "nayan");
    if ($con){
        $sql = "insert into`sig`(name, uid , phone , pphone ,password, gender) 
                values ('$name', '$uid', '$phone', '$pphone', '$password','$gender')";
        $result=mysqli_query($con,$sql);
        if($result){
            echo "thik hai";
        }else{
            die(mysqli_error($con));
        }
    } else {
        die(mysqli_error($con));
    }
}
?>