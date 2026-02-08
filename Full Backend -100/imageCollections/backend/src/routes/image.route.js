const router = require('express').Router();
const multer = require('multer');
 const { imageCreate, getImages, deleteImage, updateImage } = require('../controllers/image.controller.js');


const upload = multer({storage:multer.memoryStorage()});




 router.post('/create', upload.single('image'), imageCreate);
router.get('/all', getImages);
router.delete('/delete/:_id', deleteImage);
router.patch('/update/:_id',updateImage);

module.exports = router;