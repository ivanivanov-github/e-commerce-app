import httpService from "./http.service";

class ProductFormService {
  constructor() {
    this.httpService = httpService;
  }

  async submitForm(productInfos) {
    const product = {
      nom: productInfos.nom,
      src: "",
      compagnieRetailer: productInfos.compagnieRetailer,
      categorie: productInfos.categorie,
      img: await this.getImageFile(productInfos.img),
      prix: productInfos.prix,
      rating: productInfos.rating,
      comments: [],
    };

    this.httpService.addNewProduct(product);
  }

  async getImageFile(file) {
    const image = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

    return image;
  }
}

const productFormService = new ProductFormService();
export default productFormService;
