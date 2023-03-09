import { uploadModel } from "../Schema/UploadSchema.js"

export const deleteTweet = async (req, res) => {

  const id = req.params.id;
  uploadModel.deleteOne({
    id: id
  }, (err, data) => {
    if (data) {
      return res.send("deleted");
    }
  })
}