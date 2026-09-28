import { TechnicianService } from "../services/TechnicianService.js"; 

export class TechnicianController {
  constructor(service = new TechnicianService()) {
    this.service = service;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll(req, res, next) {
    try {
      const technicians = await this.service.getAll();
      return res.status(200).json(technicians);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const technician = await this.service.getById(id);
      return res.status(200).json(technician);
    } catch (error) {
      next(error);
    }
  }
}
