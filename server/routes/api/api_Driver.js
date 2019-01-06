const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


// load model
const User = require('../../models/user');
const AccountDriver = require('../../models/accountDriver');

// test
router.get('/', (req, res) => {
    res.json({msg: 'success'})
});

// route    POST localhost:4000/api/driver/register
// desc     register new driver
// access   PUBLIC
router.post('/register', (req, res) => {
    const {username, password, fullname, phone, birthday} = req.body;
    User.findOne({username: username})
        .then(accountdriver => {
            if (accountdriver) {
                res.json({msg: "username is does exits"});
            } else {
                return User.findOne({phone: phone});
            }
        })
        .then(phone => {
            if (phone) {
                res.json({msg: "Phone is does exits "})
            }
            else {
                const NewaccountDriver = new User({
                    username, password, fullname, birthday, accountType: 2, isActive: true, phone: req.body.phone
                });
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) return console.log(err);
                    bcrypt.hash(NewaccountDriver.password, salt, (err, hash) => {
                        if (err) return console.log(err);
                        NewaccountDriver.password = hash;
                        NewaccountDriver.save()
                            .then(accountdriver => {
                                res.json({accountdriver});
                            })
                    })
                })
            }
        })
        .catch(err => console.log(err));
});


router.get('/detail/:id', (req, res) => {
    const errors = {};
    const id = req.params.id;

    Account.findById(id)
        .then(user => {
            AccountDriver.findOne({accountID: user._id})
                .then(accountdriver => {
                    if (!accountdriver) {
                        errors.noProfile = 'There is no profile for this driver'
                        return res.status(404).json(errors);
                    } else {
                        res.json(accountdriver);
                    }
                })
        })

})

// route    POST localhost:4000/api/driver/detail
// desc     register new account
// access   PUBLIC

router.post('/detail/register', passport.authenticate('jwt', {session: false}), (req, res) => {
    const id = req.user.id;
    const {birthday, address, passportID, company, model, carInfo, manufacturingYear, licensePlate, numberOfSeats} = req.body;
    AccountDriver.findOne({accountID: id})
        .then(account => {
            if (account) {
                return res.json({msg: "Accounr da co"})
            } else {
                let carInfo = {};
                carInfo = {...carInfo, model, manufacturingYear, licensePlate, numberOfSeats}
                const newDriver = new AccountDriver({
                    accountID: id,
                    birthday, address, passportID, company, registerDate: new Date().getTime(),
                    numberOfTrips: 0,
                    carInfo
                })
                newDriver.save()
                    .then(driver => res.json({driver}))
                    .catch(err => console.log(err));
            }
        })
});


module.exports = router;