const express = require('express');
const router = express.Router();
const user = require('../../user.js');
const uuid = require('uuid');

router.get('/', function(req,res){
    res.json(user);
})

router.post('/', function(req,res){
    //console.log('Body:', req.body);
    const newUsers = {
        id: uuid.v4(),
        name : req.body.name,
        email : req.body.email
    }
    if(!newUsers.name || !newUsers.email){
        return res.status(404).json({msg:' Please include a name and email'})
    }
    else{
        user.push(newUsers)
        res.redirect('/')
    }
})

router.get('/:id ', function(req,res){
    let found = user.some(user => user.id == req.params.id);
    if(found){
        res.json(user.filter(user => user.id == req.params.id))
    }
    else{
        res.status(404).json({msg:`No users with the id ${req.params.id}`})
    }
})

// update server
router.put('/:id', function (req, res) {
    let found = user.some(user => user.id == req.params.id);

    if (found) {
        const updUser = req.body;
        user.forEach(user => {
            if (user.id == req.params.id) {
                user.name = updUser ? updUser.name : user.name;
                user.email = updUser ? updUser.email : user.email;

                res.json({ msg: 'User updated', user });
            }
        })
    }
    res.status(404).json({ msg: `No user with the id of ${req.params.id}` })
});

router.delete('/:id', function (req, res) {
    let found = user.some(user => user.id == parseInt(req.params.id));
    if (found) {
        return res.json({
            msg: 'Member deleted',
            users: user.filter(user => user.id !== parseInt(req.params.id))
        })
    }
    res.status(404).json({ msg: `No user with the id of ${req.params.id}` })
})
module.exports = router;