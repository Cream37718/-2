<?php
session_start();

if ($_SESSION['admin_id'] == "") {
?>
    <script>
        alert("กรุณา Login เข้าสู่ระบบ")
        window.open("login.php", "_self")
    </script>
<?php
}

include "connect_db.php";
$pid = $_POST['pid'];
$pname = $_POST['pname'];
$pdetail = $_POST['pdetail'];
$pprice = $_POST['pprice'];

$file_surname = explode(".", $_FILES["filename"]["name"]);
$img_filename = $pid . "." . $file_surname['1'];

$sql = "INSERT INTO
product(p_id,p_name,p_detail,p_price,p_image)
VALUES('$pid','$pname','$pdetail','$pprice','$img_filename')";

if (move_uploaded_file($_FILES["filename"]["tmp_name"], "product_images/" . $img_filename)) {

    mysqli_query($conn, $sql);

?>
    <script>
        alert("เพิ่มข้อมูลสำเร็จ")
        window.open("product_list_for_admin.php", "_self")
    </script>
<?php
} else {
?>
    <script>
        alert("ไม่สามารถบันทึกข้อมูลได้")
        window.open("product_add_form.php", "_self")
    </script>
<?php
}
mysqli_close($conn);
?>