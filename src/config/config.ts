import dotenv from "dotenv";

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case "dev":
    path = `${__dirname}\\dev.env`;
    break;
  default:
    path = `${__dirname}\\server.env`;
}

dotenv.config({ path: path });

export const PORT = process.env.PORT;
export const URL = process.env.URL;
export const DATABASE_NAME = process.env.DATABASE_NAME;
