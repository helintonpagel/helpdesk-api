import { RequesterService } from "../services/RequesterService.js";

export class RequesterController {
  constructor(service = new RequesterService()) {
    this.service = service;

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res, next) {
    try {
      const requesters = await this.service.getAll();
      return res.status(200).json(requesters);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const { id } = req.params;
      const requester = await this.service.getById(id);
      return res.status(200).json(requester);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const requester = await this.service.create(req.body);
      return res.status(201).json(requester);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const requester = await this.service.update(id, req.body);
      return res.status(200).json(requester);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      await this.service.delete(id);
      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
