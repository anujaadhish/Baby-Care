const express = require("express");
const Babyrouter = express.Router();
const baby = require("../model/babySchema");
const multer = require("multer");
const mongoose = require("mongoose");
const checkAuth = require("../middlewares/checkAuth");
const registerDB = require("../model/registerSchema");
const loginDB = require("../model/loginSchema");
const cart = require("../model/cartSchema");
const wishlist = require("../model/wishlistSchema");
const cartSchema = require("../model/cartSchema");
// const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Babycare",
  },
});
const upload = multer({ storage: storage });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../frontend/public/images/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({ storage, fileFilter });

// Babyrouter.post("/add-babyproducts", (req, res) => {
// Babyrouter.post("/add-babyproducts", upload.single("image"), (req, res) => {
//   const Data = new baby({
//     productName: req.body.productName,
//     category: req.body.category,
//     brand: req.body.brand,
//     price: req.body.price,
//     // image: req.file.filename,
//     image: req.file ? req.file.path : null,
//   });
//   Data.save()
//     .then((Data) => {
//       return res.status(201).json({
//         success: true,
//         error: false,
//         data: Data,
//       });
//     })
//     .catch((error) => {
//       return res.status(400).json({
//         success: false,
//         error: true,
//         message: "Data not Added",
//       });
//     });
// });

Babyrouter.post(
  "/add-babyproducts",
  upload.single("image"),
  async (req, res) => {
    try {
      const Data = {
        productName: req.body.productName,
        category: req.body.category,
        brand: req.body.brand,
        price: req.body.price,
        // image: req.file.filename,
        image: req.file ? req.file.path : null,
      };
      const result = await baby(Data).save();
      if (result) {
        return res.status(201).json({
          success: true,
          error: false,
          data: Data,
        });
      } else {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Data not Added",
        });
      }
    } catch (error) {
      return res.status(501).json({
        success: false,
        error: true,
        message: "Data not Added",
        errorMessage: error.message,
      });
    }
  }
);

Babyrouter.delete("/delete-babyproducts/:id", (req, res) => {
  baby
    .deleteOne({
      _id: req.params.id,
    })
    .then((data) => {
      res.send({ data });
      console.log("deleted successfully");
    })
    .catch((error) => {
      console.log(error);
    });
});

Babyrouter.put(
  "/update-babyproducts/:id",
  upload.single("image"),
  (req, res) => {
    baby
      .findOne({
        _id: req.params.id,
      })
      .then((data) => {
        (data.category = req.body.category),
          (data.brand = req.body.brand),
          (data.productName = req.body.productName),
          (data.price = req.body.price),
          (data.quantity = req.body.quantity);
        // data.image = req.file.filename;
        data.image = req.file ? req.file.path : null;

        data
          .save()
          .then((data) => {
            return res.status(201).json({
              success: true,
              error: false,
              data: data,
            });
          })
          .catch((error) => {
            return res.status(400).json({
              success: false,
              error: true,
              message: "Data not updated",
            });
          });
      })
      .catch((error) => {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Data not updated ,error of id",
        });
      });
  }
);
Babyrouter.put("/update-profile/:id", (req, res) => {
  registerDB
    .findOne({
      login_id: req.params.id,
    })

    .then((data) => {
      (data.name = req.body.name),
        (data.email = req.body.email),
        (data.phone = req.body.phone);
      // console.log(data)

      data
        .save()
        .then((data) => {
          return res.status(201).json({
            success: true,
            error: false,
            data: data,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Profile is  not updated",
          });
        });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        errorMessage: error.message,
        message: "Profile is not updated ,error",
      });
    });
});

Babyrouter.get("/view-singlebabyproducts/:id", (req, res) => {
  baby
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      return res.status(201).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Data single products cant' be viewed",
      });
    });
});
Babyrouter.get("/view-babyproducts", async (req, res) => {
  try {
    const products = await baby.find();
    return res.status(201).json({
      success: true,
      error: false,
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Data can't be viewed",
    });
  }

  // baby
  //   .find()
  //   .then((data) => {
  //     return res.status(201).json({
  //       success: true,
  //       error: false,
  //       data: data,
  //     });
  //   })
  //   .catch((error) => {
  //     return res.status(400).json({
  //       success: false,
  //       error: true,
  //       message: "Data can't be viewed",
  //     });
  //   });
});
Babyrouter.get("/admin", checkAuth, (req, res) => {
  // console.log(req.userData);
  return res.status(201).json({
    success: true,
    error: false,
    data: req.userData,
  });
});

Babyrouter.get("/profile", checkAuth, (req, res) => {
  loginDB
    .aggregate([
      {
        $lookup: {
          from: "register_tbs",
          localField: "_id",
          foreignField: "login_id",
          as: "results",
        },
      },
      {
        $unwind: "$results",
      },
      {
        $match: {
          _id: new mongoose.Types.ObjectId(req.userData.userId),
        },
      },
      {
        $group: {
          _id: "$_id",
          name: { $first: "$results.name" },
          phone: { $first: "$results.phone" },
          email: { $first: "$results.email" },
          username: { $first: "$username" },
          password: { $first: "$password" },
        },
      },
    ])
    .then((data) => {
      return res.status(201).json({
        success: true,
        error: false,
        data: data[0],
      });
    });
});
Babyrouter.get("/cart", checkAuth, (req, res) => {
  // console.log(req.userData);
  cart
    .aggregate([
      {
        $match: {
          username: req.userData.userName,
        },
      },
      {
        $addFields: {
          subtotal: { $multiply: ["$price", "$quantity"] },
        },
      },
    ])

    .then((data) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "cart can't be viewed",
      });
    });
});

Babyrouter.post("/add-cart", checkAuth, async (req, res) => {
  // const {productName}=req.body
  try {
    const count = await cartSchema.countDocuments({});

    if (count === 0) {
      const Data = new cart({
        category: req.body.category,
        brand: req.body.brand,
        productName: req.body.productName,
        price: req.body.price,
        // image: req.file.filename,
        quantity: req.body.quantity,
        image: req.body.image,
        // image: req.file? req.file.path :null,
        username: req.userData.userName,
        subtotal: req.body.subtotal,
      });

      const newData = new cartSchema(Data);
      const savedData = await newData.save();
      return res.status(201).json({
        success: true,
        error: false,
        data: savedData,
      });
    } else {
      const existingproduct = await cartSchema.findOne({
        productName: req.body.productName,
      });
      if (existingproduct) {
        const quantity = existingproduct.quantity;
        const updatedquantity = quantity + 1;

        const updatedData = await cartSchema.updateOne(
          { _id: existingproduct._id },
          { $set: { quantity: updatedquantity } }
        );
        return res.status(201).json({
          success: true,
          error: false,
          data: updatedData,
          message: "Incremented existing product",
        });
      } else {
        const data = {
          category: req.body.category,
          brand: req.body.brand,
          productName: req.body.productName,
          price: req.body.price,
          // image: req.file.filename,
          quantity: req.body.quantity,
          image: req.body.image,
          // image: req.file? req.file.path :null,
          username: req.userData.userName,
          // subtotal:req.body.subtotal
        };
        const newData = new cartSchema(data);
        const savedData = await newData.save();
        return res.status(201).json({
          success: true,
          error: false,
          data: savedData,
        });
      }
    }
  } catch (error) {
    console.error("Error occured", error);
    return res.status(500).json({ message: "internal server error" });
  }
});
Babyrouter.delete("/delete-cart/:id", (req, res) => {
  cart
    .deleteOne({
      _id: req.params.id,
    })
    .then((data) => {
      return res.status(201).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "item not deleted",
      });
    });
});

Babyrouter.get("/wishlist", checkAuth, (req, res) => {
  wishlist
    .aggregate([
      {
        $match: {
          username: req.userData.userName,
        },
      },
    ])
    .then((data) => {
      return res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    });
});
Babyrouter.post("/add-wishlist", checkAuth, (req, res) => {
  const Data = new wishlist({
    category: req.body.category,
    brand: req.body.brand,
    productName: req.body.productName,
    price: req.body.price,
    image: req.body.image,
    // image: req.file? req.file.path :null,
    username: req.userData.userName,
  });
  Data.save()
    .then((Data) => {
      return res.status(201).json({
        success: true,
        error: false,
        data: Data,
      });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "item not added to wishlist",
      });
    });
});

// Babyrouter.put("/quantityincrement/:id",(req,res)=>{
//   cart.updateOne({
//     _id:req.params.id
//   },{
//     $inc:{quantity: 1}
//   })
//   .then((data) => {
//     return res.status(201).json({
//       success: true,
//       error: false,
//       data: data,
//     });
//   })
//   .catch((error) => {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: "Quantity couldn't increase",
//     });
//   });

// })
// Babyrouter.put("/quantitydecrement/:id",(req,res)=>{
//   cart.updateOne({
//     _id:req.params.id
//   },{
//     $inc:{quantity:-1}
//   })
//   .then((Data) => {
//     return res.status(201).json({
//       success: true,
//       error: false,
//       data: Data,
//     });
//   })
//   .catch((error) => {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: "Quantity couldn't decrease",
//     });
//   });

// })

Babyrouter.put("/quantityincrement/:id", (req, res) => {
  cart
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      console.log(data);
      const quantity = data.quantity;
      console.log(quantity);
      const increment = quantity + 1;
      console.log(increment);

      cart
        .updateOne(
          {
            _id: data.id,
          },
          {
            $set: {
              quantity: increment,
            },
          }
        )
        .then((Data) => {
          return res.status(201).json({
            success: true,
            error: false,
            data: Data,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Quantity couldn't increase",
          });
        });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Quantity couldn't ",
      });
    });
});

Babyrouter.put("/quantitydecrement/:id", (req, res) => {
  cart
    .findOne({
      _id: req.params.id,
    })
    .then((data) => {
      console.log(data);
      const quantity = data.quantity; //quantity
      console.log(quantity);
      const decrement = quantity - 1; //updated quantity
      if (decrement == 0) {
        cart
          .deleteOne({
            _id: req.params.id,
          })
          .then((response) => {
            return res.status(201).json({
              success: true,
              error: false,
              data: response,
            });
          })
          .catch((error) => {
            return res.status(400).json({
              success: false,
              error: true,
              message: "Quantity can't be zero",
            });
          });
      }

      console.log(decrement);

      cart
        .updateOne(
          {
            _id: data.id,
          },
          {
            $set: {
              quantity: decrement,
            },
          }
        )
        .then((Data) => {
          return res.status(201).json({
            success: true,
            error: false,
            data: Data,
          });
        })
        .catch((error) => {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Quantity couldn't decrease",
          });
        });
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Quantity couldn't ",
      });
    });
});

// Babyrouter.put("/subtotal",(req,res)=>{
//   cart.find()
//   .then((Data) => {
//     const newsubtotal=Data.reduce((total,item)=>total+item.price*item.quantity,0)
// console.log(newsubtotal);
//     return res.status(201).json({
//       success: true,
//       error: false,
//       data: Data,
//     });
//   })
//   .catch((error) => {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: "couldn't show subtotal",
//     });
//   });
// })

module.exports = Babyrouter;
