<!doctype html>
<html lang="en">

<head>
    <?php
    $page = "admin";
    include "htmlhead.php";
    ?>
</head>

<body>
    <div class="container bg-light p-2 my-2">
        <?php
        include "pageheader.php";
        include "navbar.php";
        ?>
        <div class="form_panel rounded-3">
            <h4 style="text-align: center;">เข้าสู่ระบบ</h4>
            <hr>
            <form action="checklogin.php" method="POST">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" class="form-control" placeholder="กรุณาใส่ชื่อผู้ใช้" id="username" name="username">
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" name="password">
                </div>
                <br>
                <button type="submit" class="btn btn-danger mybutton">เข้าสู่ระบบ</button>
            </form>

        </div>


        <?php
        include("footer.php");
        ?>

    </div>




</body>

</html>