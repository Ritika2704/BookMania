import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      var res2 =res.data;
      if(res2[0].id ==="thapaserialnoa"){
        res2[0].name ='One of my enemy';
        res2[0].image = 'https://m.media-amazon.com/images/I/81hquzbQ16L.jpg';
        res2[0].price =90000;
        res2[0].category ='Fantasy';
      }
      if(res2[7].id ==="thapaserialnoh"){
        res2[7].name ='Lakewood';
        res2[7].image = 'https://kbimages1-a.akamaihd.net/6d15ba2d-ac55-4b9b-9afb-32cc611e586c/353/569/90/False/lakewood-6.jpg';
        res2[7].price =100000;
        res2[7].category ='Thiller'; 
      }
      if(res2[11].id ==="thapaserialnol"){
        res2[11].name ='The Lost Man';
        res2[11].image = 'https://m.media-amazon.com/images/I/41gE3mjQeNL.jpg';
        res2[11].price =120000;
        res2[11].category ='Thiller'; 
      }
      if(res2[6].id ==="thapaserialnog"){
        res2[6].name ='The Four Agreements';
        res2[6].image = 'https://m.media-amazon.com/images/I/51pnYmWFKwL.jpg';
        res2[6].price =60000;
        res2[6].category ='Self-Help';
      }
     if(res2[3].id ==="thapaserialnod"){
        res2[3].name ='Alchemist';
        res2[3].image = 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg';
        res2[3].price =40000;
        res2[3].category ='Self-Help';
      }
      if(res2[1].id ==="thapaserialnob"){
        res2[1].name ='The lost unicorn';
        res2[1].image = 'https://m.media-amazon.com/images/I/51DTibuOoNL.jpg';
        res2[1].price =70000;
        res2[1].category ='Fantasy';
      }
      if(res2[8].id ==="thapaserialnoi"){
        res2[8].name ='Salt';
        res2[8].image = 'https://m.media-amazon.com/images/I/71DhKhlb6wL.jpg';
        res2[8].price =140000;
        res2[8].category ='History';
      }
      if(res2[5].id ==="thapaserialnof"){
        res2[5].name ='The Communist Manifesto';
        res2[5].image = 'https://m.media-amazon.com/images/I/91JsJJplSKL.jpg';
        res2[5].price =120000;
        res2[5].category ='History';
      }
      if(res2[9].id ==="thapaserialnoj"){
        res2[9].name ='The Time Machine';
        res2[9].image = 'https://cloud.firebrandtech.com/api/v2/img/111/9780785841746/XL';
        res2[9].price =60000;
        res2[9].category ='Scifi';
      }
      if(res2[2].id ==="thapaserialnoc"){
        res2[2].name ='Neuromancer';
        res2[2].image = 'https://img.kitapyurdu.com/v1/getImage/fn:11683413/wh:true/wi:800';
        res2[2].price =100000;
        res2[2].category ='Scifi';
      }
      if(res2[10].id ==="thapaserialnok"){
        res2[10].name ='Gone Girl';
        res2[10].image = 'https://kbimages1-a.akamaihd.net/7292758c-a84a-4c53-80e4-73dd3a45c404/1200/1200/False/gone-girl.jpg';
        res2[10].price =35000;
        res2[10].category ='Mystery';
      }
      if(res2[4].id ==="thapaserialnoe"){
        res2[4].name ='The Big Sheep';
        res2[4].image = 'https://cloud.firebrandtech.com/api/v2/img/111/9780785841746/XL';
        res2[4].price =100000;
        res2[4].category ='Mystery';
      }
    //   for(var i=0;i<13;i++){
    //   if(res2[i].id ==="thapaserialnoa"){
    //     res2[i].name ='Outwitting the Devil';
    //     res2[i].image = 'https://kbimages1-a.akamaihd.net/0190289c-bdd3-4c90-90c3-2252a80204d8/353/569/90/False/outwitting-the-devil-1.jpg';
    //   }
    //   if (res2[i].id ==="thapaserialnoh"){
    //     res2[i].name ='Lakewood';
    //     res2[i].description ="When Lena Johnson's beloved grandmother dies, and the full extent of the family debt is revealed, the black millennial drops out of college to support her family and takes a job in the mysterious and remote town of Lakewood, Michigan. On paper, her new job is too good to be true.";
    //     res2[i].image = 'https://kbimages1-a.akamaihd.net/6d15ba2d-ac55-4b9b-9afb-32cc611e586c/353/569/90/False/lakewood-6.jpg';
        
    //   }
    //   if (res2[i].id ==="thapaserialnod"){
    //     res2[i].name ='Alchemist';
    //     res2[i].description ="In the novel, even alchemy, the central symbol of the book, entails coaxing metal to achieve its own Personal Legend to turn into gold. As a result, the idea that all individuals should live in the singular pursuit of their individual dreams emerges as the primary theme of The Alchemist.";
    //     res2[i].image = 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg';
    //    }
    //   if (res2.id ==="thapaserialnog"){
    //     res2.name ='The Four Agreements';
    //     res2.description ="According to the author, everything a person does is based on 'agreements' they have made with themselves, with others, with God, and with life itself. In these agreements, people may tell themselves who they are, how to behave, what is possible, and what is impossible.";
    //     res2.image[0].url = 'https://m.media-amazon.com/images/I/51pnYmWFKwL.jpg';
    //     res2.image[1].url = 'https://images.squarespace-cdn.com/content/v1/586538d0bebafbe217408ac5/1562514936802-PB0BKFUWB4PF5IO1ACT6/4+agr.jpg';
    //     res2.image[2].url = 'https://images.squarespace-cdn.com/content/v1/586538d0bebafbe217408ac5/1562514936802-PB0BKFUWB4PF5IO1ACT6/4+agr.jpg';
    //     res2.image[3].url = 'https://m.media-amazon.com/images/I/51pnYmWFKwL.jpg';
    //   }
    //   if (res2.id ==="thapaserialnoi"){
    //     res2.name ='Salt';
    //     res2.description ="Salt: A World History explores how the everyday mineral we know as table salt has shaped human civilization through the centuries, causing wars and the rise and fall of empires.";
    //     res2.image[0].url = 'https://m.media-amazon.com/images/I/71DhKhlb6wL.jpg';
    //     res2.image[1].url = 'https://i.ebayimg.com/images/g/EUIAAOSw30df~2f7/s-l500.jpg';
    //     res2.image[2].url = 'https://i.pinimg.com/originals/9f/6d/ee/9f6deebda49926cdb12b35e70014c773.jpg';
    //     res2.image[3].url = 'https://www.loquetlondon.com/blog/wp-content/uploads/8a55bd573413bbc96e69d8e98c6745be.jpg';
    //   }
    //   if (res2.id ==="thapaserialnof"){
    //     res2.name ='The Communist Manifesto';
    //     res2.description ="The Communist Manifesto, written by Karl Marx and Friedrich Engels, was first published in 1848. It formed the basis for the modern communist movement as we know it, arguing that capitalism would inevitably self-destruct, to be replaced by socialism and ultimately communism.";
    //     res2.image[0].url = 'https://m.media-amazon.com/images/I/91JsJJplSKL.jpg';
    //     res2.image[1].url = 'https://www.bl.uk/learning/timeline/external/commmanifest.jpg';
    //     res2.image[2].url = 'https://cdn.britannica.com/00/212900-050-6B5C8548/Manifesto-Communist-Party-1847-Karl-Marx-Friederich-Engels.jpg';
    //     res2.image[3].url = 'https://m.media-amazon.com/images/I/31AfmhYzOXL.jpg';
    //   }
    //   if (res2.id ==="thapaserialnoj"){
    //     res2.name ='The Time Machine';
    //     res2.description ="H.G. Wells's The Time Machine offers a dystopian vision of humanity's future. A scientist builds a time machine and travels to future. He finds that humanity has devolved into two races: the childlike Eloi and the monstrous Morlocks. His machine disappears, so he explores the future world.";
    //     res2.image[0].url = 'https://cloud.firebrandtech.com/api/v2/img/111/9780785841746/XL';
    //     res2.image[1].url = 'https://m.media-amazon.com/images/I/61ZPzLlTaCL.jpg';
    //     res2.image[2].url = 'https://www.library.illinois.edu/rbx/hgwells2016/wp-content/uploads/2016/09/TimeMachine_Berkeley_1200.jpg';
    //     res2.image[3].url = 'https://m.media-amazon.com/images/I/61ZPzLlTaCL.jpg';
    //   }
    // }
      
      console.log(res2);
      const manipulatedProducts =res2;
      console.log(manipulatedProducts);
      dispatch({ type: "SET_API_DATA", payload: manipulatedProducts });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      console.log(url);
      const singleProduct = await res.data;
      console.log(res.data);
      var res2 =res.data;
      if(res2.id ==="thapaserialnoa"){
        res2.name ='One of my enemy';
        res2.image[0].url = 'https://m.media-amazon.com/images/I/81hquzbQ16L.jpg';
        res2.image[1].url = 'https://prodimage.images-bn.com/pimages/9781250905567_p0_v1_s1200x630.jpg';
        res2.image[2].url = 'https://cdn.waterstones.com/images/00269046-400x400.jpeg';
        res2.image[3].url = 'https://cdn.waterstones.com/images/00269045-400x400.jpeg';
        res2.description ='When bad blood brings both families to the precipice of disaster, fate intervenes with a chance encounter, and in the aftershocks of a resurrected conflict, everyone must choose a side. As each of the siblings struggles to stake their claim, fraying loyalties threaten to rot each side from the inside out.'
        res2.colors =[];
        res2.brand = 'Fantasy';
        res2.company= 'Olivie Blake';
        res2.price= 90000;
      }

      if(res2.id ==="thapaserialnob"){
        res2.name ='The lost unicorn';
        res2.image[0].url = 'https://m.media-amazon.com/images/I/5105MGbPGEL._SX330_BO1,204,203,200_.jpg';
        res2.image[1].url = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1499525651i/23242522._SY540_.jpg';
        res2.image[2].url = 'https://m.media-amazon.com/images/I/51DTibuOoNL.jpg';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/5105MGbPGEL._SX330_BO1,204,203,200_.jpg';
        res2.description ='The Last Unicorn is a fantasy novel by American author Peter S. Beagle and published in 1968, by Viking Press in the U.S. and The Bodley Head in the U.K. It follows the tale of a unicorn, who believes she is the last of her kind in the world and undertakes a quest to discover what has happened to the other unicorns.'
        res2.colors =[];
        res2.brand = 'Fantasy';
        res2.company= 'Peter S. Beagle';
        res2.price= 70000;
      }
      if (res2.id ==="thapaserialnoh"){
        res2.name ='Lakewood';
        res2.image[0].url = 'https://kbimages1-a.akamaihd.net/6d15ba2d-ac55-4b9b-9afb-32cc611e586c/353/569/90/False/lakewood-6.jpg';
        res2.image[1].url = 'https://thebibliophage.com/wp-content/uploads/2020/06/Lakewood.jpeg';
        res2.image[2].url = 'https://m.media-amazon.com/images/I/51gxF+6sLjL.jpg';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/51gxF+6sLjL.jpg';
        res2.description ='When bad blood brings both families to the precipice of disaster, fate intervenes with a chance encounter, and in the aftershocks of a resurrected conflict, everyone must choose a side. As each of the siblings struggles to stake their claim, fraying loyalties threaten to rot each side from the inside out.'
        res2.colors =[];
        res2.brand = 'Thiller';
        res2.company= 'Megan Giddings';
        res2.price= 100000;          
      }
      if (res2.id ==="thapaserialnol"){
        res2.name ='The Lost Man';
        res2.image[0].url = 'https://m.media-amazon.com/images/I/41gE3mjQeNL.jpg';
        res2.image[1].url = 'https://novelmeals.files.wordpress.com/2019/03/map-e1553617648201.jpg?w=640';
        res2.image[2].url = 'https://images.squarespace-cdn.com/content/v1/58f963cfcd0f686256f0df14/1555702727793-BIIDWQT9ETCVC5ZCL3YQ/IMG_5704.JPG';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/817YssadhUL.jpg';
        res2.description ='Two brothers meet in the remote Australian outback when the third brother is found dead, in this stunning new standalone novel from New York Times bestseller Jane Harper. Brothers Nathan and Bub Bright meet for the first time in months at the remote fence line separating their cattle ranches in the lonely outback.'
        res2.colors =[];
        res2.brand = 'Thiller';
        res2.company= 'Jane Harper';
        res2.price= 120000;          
      }
      if (res2.id ==="thapaserialnod"){
        res2.name ='Alchemist';
        res2.description ="In the novel, even alchemy, the central symbol of the book, entails coaxing metal to achieve its own Personal Legend to turn into gold. As a result, the idea that all individuals should live in the singular pursuit of their individual dreams emerges as the primary theme of The Alchemist.";
        res2.image[0].url = 'https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg';
        res2.image[1].url = 'https://m.media-amazon.com/images/I/51FXs5gTmdL._SX427_BO1,204,203,200_.jpg';
        res2.image[2].url = 'https://preview.redd.it/gmgauffvzsp51.jpg?auto=webp&s=777b0d5823a7595375d98aba8ce7e2000985a390';
        res2.image[3].url = 'https://qph.cf2.quoracdn.net/main-qimg-a2836d8d27fa80efa751111cf85b576c-lq';
        res2.brand = 'Self-help';
        res2.company= 'Paulo Coelho';
        res2.price= 40000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnog"){
        res2.name ='The Four Agreements';
        res2.description ="According to the author, everything a person does is based on 'agreements' they have made with themselves, with others, with God, and with life itself. In these agreements, people may tell themselves who they are, how to behave, what is possible, and what is impossible.";
        res2.image[0].url = 'https://m.media-amazon.com/images/I/51pnYmWFKwL.jpg';
        res2.image[1].url = 'https://images.squarespace-cdn.com/content/v1/586538d0bebafbe217408ac5/1562514936802-PB0BKFUWB4PF5IO1ACT6/4+agr.jpg';
        res2.image[2].url = 'https://images.squarespace-cdn.com/content/v1/586538d0bebafbe217408ac5/1562514936802-PB0BKFUWB4PF5IO1ACT6/4+agr.jpg';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/51pnYmWFKwL.jpg';
        res2.brand = 'Self-help';
        res2.company= 'Don Miguel Ruiz ';
        res2.price= 60000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnoi"){
        res2.name ='Salt';
        res2.description ="Salt: A World History explores how the everyday mineral we know as table salt has shaped human civilization through the centuries, causing wars and the rise and fall of empires.";
        res2.image[0].url = 'https://m.media-amazon.com/images/I/71DhKhlb6wL.jpg';
        res2.image[1].url = 'https://i.ebayimg.com/images/g/EUIAAOSw30df~2f7/s-l500.jpg';
        res2.image[2].url = 'https://i.pinimg.com/originals/9f/6d/ee/9f6deebda49926cdb12b35e70014c773.jpg';
        res2.image[3].url = 'https://www.loquetlondon.com/blog/wp-content/uploads/8a55bd573413bbc96e69d8e98c6745be.jpg';
        res2.brand = 'History';
        res2.company= 'Mark Kurlansky  ';
        res2.price= 140000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnof"){
        res2.name ='The Communist Manifesto';
        res2.description ="The Communist Manifesto, written by Karl Marx and Friedrich Engels, was first published in 1848. It formed the basis for the modern communist movement as we know it, arguing that capitalism would inevitably self-destruct, to be replaced by socialism and ultimately communism.";
        res2.image[0].url = 'https://m.media-amazon.com/images/I/91JsJJplSKL.jpg';
        res2.image[1].url = 'https://www.bl.uk/learning/timeline/external/commmanifest.jpg';
        res2.image[2].url = 'https://cdn.britannica.com/00/212900-050-6B5C8548/Manifesto-Communist-Party-1847-Karl-Marx-Friederich-Engels.jpg';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/31AfmhYzOXL.jpg';
        res2.brand = 'History';
        res2.company= 'Friedrich Engels and Karl Marx   ';
        res2.price= 200000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnoj"){
        res2.name ='The Time Machine';
        res2.description ="H.G. Wells's The Time Machine offers a dystopian vision of humanity's future. A scientist builds a time machine and travels to future. He finds that humanity has devolved into two races: the childlike Eloi and the monstrous Morlocks. His machine disappears, so he explores the future world.";
        res2.image[0].url = 'https://cloud.firebrandtech.com/api/v2/img/111/9780785841746/XL';
        res2.image[1].url = 'https://m.media-amazon.com/images/I/61ZPzLlTaCL.jpg';
        res2.image[2].url = 'https://www.library.illinois.edu/rbx/hgwells2016/wp-content/uploads/2016/09/TimeMachine_Berkeley_1200.jpg';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/61ZPzLlTaCL.jpg';
        res2.brand = 'SciFi';
        res2.company= 'Don Miguel Ruiz ';
        res2.price= 60000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnoc"){
        res2.name ='Neuromancer';
        res2.description ="Neuromancer by William Gibson was published in 1984 when few people had a computer and almost no one had access to a digital network. Neuromancer can be considered a prophetic work of cyberpunk as it predicted the rise of, and humanity's dependence on, technology.";
        res2.image[0].url = 'https://m.media-amazon.com/images/I/81N1TtCPxOL.jpg';
        res2.image[1].url = 'https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/ab5577ae-82df-4cf4-872a-6047def70ef4/NeuromancerBrazilianCover-Deathburger.jpeg';
        res2.image[2].url = 'https://img.kitapyurdu.com/v1/getImage/fn:11683413/wh:true/wi:800';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/81N1TtCPxOL.jpg';
        res2.brand = 'SciFi';
        res2.company= 'William Gibson';
        res2.price= 100000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnok"){
        res2.name ='Gone Girl';
        res2.description ="Gone Girl by Gillian Flynn centers its story about Nick and Amy Dunne's strained marriage relationship. Nick used to work as a journalist, but loses his job. With his broke financial status, Nick decides to relocate from New York City to his smaller home town, North Carthage.";
        res2.image[0].url = 'https://kbimages1-a.akamaihd.net/7292758c-a84a-4c53-80e4-73dd3a45c404/1200/1200/False/gone-girl.jpg';
        res2.image[1].url = 'https://m.media-amazon.com/images/I/41aEQgTFPoL.jpg';
        res2.image[2].url = 'https://img.kitapyurdu.com/v1/getImage/fn:11683413/wh:true/wi:800';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/81N1TtCPxOL.jpg';
        res2.brand = 'Mystery';
        res2.company= 'Gillian Flynn';
        res2.price= 35000; 
        res2.colors =[];
      }
      if (res2.id ==="thapaserialnoe"){
        res2.name ='Neuromancer';
        res2.description ="Neuromancer by William Gibson was published in 1984 when few people had a computer and almost no one had access to a digital network. Neuromancer can be considered a prophetic work of cyberpunk as it predicted the rise of, and humanity's dependence on, technology.";
        res2.image[0].url = 'https://m.media-amazon.com/images/I/81N1TtCPxOL.jpg';
        res2.image[1].url = 'https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/ab5577ae-82df-4cf4-872a-6047def70ef4/NeuromancerBrazilianCover-Deathburger.jpeg';
        res2.image[2].url = 'https://img.kitapyurdu.com/v1/getImage/fn:11683413/wh:true/wi:800';
        res2.image[3].url = 'https://m.media-amazon.com/images/I/81N1TtCPxOL.jpg';
        res2.brand = 'SciFi';
        res2.company= 'William Gibson';
        res2.price= 100000; 
        res2.colors =[];
      }
     
      
      console.log(res2);
      const manipulatedSingleProduct =res2;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: manipulatedSingleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
