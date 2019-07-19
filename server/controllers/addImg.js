require('dotenv').config();
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const {AWS_ACCESSKEYID, AWS_SECRETACCESSKEY, AWS_REGION, AWS_BUCKET} = process.env;

aws.config.update({
   secretAccessKey: AWS_SECRETACCESSKEY,
   accessKeyId: AWS_ACCESSKEYID,
   region: AWS_REGION
})

const s3 = new aws.S3( );

const fileFilter = (req, file, cb) => {
   if (
      file.mimetype === 'image/jpeg' || 
      file.mimetype === 'image/jpg' || 
      file.mimetype === 'image/png'
      ) {
      cb(null, true)
   } else {
      cb(new Error('Files must be in format jpg, jpeg, or png'), false);
   };
}
 
const singleUpload = multer({
   fileFilter,
   limits: { fileSize: 4000000 },
   storage: multerS3({
      s3,
      bucket: AWS_BUCKET,
      acl: 'public-read',
      metadata: function (req, file, cb) {
         cb(null, {
            fieldName: 'TESTING_META_DATA!'
            // fieldName: 
            // fieldName: 
         });
      },
      key: function (req, file, cb) {
         // cb(null, Date.now().toString());
         cb(null, path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now().toString() + path.extname(file.originalname));
      }
   })
}).single('image')

const imgAdd = function(req, res) {

   singleUpload(req, res, function(err) { 

      if (err) {
         console.log(`File Upload Error: ${err.message}`);
         return res.status(422).send(err.message);
      } else {
         return res.status(201).json({
            'img_aws_url': req.file.location,
            'img_aws_key': req.file.key
         });
      };
   });
};

module.exports = imgAdd;