export default function FormModel() {
  return {
    _id: "",
    author: String,
    content: String,
    tags: [],
    authorSlug: String,
    length: Number,
    dateAdded: new Date(),
    dateModified: new Date(),
  };
}
