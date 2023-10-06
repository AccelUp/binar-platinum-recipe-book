import { v4 as uuidv4 } from "uuid";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("recipe").del();
  await knex("recipe").insert([
    {
      id: uuidv4(),
      title: "Nasi Goreng",
      ingredients: "Nasi putih, Bawang putih, Ayam, Kecap manis atau kecap asin, Sambal, Daun bawang, Garam",
      instruction:
        "1. Panaskan minyak goreng di atas wajan.\n2. Tumis bawang putih hingga harum.\n3. Masukkan nasi putih dan aduk hingga merata.\n4. Tambahkan kecap manis atau kecap asin, saus sambal, garam\n5. Aduk hingga merata dan masak selama 5 menit.\n6. Tambahkan daun bawang dan aduk hingga merata.",
      caption: "Nikmati nasi goreng ala rumahan yang gurih dan enak dengan resep ini, dibuat dengan bahan-bahan sederhana seperti nasi, ayam, telur dan sayuran.",
      category: "Main Course",
      img_filename: "file-1696515594948",
    },
    {
      id: uuidv4(),
      title: "Pizza",
      ingredients: "Tepung terigu, Air, Gula, Garam, Yeast, Minyak zaitun",
      instruction:
        "1. Campurkan tepung terigu, air, gula, garam, yeast dan minyak zaitun hingga tercampur merata. \n2. Aduk-aduk sambil tuang air es sedikit demi sedikit. \n3. Uleni adonan hingga kalis dan elastis. \n4. Diamkan adonan selama 30 menit hingga mengembang. \n5. Setelah mengembang, pipihkan adonan dengan rolling pin. \n6. Letakkan adonan di atas loyang pizza yang sudah diolesi minyak zaitun. \n7. Tambahkan saus tomat dan topping sesuai selera. \n8. Panggang di oven selama 10-15 menit.",
      caption: "Buat pizza sendiri di rumah dengan resep mudah.",
      category: "Main Course",
    },
  ]);
};
