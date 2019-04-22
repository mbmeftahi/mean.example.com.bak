var Articles = require('../../models/articles');

router.get('/', function(req, res, next) {
  Articles.find({},function(err, articles){
    if(err){
     return res.json({'success':false, 'error': err});
   }
    return res.json({'success':true, 'users': users});
  });
});