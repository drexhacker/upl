import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import Axios from 'axios';
require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("../frontend/src/routes.js").default;
  const Sitemap = require("react-router-sitemap").default;
  
  async function generateSitemap() {
    try {
        const projectIds = await Axios.get('http://localhost:5555/api/projects/ids');
        const productIds = await Axios.get('http://localhost:5555/api/products/ids');
        const categoryIds = await Axios.get('http://localhost:5555/api/categories/ids');
        // console.log(projectIds);
        const paramsConfig = {
          "/projects/:id": projectIds.data,
          "/product/:id": productIds.data,
          "/search/category/:category": categoryIds.data
        };
      return (
        new Sitemap(router)
            .applyParams(paramsConfig)
            .build("https://www.uniqueplumbersug.com")
            .save("frontend/public/sitemap.xml")
      );
  } catch (e) {
      console.log(e);
  }
}
  
  generateSitemap();