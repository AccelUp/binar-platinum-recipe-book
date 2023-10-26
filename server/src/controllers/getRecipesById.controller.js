import { responseOk, responseError } from "../helpers/restResponse.helper.js";
import CookBookModels from "../models/recipe.models.js";

const models = new CookBookModels();

async function getRecipesById(req, res) {
  // #swagger.tags = ['Recipe']

  /* #swagger.responses[200] = {
        description: "Get recipe by id",
        schema: {
          id: "d5fE_asz",
          title: "Mie goreng abang-abang",
          author: "Nando",
          ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
          steps: [
            "Siapkan mie yang sudah matang",
            "Ulek bawang dan cabai",
            "goreng telur terlebih dahulu",
            "masukan bumbu tadi",
            "masukan mie",
            "tuangkan kecap secukupnya",
            "nasgor siap dihidangkan"
          ],
          duration: 600,
          createdAt: "2020-03-10T04:05:06.157Z"
        }
} */

  try {
    const id = req.params["id"];
    const data = await models.findById(id);

    if (!data || data.length === 0) {
      return res.status(404).json(responseError("Link can not be found!"));
    }

    return res.status(200).json(
      responseOk("Success get link by id", data, {
        id: "d5fE_asz",
        title: "Mie goreng abang-abang",
        author: "Nando",
        ingredients: ["bawang", "mie", "telor", "cabai", "kecap"],
        steps: ["Siapkan mie yang sudah matang", "Ulek bawang dan cabai", "goreng telur terlebih dahulu", "masukan bumbu tadi", "masukan mie", "tuangkan kecap secukupnya", "nasgor siap dihidangkan"],
        duration: 600,
        createdAt: "2020-03-10T04:05:06.157Z",
      })
    );
  } catch (error) {
    return res.status(500).json(responseError("Error while fetching recipe by id", error.message));
  }
}

export { getRecipesById };
