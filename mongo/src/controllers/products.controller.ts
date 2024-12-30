import { Request, Response } from "express";
import ProductsModel from "../models/products.model";
import * as Yup from 'yup';
import{
  create,findAll,findOne,update,remove
}from "../services/product.service";

interface IPaginationQuery {
  page: number;
  limit: number;
  search?: string;
}


const createValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  category: Yup.string().required(),
  release_year: Yup.number().required(),
  size: Yup.number().required(),
  price: Yup.number().required(),
  rating: Yup.number().required(),
  image_url: Yup.string().required(),
  is_android_app: Yup.number().required().min(1),
  is_ios_app: Yup.number().required().min(1),
});

export default {
  async create(req: Request, res: Response) {
  /**
     #swagger.tags = ['Product']
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/Storeproduct"
      }
     }
     */
    try {
      await createValidationSchema.validate(req.body);
      const result = await ProductsModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        res.status(400).json({
          data: error.errors,
          message: "Failed create product",
        });
        return;
      }
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll(req: Request, res: Response) {
  /**
     #swagger.tags = ['Product']
     */
    try {
      const {
        limit = 10,
        page = 1,
        search = "",
      } = req.query as unknown as IPaginationQuery;

      const query = {};

      if (search) {
        Object.assign(query, {
          name: { $regex: search, $options: "i" },
        });
      }

      const result = await ProductsModel.find(query)
        .limit(limit)
        .skip((page - 1) * limit)
        .sort({ createdAt: -1 });

      const total = await ProductsModel.countDocuments(query);

      res.status(200).json(result);
      
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all products",
      });
    }
  },
  async findOne(req: Request, res: Response) {
  /**
     #swagger.tags = ['Product']
     */
    try {
      const result = await ProductsModel.findOne({
        _id: req.params.id,
      });
      res.status(200).json({
        data: result,
        message: "Success get one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },
  async update(req: Request, res: Response) {
  /**
     #swagger.tags = ['Product']
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/Storeproduct"
      }
     }
     */
    try {
      const result = await ProductsModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: result,
        message: "Success update product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update product",
      });
    }
  },
  async delete(req: Request, res: Response) {
  /**
     #swagger.tags = ['Product']
     */
    try {
      const result = await ProductsModel.findOneAndDelete({
        _id: req.params.id,
      });

      res.status(200).json({
        data: result,
        message: "Success delete product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete product",
      });
    }
  },
};


