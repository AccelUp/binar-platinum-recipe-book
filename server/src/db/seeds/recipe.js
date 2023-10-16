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
      ingredients:
        "Nasi putih, Bawang putih, Ayam, Kecap manis atau kecap asin, Sambal, Daun bawang, Garam",
      instruction:
        "1. Panaskan minyak goreng di atas wajan.\n2. Tumis bawang putih hingga harum.\n3. Masukkan nasi putih dan aduk hingga merata.\n4. Tambahkan kecap manis atau kecap asin, saus sambal, garam\n5. Aduk hingga merata dan masak selama 5 menit.\n6. Tambahkan daun bawang dan aduk hingga merata.",
      caption:
        "Nikmati nasi goreng ala rumahan yang gurih dan enak dengan resep ini, dibuat dengan bahan-bahan sederhana seperti nasi, ayam, telur dan sayuran.",
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
    {
      id: uuidv4(),
      title: "Rendang Daging",
      ingredients: "Tepung terigu, Air, Gula, Garam, Yeast, Minyak zaitun",
      instruction:
        "1. Campurkan tepung terigu, air, gula, garam, yeast dan minyak zaitun hingga tercampur merata. \n2. Aduk-aduk sambil tuang air es sedikit demi sedikit. \n3. Uleni adonan hingga kalis dan elastis. \n4. Diamkan adonan selama 30 menit hingga mengembang. \n5. Setelah mengembang, pipihkan adonan dengan rolling pin. \n6. Letakkan adonan di atas loyang pizza yang sudah diolesi minyak zaitun. \n7. Tambahkan saus tomat dan topping sesuai selera. \n8. Panggang di oven selama 10-15 menit.",
      caption: "Buat pizza sendiri di rumah dengan resep mudah.",
      category: "Main Course",
    },
    {
      id: uuidv4(),
      title: "Ayam Goreng",
      ingredients: "Ayam, Tepung terigu, Garam, Merica, Minyak goreng",
      instruction:
        "1. Potong ayam menjadi bagian-bagian kecil. \n2. Campurkan tepung terigu, garam, dan merica. \n3. Balurkan potongan ayam dengan campuran tepung. \n4. Panaskan minyak goreng dalam wajan. \n5. Goreng ayam hingga kecokelatan dan matang. \n6. Sajikan dengan nasi atau saus favorit Anda.",
      caption: "Nikmati ayam goreng lezat di rumah.",
      category: "Main Course",
    },
    {
      id: uuidv4(),
      title: "Pasta Carbonara",
      ingredients:
        "Pasta, Telur, Keju parmesan, Bacon, Minyak zaitun, Bawang putih",
      instruction:
        "1. Rebus pasta hingga al dente. \n2. Sementara itu, tumis bawang putih dan bacon dengan minyak zaitun. \n3. Campur telur dan keju parmesan. \n4. Tiriskan pasta dan campurkan dengan campuran telur. \n5. Sajikan segera.",
      caption: "Nikmati hidangan pasta lezat ini di rumah.",
      category: "Main Course",
    },
    {
      id: uuidv4(),
      title: "Sop Tomat",
      ingredients:
        "Tomat, Bawang, Kaldu ayam, Gula, Garam, Merica, Minyak zaitun",
      instruction:
        "1. Tumis bawang hingga harum. \n2. Tambahkan tomat, kaldu ayam, gula, garam, dan merica. \n3. Masak hingga tomat lunak. \n4. Blender campuran ini hingga halus. \n5. Panaskan lagi sebelum disajikan.",
      caption: "Nikmati sup tomat segar di rumah.",
      category: "Soup",
    },
    {
      id: uuidv4(),
      title: "Nasi Goreng",
      ingredients:
        "Nasi, Ayam, Telur, Bawang merah, Bawang putih, Kecap manis, Minyak goreng",
      instruction:
        "1. Tumis bawang merah dan bawang putih hingga harum. \n2. Tambahkan ayam dan telur. \n3. Masak hingga ayam matang dan telur tercampur. \n4. Tambahkan nasi dan kecap manis. \n5. Aduk rata dan masak hingga nasi panas. \n6. Sajikan dengan irisan mentimun dan kerupuk.",
      caption: "Nikmati nasi goreng lezat di rumah.",
      category: "Main Course",
    },
    {
      id: uuidv4(),
      title: "Salad Caesar",
      ingredients:
        "Daun romaine, Crouton, Keju parmesan, Dressing Caesar, Ayam panggang",
      instruction:
        "1. Potong daun romaine dan ayam panggang menjadi potongan kecil. \n2. Tambahkan crouton dan keju parmesan. \n3. Siram dengan dressing Caesar. \n4. Aduk rata dan sajikan.",
      caption: "Nikmati salad Caesar segar di rumah.",
      category: "Salad",
    },
    {
      id: uuidv4(),
      title: "Mie Goreng",
      ingredients:
        "Mie, Sayuran, Telur, Kecap manis, Bawang putih, Minyak goreng",
      instruction:
        "1. Rebus mie hingga matang. \n2. Tumis bawang putih, sayuran, dan telur hingga sayuran layu. \n3. Tambahkan mie dan kecap manis. \n4. Aduk rata dan masak hingga panas. \n5. Sajikan dengan irisan mentimun.",
      caption: "Nikmati mie goreng lezat di rumah.",
      category: "Main Course",
    },
    {
      id: uuidv4(),
      title: "Pancake",
      ingredients:
        "Tepung terigu, Telur, Susu, Gula, Baking powder, Minyak sayur",
      instruction:
        "1. Campurkan tepung terigu, baking powder, gula, telur, dan susu. \n2. Panaskan minyak sayur di atas panci anti lengket. \n3. Tuangkan adonan pancake ke panci panas. \n4. Masak hingga muncul gelembung di permukaan. \n5. Balik pancake dan masak hingga kecokelatan. \n6. Sajikan dengan sirup maple atau buah-buahan.",
      caption: "Nikmati pancake lezat di rumah.",
      category: "Breakfast",
    },
  ]);
};
