<!doctype html>
<html lang="en">

<head>
    <?php
    $page = "product_list_for_customer";
    include "htmlhead.php";
    ?>
</head>

<body>
    <div class="container bg-light p-2 my-2">
        <?php
        include "pageheader.php";
        include "navbar.php";
        ?>


        <?php
        include "connect_db.php";
        $pid = $_GET['pid'];
        $sql = "SELECT * FROM product WHERE p_id = '$pid'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result)
        ?>

        <h4 style="text-align: center;">รายละเอียดสินค้า</h4>
        <hr>

        <div class="card mx-auto d-block" style="width: 70%; max-width: 300px">
            <img src="<?php echo "product_images/" . $row["p_image"]; ?>" class="card-img-top" alt="product">
            <div class="card-body bg-warning">
                <h5 class="card-title"><?= $row["p_name"]; ?></h5>
                <p class="card-text">รายละเอียด : <?= $row["p_detail"]; ?></p>
                <p class="card-text">ราคา : <?= $row["p_price"]; ?></p>

            </div>
        </div>
        <br>
        <button type="button" class="btn btn-info d-block m-auto" onclick="window.location.href='product_list_for_customer.php'">กลับหน้าเลือกสินค้า</button>

        <br>

        <?php
        include "footer.php";
        ?>

    </div>

    </div>


</body>

</html>