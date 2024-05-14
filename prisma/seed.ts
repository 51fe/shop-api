import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const manufacturers: Prisma.ManufacturerCreateInput[] = [ 
  {
    name: '华为',
    products: {
      create: [
        {
          name: "华为 畅享6",
          price: 749,
          inventory: 10,
          image: "https://img11.360buyimg.com/n7/jfs/t3637/275/652996370/280419/2a134044/58105e15N75fb0595.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minima impedit, eius maiores distinctio beatae. Culpa hic ducimus atque sint, quae voluptatem numquam similique neque ea saepe, minima, inventore eum."
        },
        {
          name: "华为荣耀9",
          price: 2799,
          inventory: 20,
          image: "https://img12.360buyimg.com/n7/jfs/t6109/160/5518324313/234407/f5cde5b4/596c7113N61f7d813.jpg",
          description: "Voluptates optio saepe vitae qui porro excepturi iure odio, facilis eius alias quos hic dolor et veniam exercitationem. Cum aut, similique iure aliquid rem fugit. Explicabo, facere. Odio autem hic asperiores dolor odit nobis quia ipsa! Iste delectus, vitae necessitatibus quod asperiores accusantium aliquid pariatur eaque temporibus cumque dolores esse quis tempore debitis eius atque ea at perferendis aperiam praesentium ratione libero. Cupiditate quisquam obcaecati quam quae. Sunt nemo culpa deserunt unde iure officiis cupiditate rem eum beatae hic? Quam animi quasi molestias cupiditate dicta ab aliquid incidunt architecto? Id, et facere."
        },
        {
          name: "荣耀 V10",
          price: 2499,
          inventory: 10,
          image: "https://img11.360buyimg.com/n7/jfs/t12016/100/1221314692/239632/8b94bbc6/5a1d1d97Nf3afa7bb.jpg",
          description: "Accusantium voluptatibus ipsam laboriosam quaerat beatae repellendus facilis, sunt quos itaque labore veniam iste unde nihil distinctio at? Fugiat quas provident ratione a numquam excepturi quod, harum distinctio voluptas! Voluptatem optio voluptates modi magni. Tempore dignissimos quisquam repellendus qui, nemo itaque quasi! Quas, minima tempore consectetur eum ratione quasi illo qui a doloremque temporibus nostrum neque error possimus fugiat nemo voluptatem aut doloribus excepturi necessitatibus provident ab, sit cum. Tenetur quam quidem eius consectetur mollitia! Obcaecati natus error voluptas reiciendis magnam doloribus nihil, adipisci illum, odio dolorum facere, debitis tempora quam sed."
        },
        {
          name: "荣耀8青春版",
          price: 1599,
          inventory: 10,
          image: "https://img13.360buyimg.com/n7/jfs/t5431/279/2296442350/256540/d337176d/59196475N61a0cd63.jpg",
          description: "Quae recusandae placeat fugiat! Deleniti earum explicabo blanditiis minima sit ducimus nesciunt, eaque quas error saepe, aperiam accusamus neque provident commodi, ipsum cupiditate vitae harum sunt. Ex facilis quam quibusdam autem asperiores dolorum quidem in cumque omnis rerum, laudantium tempora! Ducimus possimus alias dolores, non quos omnis commodi unde consequatur. Quasi, quaerat vel temporibus odit eius rerum magni tenetur ad unde dolor optio, neque labore possimus doloremque delectus dolore harum dolorum quod, accusamus pariatur illo ratione iste porro vitae! Quia unde debitis corporis ipsa voluptatem magnam, deleniti repellat ratione esse voluptatum minima."
        }
      ]
    }
  },
  {
    name: '小米',
    products: {
      create: [
        {
          name: "红米5 Plus",
          price: 999,
          inventory: 20,
          image: "https://img12.360buyimg.com/n7/jfs/t15775/364/150916311/324587/3b5a727/5a28b5a1N8a5c095f.jpg",
          description: "Aut labore placeat exercitationem harum commodi, dignissimos possimus voluptatum laborum. Molestias magnam veniam consequuntur cupiditate porro at aliquam nobis odit minus esse inventore temporibus saepe tempore harum dolor cumque amet, expedita atque! Labore repellat quaerat temporibus sapiente sed quasi mollitia provident! Officiis ipsam ducimus cupiditate nam ea dicta amet quos ab laboriosam beatae labore, aliquam minus distinctio repellat illum. Corrupti obcaecati placeat ipsam itaque accusamus? In at ipsam sit maiores soluta eos consequatur, dicta totam enim magnam ea vel voluptate? Veniam, laborum. Perferendis, quia atque? Soluta aliquam maxime dolore accusamus officia enim."
        },
        {
          name: "红米5A",
          price: 699,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t6010/111/3843138696/73795/bf58700d/5959ab7fN154e56b4.jpg",
          description: "Expedita, deleniti magni fugit delectus minus soluta ducimus ullam aut inventore eius dolorum molestiae repudiandae nostrum. Voluptate, eius quia beatae assumenda voluptas, obcaecati officiis dolorem velit ex ipsa dignissimos praesentium dolor quo cum. Distinctio vel id quasi deserunt alias architecto nihil voluptatibus tempora adipisci accusantium numquam est exercitationem praesentium tenetur laborum fugiat sed corrupti, non dolore velit odio minus! Sapiente dolor eligendi veritatis repudiandae reprehenderit. Necessitatibus alias beatae pariatur cupiditate ducimus adipisci in sapiente hic praesentium atque consequuntur harum eaque quibusdam aliquam, tempore dolores quos impedit quaerat. Rem voluptas magni repellat natus."
        },
        {
          name: "小米Max2 ",
          price: 1499,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t11290/364/379755273/342787/77affcf1/59eef783N005b1155.jpg",
          description: "Quibusdam officia et, voluptas ducimus, assumenda deserunt molestiae totam eveniet nisi nulla ratione esse debitis, nam voluptatem laudantium? Voluptate dignissimos, voluptatibus quae ipsam officiis laboriosam earum? Numquam provident adipisci hic dignissimos nostrum beatae quos amet quis aut quia et laborum dicta voluptate, earum perspiciatis maiores consequatur. Ab quibusdam dicta rerum. Similique mollitia, error tempore quia, voluptates esse nisi dolore saepe aliquid labore eveniet vel quisquam distinctio voluptas nihil autem ullam neque cumque. Qui sequi expedita molestias molestiae! Illo tempora earum adipisci eos."
        }
      ]
    }
  },
  {
    name: '魅族',
    products: {
      create: [
        {
          name: "魅族17",
          price: 3699,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t1/135821/23/2709/206234/5eee2f73E082b8d23/a9d7992529e411b8.jpg",
          description: "Recusandae soluta earum aliquid vitae, assumenda quam praesentium excepturi tempora at molestias quasi adipisci, quisquam dolore unde nemo officiis doloribus quas omnis? Consequuntur optio deleniti eos dicta, similique tempore pariatur. Sequi, voluptatum? Eum, velit. Dolorum ipsa at quasi perspiciatis totam optio maxime eius iste, quam dolorem temporibus iure? Qui similique rem dolor nostrum corrupti, in voluptatum omnis molestias, dolorum doloremque, deserunt quo praesentium eum vitae ut non aliquid dolores mollitia sint cumque sapiente facilis. Nam possimus debitis, excepturi dolore quaerat perspiciatis consequatur."
        },
        {
          name: "魅族 Note9",
          price: 1099,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t1/103116/31/2138/163214/5dca156bE8e83b37e/548237bb5f3b0cc7.jpg",
          description: "Laudantium quia nisi labore possimus corrupti blanditiis ullam facilis. Numquam earum rem architecto repellat ullam nihil blanditiis autem perspiciatis veniam cumque quidem dolore repudiandae qui neque, molestias debitis magni sit nobis. Sapiente consequatur repellendus repellat quis, quidem sint nobis nemo eaque quos voluptas ea! Praesentium, facere culpa eaque sint, expedita vero in at ut totam, sapiente mollitia quas officia tenetur sequi cum! Corrupti hic impedit atque vero vel in quia placeat consectetur dolores incidunt. Dicta neque rem id. Vitae fugit veniam nobis."
        },
        {
          name: "魅族 X8",
          price: 2499,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t25318/40/2328557238/101534/d7448623/5bc82ee4N963e2806.jpg",
          description: "Laboriosam maiores, quisquam numquam architecto illo debitis harum soluta corporis totam delectus similique et! Fuga sapiente adipisci deserunt, illum, natus quod ea distinctio eligendi laboriosam non vel? Repellat quod quisquam dicta error quo? Molestias adipisci et magni repellendus architecto nihil, ipsa doloremque. Itaque beatae eaque excepturi autem veritatis laboriosam nesciunt rerum veniam est amet aspernatur recusandae nulla, quibusdam porro voluptate ab, cum officiis, quisquam eum ipsum ipsa ullam ad laudantium molestiae? Cum fuga ducimus nostrum veritatis libero quo quos aspernatur reprehenderit nequ."
        },
        {
          name: "魅族16T",
          price: 2299,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t1/100765/24/10905/221245/5e2038caEcdbe3240/b9417e22872e3844.jpg",
          description: "A et repellat culpa eveniet eius velit, non illum rerum dolorum tempora magnam nihil earum deserunt excepturi eligendi at ratione dolor quas porro iusto labore unde voluptatum laboriosam maxime! Sed numquam recusandae error laudantium esse maxime nemo amet iusto quaerat! Nulla, ratione maiores ab eaque iure possimus. Repellendus dolores dolorum eligendi modi, ea adipisci necessitatibus quae! Voluptatibus vero doloribus iusto natus blanditiis, officia dolore eligendi minima porro a, nemo, earum corporis similique error tempore debitis eius! Numquam esse tenetur ipsa ullam labore."
        },
        {
          name: "魅族 16s",
          price: 3199,
          inventory: 20,
          image: "https://img12.360buyimg.com/n7/jfs/t1/54320/1/15787/227921/5dca1370E19d55988/1d4e6ec033d0336e.jpg",
          description: "Recusandae laboriosam blanditiis dolor minima animi eius eveniet non iste, dignissimos neque aspernatur in vitae error debitis soluta modi laborum optio nihil expedita doloremque nemo maxime? Iusto nam, culpa at voluptas ducimus facere doloremque, iste earum sit, id accusantium eaque recusandae. Veritatis, possimus assumenda, qui corrupti earum rem quibusdam nulla sequi nemo aliquid cupiditate itaque saepe corporis. Nulla molestiae dolore quis tempora quisquam? Asperiores, id dolores. Architecto, totam eligendi ducimus adipisci ipsa sapiente harum, expedita culpa, doloremque itaque dolores doloribus assumenda consequatur."
        },
      ]
    }
  },
  {
    name: '三星',
    products: {
      create: [
        {
          name: "三星Galaxy A21",
          price: 2899,
          inventory: 10,
          image: "https://img12.360buyimg.com/n7/jfs/t1/142329/25/5389/66757/5f34fcf5E398e2a21/df183d02da29be8f.jpg",
          description: "Blanditiis corrupti, saepe facilis eius iure ab officia vero fugiat expedita esse debitis molestiae distinctio sit veritatis tempora obcaecati nesciunt non quis consectetur et minima voluptas nam. Exercitationem quaerat harum dolores aliquid aliquam odit illo. Ex reiciendis laudantium, beatae vel ducimus rerum dolor ipsum! Inventore, reprehenderit. Reprehenderit non illum impedit optio, laudantium, porro ex sapiente laboriosam tempore at similique magnam molestias itaque consectetur aut nobis quibusdam. Iste est earum minus harum et, voluptatum hic facilis deserunt assumenda nobis dolores quisquam numquam ab."
        },
        {
          name: "三星 Galaxy A51",
          price: 1999,
          inventory: 20,
          image: "https://img12.360buyimg.com/n7/jfs/t1/121778/28/2741/116220/5ec7cfdaE6a99b556/b9e194ebaeb6e9d1.jpg",
          description: "Corporis saepe consequatur nihil architecto optio et similique. Saepe aperiam qui corrupti voluptate odio asperiores voluptates eos quam. Vitae quae, corporis sunt ipsa placeat minima quis iure aliquam odio eveniet eum quos praesentium, nihil sint eligendi maxime omnis nulla cupiditate ratione reprehenderit alias voluptatum hic. Dignissimos, repellat minima modi mollitia obcaecati accusamus iure animi, veritatis excepturi fugiat vel assumenda dolore. Eligendi eos libero eaque quia nihil? Cum reprehenderit dolore nobis, illum veritatis aliquid temporibus odit, vero, facilis sint assumenda voluptatibus natus porro."
        }
      ]
    }
  }
]
async function main() {
  console.log(`Start seeding ...`)
  for (const data of manufacturers) {
    const result = await prisma.manufacturer.create({
      data,
    })
    console.log(`Created user with id: ${result.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
