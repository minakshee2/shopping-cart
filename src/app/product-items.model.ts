export class Product {
  categoryId: number;
  id: number;
  name: string;
  price: number;
  qtyAvailable?: number;
  qtySelected?:number;
  total?:number;
  imageSource?: string;

  constructor(categoryId:number,id:number,name: string, price: number, qtyAvailable : number,qtySelected: number,total: number, imageSource: string) {
      this.categoryId = categoryId;
      this.id = id;
      this.name = name;
      this.price = price;
      this.qtyAvailable = qtyAvailable;
      this.qtySelected = qtySelected;
      this.total = total;
      this.imageSource = imageSource;
    }
}  