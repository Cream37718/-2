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

//ถ้ามีการใส่ไฟล์รูปมาจะทำการลบรูปเดิมออกก่อน
if ($_FILES["filename"]["name"] != "") {

    $file_surname = explode(".", $_FILES["filename"]["name"]);
    $img_filename = $pid . "." . $file_surname['1'];

    $sqlfilename = "SELECT * FROM product WHERE p_id = '$pid'";
    $resultfilename = mysqli_query($conn, $sqlfilename);
    $rowfilename = mysqli_fetch_assoc($resultfilename);
    $filename = "product_images/" . $rowfilename["p_image"];
    $delete_image_done = unlink($filename); //ลบรูป


    if (move_uploaded_file($_FILES["filename"]["tmp_name"], "product_images/" . $img_filename)) {

        $sql = "UPDATE product SET p_name='$pname',p_detail='$pdetail',p_price='$pprice',p_image='$img_filename' WHERE p_id='$pid'";
        mysqli_query($conn, $sql);
        mysqli_close($conn);
    ?>
        <script>
            alert("แก้ไขข้อมูลสำเร็จ")
            window.open("product_list_for_admin.php", "_self")
        </script>
    <?php
    } else {
    ?>
        <script>
            alert("ไม่สามารถแก้ไขข้อมูลได้")
            window.open("product_list_for_admin.php", "_self")
        </script>
    <?php
    }
} else {
    $sql = "UPDATE product SET p_name='$pname',p_detail='$pdetail',p_price='$pprice' WHERE p_id='$pid'";
    if (mysqli_query($conn, $sql)) {
        mysqli_close($conn);
    ?>
        <script>
            alert("แก้ไขข้อมูลสำเร็จ")
            window.open("product_list_for_admin.php", "_self")
        </script>
    <?php
    } else {
    ?>
        <script>
            alert("ไม่สามารถแก้ไขข้อมูลได้")
            window.open("product_list_for_admin.php", "_self")
        </script>
<?php
    }
}
?>