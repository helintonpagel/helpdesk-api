import { TechnicianRepository } from "../repositories/TechnicianRepository.js";

export class TechnicianService {
  constructor(repository = new TechnicianRepository()) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async getById(id) {
    return await this.repository.findById(id);
  }
}
