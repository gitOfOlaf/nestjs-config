import { Injectable } from "@nestjs/common";
import * as dotenv from "dotenv";

@Injectable()
export default class ConfigService {
  private readonly config: object;
  constructor() {
    const config = dotenv.config();
    this.config = process.env;
  }

  /**
   * Get the param or use default
   *
   * @param param
   * @param def default
   * @returns {any}
   */
  get(param: string, def: any = null): any {
    return this.has(param) ? this.config[param] : def;
  }

  /**
   * Check the param exists
   *
   * @param param
   * @returns {boolean}
   */
  has(param: string): boolean {
    return this.config.hasOwnProperty(param);
  }
}
