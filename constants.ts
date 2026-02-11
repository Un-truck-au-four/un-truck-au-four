import { MenuCategory } from './types';

export const PHONE_NUMBER = "06 43 03 75 72";
export const SOCIAL_FACEBOOK = "https://www.facebook.com/untruckaufour";
export const SOCIAL_INSTAGRAM = "https://instagram.com/untruckaufour";
export const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sa=X&sca_esv=074920bdea4960d4&sxsrf=ANbL-n77KFeIUSG98SGQt0xGHQFhHn7e1g:1770665826229&q=Un+truck+au+four+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2tDA2N7Y0NDYxszAwNzAwMjMx3MDI-IpRNDRPoaSoNDlbIbFUIS2_tEjBsSyzeBErdnEA-ExT-0oAAAA&rldimm=9837391346807002641&tbm=lcl&hl=fr-FR&ved=2ahUKEwjQhNqclM2SAxUoOPsDHbbeC28Q9fQKegQIShAG&biw=1745&bih=866&dpr=1.1#lkt=LocalPoiReviews";

/* 
  INSTRUCTIONS PHOTOS :
  Créez un dossier 'images' à la racine du projet et ajoutez-y vos photos renommées comme suit :
  - pizza-margherita.jpg
  - pizza-diavola.jpg
  - pizza-regina.jpg
  - pizza-mortadelle.jpg
  - pizza-parma.jpg
  - pizza-poulet.jpg
  - pizza-vegetarienne.jpg
  - pizza-campagnarde.jpg
  - pizza-thon.jpg
  - pizza-cannibale.jpg
  - tf-normale.jpg
  - dessert-chausson.jpg
  - dessert-tiramisu.jpg
  - tableau-privatisation.jpg
*/

export const MENU_DATA: MenuCategory[] = [
  {
    title: "Les Pizzas Italiennes",
    items: [
      {
        id: "margherita",
        name: "Margherita",
        price: 9.50,
        ingredients: "Tomate, Mozzarella Fiordilatte, Basilic frais, Huile d'olive",
        image: "/img/margaritha.jpg",
        tag: "Classique"
      },
      {
        id: "diavola",
        name: "Diavola",
        price: 11.00,
        ingredients: "Tomate, Mozzarella Fiordilatte, Spianata piquante, Basilic frais",
        image: "/img/diavola.jpg",
      },
      {
        id: "regina",
        name: "Regina",
        price: 11.00,
        ingredients: "Tomate, Mozza, Jambon blanc, Champignons frais",
        image: "/img/regina.jpg"
      },
      {
        id: "sicilienne",
        name: "Sicilienne",
        price: 13.00,
        ingredients: "Tomate, Mozza, Anchois, Câpres, Olives",
        image: "/img/sicilienne.jpg" 
      },
      {
        id: "4fromages",
        name: "Quatre Fromages",
        price: 13.50,
        ingredients: "Tomate, Mozza, Gorgonzola AOP, Parmigiano, Provola Fumé",
        image: "/img/4fromages.jpg" 
      },
      {
        id: "batista",
        name: "Batista",
        price: 15.00,
        ingredients: "Crème, Mozza, Provola fumée, Gorgonzola, Parmigiano, Spianata piquante",
        image: "/img/Batista.jpg" 
      },
      {
        id: "parma",
        name: "Parma",
        price: 15.50,
        ingredients: "Tomate, Mozza, Jambon de parme, Roquette, Copeaux de Grana, Balsamique",
        image: "img/parma.jpg"
      },
      {
        id: "mortadelle",
        name: "Mortadelle",
        price: 16.00,
        ingredients: "Pesto pistache, Mozza, Mortadelle, Burratta, Truffe",
        image: "/img/mortadelles.jpg",
        tag: "Best-Seller"
      },
      {
        id: "imperatrice",
        name: "Imperatrice",
        price: 16.00,
        ingredients: "Tomate, Mozza, Jambon blanc, Stracciatella, Truffe",
        image: "/img/imperatrice.jpg", 
        tag: "Gourmet"
      }
    ]
  },
  {
    title: "Les Incontournables",
    items: [
      {
        id: "poulet",
        name: "Poulet",
        price: 12.50,
        ingredients: "Crème, Mozza, Poulet, Curry",
        image: "/img/poulet.jpg"
      },
      {
        id: "vegetarienne",
        name: "Végétarienne",
        price: 13.50,
        ingredients: "Tomate, Mozza, Oignons, Poivron, Champignons, Olives",
        image: "/img/vegetarienne.png",
        tag: "Végétarienne"
      },
      {
        id: "campagnarde",
        name: "Campagnarde",
        price: 12.50,
        ingredients: "Tomate, Mozza, Lardons, Oignons, Filet de crème",
        image: "/img/campagnarde.jpg"
      },
      {
        id: "oriental",
        name: "Oriental",
        price: 12.50,
        ingredients: "Tomate, Mozza, Merguez, Poivrons, Olives",
        image: "/img/orientale.jpg" 
      },
      {
        id: "bolo",
        name: "Bolo",
        price: 12.50,
        ingredients: "Tomate, Mozza, Viande Hachée, Oignons, Olives",
        image: "/img/bolo.jpg"
      },
      {
        id: "thon",
        name: "Thon",
        price: 13.50,
        ingredients: "Tomate, Mozza, Thon, Oignons, Filet de crème",
        image: "/img/thon.jpg"
      },
      {
        id: "samourai",
        name: "Samouraï",
        price: 15.00,
        ingredients: "Crème, Mozza, Oignons, Poulet, Merguez, Sauce samouraï",
        image: "/img/samourai.jpg"
      },
      {
        id: "cannibale",
        name: "Cannibale",
        price: 16.00,
        ingredients: "Tomate, Mozza, Merguez, Poulet, Viande Hachée, Olives, Paprika",
        image: "/img/cannibale.jpg",
        tag: "Maxi Viande"
      }
    ]
  },
  {
    title: "Nos Tartes Flambées (Feu de Bois)",
    items: [
      {
        id: "tf-normale",
        name: "Normale",
        price: 9.00,
        ingredients: "Crème, Lardons, Oignons",
        image: "/img/normal.jpg",
        tag: "Alsace"
      },
      {
        id: "tf-gratinee",
        name: "Gratinée",
        price: 10.00,
        ingredients: "Crème, Lardons, Oignons, Emmental râpé",
        image: "/img/gratinee.jpg",
        tag: "Alsace"
      },
    ]
  },
  {
    title: "Desserts Maison",
    items: [
      {
        id: "chausson",
        name: "Chausson Nutella",
        price: 8.00,
        ingredients: "Délicieux chausson cuit au feu de bois fourré au Nutella",
        image: "/img/chausson-nutella.jpg",
        tag: "Feu de Bois"
      },
      {
        id: "tiramisu",
        name: "Tiramisu Maison",
        price: 4.00,
        ingredients: "La recette traditionnelle italienne",
        image: "/img/tiramisu.jpg",
        tag: "Fait Maison"
      }
    ]
  },
  {
    title: "Boissons Fraîches",
    items: [
      {
        id: "soda-33",
        name: "Sodas (33cl)",
        price: 2.50,
        ingredients: "Coca-Cola, Coca Zéro, Orangina, Ice Tea, Fanta",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: "eau-50",
        name: "Eau (50cl)",
        price: 1.50,
        ingredients: "Eau plate ou gazeuse",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: "biere",
        name: "Bière (25cl/33cl)",
        price: 3.00,
        ingredients: "Heineken, Météor",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      {
        id: "vin",
        name: "Vin (Verre)",
        price: 3.00,
        ingredients: "Lambrusco, Rosé ou Rouge",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    ]
  }
];