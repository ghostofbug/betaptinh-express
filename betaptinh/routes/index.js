var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const number1=req.body.number1;
  const number2=req.body.number2;
  const operator=req.body.inlineRadioOptions;
  let result=0;
  switch(operator)
  {
    case "Cộng":
      result=parseFloat(number1)+parseFloat(number2);
      break;

    case "Trừ":
      result=parseFloat(number1)-parseFloat(number2);
      break;

    case "Nhân":
      result=parseFloat(number1)*parseFloat(number2);
      break;

    case "Chia":
      result=parseFloat(number1)/parseFloat(number2);

  }




  res.render('index', { title: 'Express',number1,number2,result,operator});
});

module.exports = router;
