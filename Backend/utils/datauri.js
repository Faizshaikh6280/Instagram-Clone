import DataUriParser from "datauri/parser.js";
import path from "path";

const parser = new DataUriParser();

const getDataUri = (file) => {
  const extNmae = path.extname(file.originalname).toString();

  return parser.format(extNmae, file.buffer).content;
};

export default getDataUri;
