<?php
session_start();

if ($_SESSION['admin_id'] == "") {
?>
    <script>
        alert("กรุณา Login เข้าสู่ระบบ")
        window.open("login.php", "_self")
    </script>
<?php
    exit();
}

$_SESSION["admin_id"] = "";
$_SESSION["admin_name"] = "";

session_write_close();

?>
<script>
    alert("ออกจากระบบเรียบร้อยแล้ว")
    window.open("index.php", "_self")
</script>