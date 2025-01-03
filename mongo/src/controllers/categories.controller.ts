import { Request, Response } from "express";
import CategoriesModel from "../models/categories.model";
import * as Yup from 'yup';
import{
  create,findAll,findOne,update,remove
}from "../services/categories.services";

interface IPaginationQuery {
  page: number;
  limit: number;
  search?: string;
}



const createValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number().required(),
  category: Yup.string().required(),
  description: Yup.string().required(),
  images: Yup.array().of(Yup.string()).required().min(1),
  qty: Yup.number().required().min(1),
});

export default {
  async create(req: Request, res: Response) {
    /**
     #swagger.tags = ['Category']
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/Storecategories"
      }
     }
     */
    try {
      const result = await CategoriesModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    /**
     #swagger.tags = ['Category']
     */
    try {
      const result = await CategoriesModel.find();
      res.status(200).json({
        data: result,
        message: "Success get all products",
      });
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
     #swagger.tags = ['Category']
     */
    try {
      const result = await CategoriesModel.findOne({
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
     #swagger.tags = ['Category']
     #swagger.requestBody = {
      required: true,
      schema: {
        $ref: "#/components/schemas/Storecategories"
      }
     }
     */
    try {
      const result = await CategoriesModel.findOneAndUpdate(
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
     #swagger.tags = ['Category']
     */
    try {
      const result = await CategoriesModel.findOneAndDelete({
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
