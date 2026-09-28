import { pool } from "../config/pool.js";
import { Requester } from "../models/Requester.js";

export class RequesterRepository {
  constructor(connectionPool = pool) {
    this.pool = connectionPool;
  }

  async findAll() {
    const query = `
      SELECT id, name, email, department, created_at as createdAt, updated_at as updatedAt
      FROM requesters
      WHERE deleted_at IS NULL
      ORDER BY id ASC      
    `;
    const [rows] = await this.pool.query(query);
    return rows.map((row) => new Requester(row));
  }

  async findById(id) {
    const query = `
      SELECT id, name, email, department, created_at as createdAt, updated_at as updatedAt
      FROM requesters
      WHERE id = ? AND deleted_at IS NULL
    `;
    const [rows] = await this.pool.execute(query, [id]);
    return rows.length > 0 ? new Requester(rows[0]) : null;
  }

  async findByEmail(email) {
    const query = `
      SELECT id, name, email, department, created_at as createdAt, updated_at as updatedAt
      FROM requesters
      WHERE email = ?
    `;
    const [rows] = await this.pool.execute(query, [email]);
    return rows.length > 0 ? new Requester(rows[0]) : null;
  }

  async create({ name, email, department }) {
    const query = `
      INSERT INTO requesters (name, email, department)
      VALUES (?, ?, ?)
    `;
    const [result] = await this.pool.execute(query, [name, email, department]);
    return result.insertId;
  }

  async update(id, { name, email, department }) {
    const query = `
      UPDATE requesters
      SET name = ?, email = ?, department = ?
      WHERE id = ? AND deleted_at IS NULL
    `;
    const [result] = await this.pool.execute(query, [name, email, department, id]);
    return result.affectedRows > 0;
  }

  async delete(id) {
    const query = `
      UPDATE requesters
      SET deleted_at = NOW()
      WHERE id = ? AND deleted_at IS NULL
    `;
    const [result] = await this.pool.execute(query, [id]);
    return result.affectedRows > 0;
  }
}
