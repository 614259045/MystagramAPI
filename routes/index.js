const dotenv = require('dotenv').config();
const Unsplash = require('unsplash-js').default;
const {toJson} = require('unsplash-js');
const unsplash = new Unsplash({accessKey: process.env.myAccessKey});


const app = express();



//3. Configuration here
//4. add API here

router.post('/api/searchPhotos', (req, res) => {
    let {keyword} = req.body;
    unsplash.search.photos(keyword, 1, 21)
    .then(toJson)
    .then(json => {res.status(200).send(json)})
        .catch((err) => {
            console.log("Error Message -->", err);
            res.status(200).send({"messageError": err})
        });
    //PUT YOUR CODE HERE
});



router.post('/api/searchUser', (req, res) => {
     //PUT YOUR CODE HERE
    let {username} = req.body;
    unsplash.users.profile(username)
        .then(toJson)
        .then(json => {
            res.status(200).send(json)
        })
        .catch((err) => {
            console.log("Error Message -->", err);
            res.status(200).send({"messageError": err})
        });
    
});
module.exports = router;