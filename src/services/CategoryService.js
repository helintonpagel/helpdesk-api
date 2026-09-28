import { CategoryRepository } from "../repositories/CategoryRepository.js";
import { AppError } from "../utils/AppError.js";

export class CategoryService {
  constructor(repository = new CategoryRepository()) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async getById(id) {
    const category = await this.repository.findById(id);
    if (!category) {
      throw new AppError("Categoria não encontrada.", 404);
    }
    return category;
  }
}