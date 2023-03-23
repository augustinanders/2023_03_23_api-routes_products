import { getProductById } from "../../../services/productServices";

getProductById;

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  response.status(200).json(product);
}
