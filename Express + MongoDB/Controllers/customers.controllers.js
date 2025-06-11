const Customer = require('../Models/Customers.js')

exports.index = (req, res) => {
    res.send('<h1>Customer Apps</h1><hr/><a href="/api/customers">รายชื่อลูกค้าทั้งหมด</a>')
}

exports.create = (req, res) => {
    const c = new Customer(req.body);

    c.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            return res.status(500).json({
                msg: "ไม่สามารถเพิ่มข้อมูลได้เนื่องจาก"+err.message
            })
        })
}
exports.findAll = (req, res) => {
    Customer.find()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            })
        })
}

exports.findById = (req, res) => {
    Customer.findById(req.params.customerId)
        .then(data => {
            if(!data){
                return res.status(404).json({
                    msg:"ไม่พบรหัสลูกค้า" + req.params.customerId
                })
            }
            res.json(data)
        }).catch(err =>{
            return res.status(500).json({
                msg:"เกิดข้อผิดพลาดเนื่องจาก :"+err.message
            })
        })
}

exports.update = (req, res) => {
    Customer.findByIdAndUpdate(req.params.customerId, { $set: req.body }, { new: true })
        .then(data => {
            if(!data){
                return res.status(404).json({
                    msg:"ไม่พบรหัสลูกค้า"+req.params.customerId
                })
            }
            res.json(data)
        }).catch(err => {
            return res.status(500).json({
                msg:"ไม่สามารถอัพเดตข้อมูลลูกค้าได้เนื่องจาก :"+err.message
            })
        })
}

exports.delete =(req, res) =>{
    Customer.findByIdAndDelete(req.params.customerId)
        .then(data => {
            if(!data){
                return res.status(404).json({
                    msg:"ไม่พบรหัสลูกค้า"+req.params.customerId
                })
            }
            res.json({msg:"ลบข้อมูลเรียบร้อยเเล้ว"})
        }).catch(err => {
            return res.status(500).json({
                msg:"ไม่สามารถลบข้อมูลลูกค้าได้ เนื่องจาก:"+ err.message
            })
        })
} 


