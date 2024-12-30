import mongoose, { Types } from "mongoose";

export interface Product {
  name: string;
  description: string;
  image_url: string;
  price: number;
  category: string;
  _id?: number;
  release_year: number;
  size: number;
  rating: number;
  is_android_app: number;
  is_ios_app: number;
}

const Schema = mongoose.Schema;

const ProductsSchema = new Schema<Product>(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    category: {
      type: Schema.Types.String,
      required: true,
    },
    release_year: {
      type: Schema.Types.Number,
      required: true,
    },
    size: {
      type: Schema.Types.Number,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    rating: {
      type: Schema.Types.Number,
      required: true,
    },
    image_url: {
      type: Schema.Types.String,
      required: true,
    },
    is_android_app: {
      type: Schema.Types.Number,
      required: true,
    },
    is_ios_app: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductsModel = mongoose.model("Products", ProductsSchema);

export default ProductsModel;



