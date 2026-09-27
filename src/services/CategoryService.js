import { CategoryRepository } from "../repositories/CategoryRepository.js";

export class CategoryService {
  constructor(repository = new CategoryRepository()) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async getById(id) {
    return await this.repository.findById(id);
  }
}