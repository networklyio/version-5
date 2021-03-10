// Backend
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
};

// For the frontend use:
// https://gist.github.com/AshikNesin/e44b1950f6a24cfcd85330ffc1713513