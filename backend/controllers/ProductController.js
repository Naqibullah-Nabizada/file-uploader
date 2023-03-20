import Product from "../models/ProductModel.js";

import path from "path";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (error) {
    console.log(error)
  }
}


export const saveProduct = (req, res) => {

  if (req.files == null) {
    return res.json('please send an image')
  }
  console.log(req.body.file)
  
  const name = req.body.name;
  const file = req.files.image; 
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg'];

  if (!allowedType.includes(ext.toLocaleLowerCase())) {
    return res.json({ msg: 'image format is not valid' });
  }

  if (fileSize > 5000000) {
    return res.json({ msg: "The image size must be less or than 5MB" });
  }

  file.mv(`./public/images/${fileName}`, async (err) => {
    // if (err) return res.json({ msg: err.message });

    try {
      await Product.create({ name: name, image: fileName, url: url });
      res.json({ msg: "product created successfully" });
    } catch (error) {
      // console.log(error);
    }
  })
}
