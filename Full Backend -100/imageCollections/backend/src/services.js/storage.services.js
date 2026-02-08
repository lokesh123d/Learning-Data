const { ImageKit } = require('@imagekit/nodejs');
const dotenv = require('dotenv');
dotenv.config();

const imageKit = new ImageKit({
  privateKey: process.env.PRIVATE_KEY,
});

async function uploadImage(buffer){
const response = await imageKit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'img.jpg',
    });
    return response;
}

module.exports = {uploadImage};
