const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dbConfig = require('./Config/MongoDB.config')
const Customer = require('./Models/Customers')

const cors = require('cors')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(() => {
        Customer.deleteMany({})
            .then(() => {
                console.log('ลบคอเล็กชัน Customer ออกหมดแล้ว');
                initCustomer();
            })
            .catch(err => {
                console.error('เกิดข้อผิดพลาดขณะลบข้อมูล:', err);
                process.exit();
            });

        app.use(cors());
        require('./Route/Customer.route.js')(app);
        const server = app.listen(3000, () => {
            let port = server.address().port
            console.log("Run at http://localhost:%s", port)
        })

        function initCustomer() {
            let data = [
                {
                    CustomerID: 1001,
                    FullName: "พนิดา วัยเจริญ",
                    Address: "บ้านโป่ง"

                },
                {
                    CustomerID: 1002,
                    FullName: "เรืองยศ วัยเจริญ",
                    Address: "เบิกไพร"
                },
                {
                    CustomerID: 1003,
                    FullName: "กัญญณัช โชติธนชนาเมธ",
                    Address: "ด่านมะขามเตี้ย"
                },
                {
                    CustomerID: 1004,
                    FullName: "ยศวิน วัยเจริญ",
                    Address: "บางเเพ"
                }
            ]

            for (let i = 0; i < data.length; i++) {
                const c = new Customer(data[i]);
                c.save()
            }
            console.log("สร้างข้อมูลลูกค้าตัวอย่างเรียบร้อยเเล้ว")
        }
    })
