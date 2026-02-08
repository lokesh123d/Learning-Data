const imageModel = require('../models/image.model.js');

const { uploadImage } = require('../services.js/storage.services.js');




const imageCreate = async (req, res) => {
    const uploadedImage = await uploadImage(req.file.buffer);
    const caption = req.body.caption;
    const newImage = await imageModel.create({
        image: uploadedImage.url,
        caption
    })
    res.status(200).json({ message: "Image Uploaded Successfully", data: newImage });
}



const getImages = async (req, res) => {
    const allImages = await imageModel.find();
    res.status(200).json({ message: "Here is all Images", allImages });
}



const deleteImage = async (req, res) => {
    try {
        const { _id } = req.params;
        console.log(_id);
        const deletedImage = await imageModel.findByIdAndDelete(_id);
        if (!deletedImage) {
            return res.status(404).json({ message: "Image not found" });
        }
        res.status(200).json({ message: "Image Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting image", error: error.message });
    }
}



const updateImage = async (req, res) => {
    try {
        const { _id } = req.params;
        const caption = req.body.caption;
        const updatedImage = await imageModel.findByIdAndUpdate(_id, { caption }, { new: true });
        if (!updatedImage) {
            return res.status(404).json({ message: "Image not found" });
        }
        res.status(200).json({ message: "Image Updated Successfully", data: updatedImage });
    } catch (error) {
        res.status(500).json({ message: "Error updating image", error: error.message });
    }
}



module.exports = { imageCreate, getImages, deleteImage, updateImage };