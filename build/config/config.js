"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_NAME = exports.URL = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var path;
switch (process.env.NODE_ENV) {
    case "dev":
        path = __dirname + "\\dev.env";
        break;
    default:
        path = __dirname + "\\.env";
}
dotenv_1.default.config({ path: path });
exports.PORT = process.env.PORT;
exports.URL = process.env.URL;
exports.DATABASE_NAME = process.env.DATABASE_NAME;
