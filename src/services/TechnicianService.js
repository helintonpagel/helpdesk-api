import { TechnicianRepository } from "../repositories/TechnicianRepository.js";
import { AppError } from "../utils/AppError.js";

export class TechnicianService {
  constructor(repository = new TechnicianRepository()) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async getById(id) {
    const technician = await this.repository.findById(id);
    if (!technician) {
      throw new AppError("Técnico não encontrado.", 404);
    }
    return technician;
  }
}
