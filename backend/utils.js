import jwt from 'jsonwebtoken';
import Category from './models/categoryModel.js';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
      expiresIn: '30d',
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'somethingsecret',
      (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    res.status(401).send({ message: 'No Token' });
  }
};
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};
export const isSeller = (req, res, next) => {
  if (req.user && req.user.isSeller) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Seller Token' });
  }
};
export const isSellerOrAdmin = (req, res, next) => {
  if (req.user && (req.user.isSeller || req.user.isAdmin)) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin/Seller Token' });
  }
};

export function containsObjectIndex(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
    if (list[i].product == obj.product) {
      return i;
    }
  }

  return -1;
}

export function getImageName(initialIndex, str) {
  var res = str.substr(initialIndex); // Remove first letter on the image name
  var final = res.split(".")[0]; // Remove image file extension ('.png', '.jpg', ...)
  var name = final.replace(/\-/g, ' ').replace(/\_/g, ' / '); // Replace '-' with space and capitalise it
  return name.toUpperCase(); // Final product name from image
}

export async function getCategoryId(str) {
  /* var cat = str; str.split("-")[0]; */
  var category = await Category.findOne({ name: { $regex: str, $options: 'i' } }); // get category with name containing the str
  // console.log(category.name);
  // console.log(category, str);
  return category._id;
};

export function getDataFromSpreadSheet() {
  const result = excelToJson({
    source: fs.readFileSync('SOME-EXCEL-FILE.xlsx') // fs.readFileSync return a Buffer
  });
}