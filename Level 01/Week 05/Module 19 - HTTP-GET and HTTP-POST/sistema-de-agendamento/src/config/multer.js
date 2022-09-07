import multer from "multer";

// Node.js modules
import crypto from "crypto";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "tmp", "uploads"),
    filename: (req, file, cb) => {
      crypto.randomBytes(15, (err, res) => {
        if (err) return cb(err);

        // extname return the extension of the path, from the last '.' to end of string in the last portion of the path.
        return cb(null, res.toString("hex") + extname(file.originalname));
      });
    },
  }),
};
