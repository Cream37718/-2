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

$pid = $_GET['pid'];
$sqlfilename = "SELECT * FROM product WHERE p_id = '$pid'";
$resultfilename = mysqli_query($conn, $sqlfilename);
$rowfilename = mysqli_fetch_assoc($resultfilename);
$filename = "product_images/" . $rowfilename["p_image"];

$sql = "DELETE FROM product WHERE p_id = '$pid'";
$delete_image_done = unlink($filename);

if (mysqli_query($conn, $sql) && $delete_image_done) {

?>
    <script>
        alert("ลบข้อมูลสำเร็จ")
        window.open("product_list_for_admin.php", "_self")
    </script>
<?php
} else {
?>
    <script>
        alert("ไม่สามารถลบข้อมูลได้")
        window.open("product_list_for_admin.php", "_self")
    </script>
<?php
}
?>