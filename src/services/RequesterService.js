import { RequesterRepository } from "../repositories/RequesterRepository.js";
import { AppError } from "../utils/AppError.js";

export class RequesterService {
  constructor(repository = new RequesterRepository()) {
    this.repository = repository;
  }

  async getAll() {
    return await this.repository.findAll();
  }

  async getById(id) {
    const requester = await this.repository.findById(id);
    if (!requester) {
      throw new AppError("Solicitante não encontrado.", 404);
    }
    return requester;
  }

  async create(data) {
    const { name, email, department } = data;
    if (!name || !email || !department) {
      throw new AppError("Os campos 'nome', 'email' e 'departamento' são obrigatórios.", 400);
    }

    const existingRequester = await this.repository.findByEmail(email);
    if (existingRequester) {
      throw new AppError("Já existe um solicitante cadastrado com este email.", 409);
    }

    const requesterId = await this.repository.create({ name, email, department });
    return await this.repository.findById(requesterId);
  }

  async update(id, data) {
    const { name, email, department } = data;
    if (!name || !email || !department) {
      throw new AppError("Os campos 'nome', 'email' e 'departamento' são obrigatórios.", 400);
    }

    const existingRequester = await this.repository.findByEmail(email);
    if (existingRequester && existingRequester.id !== Number(id)) {
      throw new AppError("Já existe um solicitante cadastrado com este email.", 409);
    }

    const updated = await this.repository.update(id, { name, email, department });
    if (!updated) {
      throw new AppError("Solicitante não encontrado.", 404);
    }

    return await this.repository.findById(id);
  }

  async delete(id) {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new AppError("Solicitante não encontrado.", 404);
    }
    return deleted
  }
}
