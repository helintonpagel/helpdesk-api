import { pool } from "../config/pool.js";
import { Technician } from "../models/Technician.js";

export class TechnicianRepository {
  constructor(connectionPool = pool) {
    this.pool = connectionPool;
  }

  async findAll() {
    const query = `
      SELECT id, name, email, created_at as createdAt, updated_at as updatedAt
      FROM technicians
      WHERE deleted_at IS NULL
      ORDER BY id ASC      
    `;
    const [rows] = await this.pool.query(query);
    return rows.map((row) => new Technician(row));
  }

  async findById(id) {
    const query = `
      SELECT id, name, email, created_at as createdAt, updated_at as updatedAt
      FROM technicians
      WHERE id = ? AND deleted_at IS NULL      
    `;
    const [rows] = await this.pool.execute(query, [id]);
    return rows.length > 0 ? new Technician(rows[0]) : null;
  }
}
