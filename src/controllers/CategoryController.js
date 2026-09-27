import { CategoryService } from "../services/CategoryService.js";

export class CategoryController {
  constructor(service = new CategoryService()) {
    this.service = service;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll(req, res, next) {
    try {
      const categories = await this.service.getAll();
      return res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await this.service.getById(id);

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      return res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }
}