import { pool } from "../config/pool.js";
import { Category } from "../models/Category.js";

export class CategoryRepository {
  constructor(connectionPool = pool) {
    this.pool = connectionPool;
  }

  async findAll() {
    const query = `
      SELECT id, name, description, created_at as createdAt, updated_at as updatedAt
      FROM categories
      ORDER BY id ASC      
    `;
    const [rows] = await this.pool.query(query);
    return rows.map((row) => new Category(row));
  }

  async findById(id) {
    const query = `
      SELECT id, name, description, created_at as createdAt, updated_at as updatedAt
      FROM categories
      WHERE id = ?      
    `;
    const [rows] = await this.pool.execute(query, [id]);
    return rows.length > 0 ? new Category(rows[0]) : null;
  }
}
