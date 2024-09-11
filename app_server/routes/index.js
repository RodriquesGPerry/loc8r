var express = require('express');
var router = express.Router();
import ctrlMain from '../controllers/main';

/* GET home page. */
/********Controller and route unseperated *****/
// router.get('/', (req, res, next) => {
//   res.render('index', { title: 'Express' });
// });

router.get('/', ctrlMain.index);
module.exports = router;
