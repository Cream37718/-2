<?php
session_start();
?>
<!doctype html>
<html lang="en">

<head>
    <?php
    $page = "admin";
    include "htmlhead.php";
    ?>

    <!-- link for datatable -->
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.2/css/dataTables.dataTables.css" />

    <!-- Java Script for datatable -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/2.0.2/js/dataTables.js"></script>
    <script>
        $(document).ready(function() {
            $('#producttable').DataTable();
        });
    </script>

</head>

<body>
    <div class="container bg-light p-2 my-2">

        <?php
        include "pageheader.php";
        include "navbar.php";
        ?>

        <?php
        if ($_SESSION['admin_id'] == "") {
        ?>
            <script>
                alert("กรุณา Login เข้าสู่ระบบ")
                window.open("login.php", "_self")
            </script>
        <?php
        } else {
            require_once "connect_db.php";
            $sql = "SELECT * FROM product";
            $result = mysqli_query($conn, $sql);
        ?>

            <div class="userinfo round-3">
                <strong>ผู้ใช้งาน : </strong><?= $_SESSION["admin_name"]; ?>
            </div>
            <h4 style="text-align: center;">รายการสินค้า</h4>
            <hr>

            <div class="table-responsive px-5">
                <table id="producttable" class="table table-striped">
                    <thead>
                        <tr>

                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>ราคาสินค้า</th>
                            <th>รูปสินค้า</th>
                            <th>แก้ไข</th>
                            <th>ลบ</th>
                        </tr>
                    </thead>
                    <tbody>

                        <?php
                        while ($row = mysqli_fetch_assoc($result)) {
                        ?>
                            <tr>

                                <td><?= $row["p_id"]; ?></td>
                                <td><?= $row["p_name"]; ?></td>
                                <td><?= $row["p_price"]; ?></td>
                                <td>
                                    <img src="<?php echo "product_images/" . $row["p_image"]; ?>" class="img-thumbnail" width="50px" alt="product image">
                                </td>
                                <td><a href="product_edit_form.php?pid=<?= $row["p_id"]; ?>">แก้ไข</a></td>
                                <td><a href="product_delete_save.php?pid=<?= $row["p_id"]; ?>" onclick="return confirm('คุณต้องการลบข้อมูลใช่หรือไม่?');">ลบ</a></td>

                            </tr>
                    <?php
                        }
                        mysqli_close($conn);
                    }
                    ?>
                    </tbody>
                </table>

            </div>
            <br>
            <button type="button" class="btn btn-primary d-block m-auto" onclick="window.location.href='product_add_form.php'">เพิ่มสินค้า</button>
            <br>


            <?php
            include("footer.php");
            ?>

    </div>

</body>

</html>