import uuidGenerator from "@/helpers/uuidGenerator";

export default function FormModel() {
  return {
    id: uuidGenerator(),
    author: "",
    content: "",
    tags: [],
    dateAdded: Date.now(),
    dateModified: Date.now(),
  };
}
