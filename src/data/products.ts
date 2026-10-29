export type Category = 'Carros RC' | 'Juguetes' | 'Flores artificiales'
export interface Product { id: string; name: string; category: Category; description: string; price: number; image: string; badge?: string; isNew?: boolean }
export const products: Product[] = [
  {id:'rally-blue',name:'Rally RC Blue Edition',category:'Carros RC',description:'Un estilo deportivo que invita a jugar y explorar.',price:129.90,image:'/images/rally-blue.svg',badge:'Favorito del catálogo'},
  {id:'rally-orange',name:'Rally RC Orange Race',category:'Carros RC',description:'Actitud de rally y un color que se roba las miradas.',price:149.90,image:'/images/rally-orange.svg',isNew:true,badge:'Novedad'},
  {id:'rally-red',name:'Rally RC Red Spirit',category:'Carros RC',description:'Diversión sobre ruedas con espíritu de aventura.',price:189.90,image:'/images/rally-red.svg'},
  {id:'rally-green',name:'Rally RC Adventure',category:'Carros RC',description:'Una propuesta llena de color para disfrutar jugando.',price:119.90,image:'/images/rally-green.svg',isNew:true},
  {id:'rally-white',name:'Rally RC Street',category:'Carros RC',description:'Diseño deportivo para imaginar nuevas carreras.',price:99.90,image:'/images/rally-white.svg'},
  {id:'blocks',name:'Bloques de colores',category:'Juguetes',description:'Piezas ilustrativas para construir grandes ideas.',price:49.90,image:'/images/blocks.svg',badge:'Para imaginar'},
  {id:'bear',name:'Osito de peluche',category:'Juguetes',description:'Un detalle tierno para regalar una sonrisa.',price:39.90,image:'/images/bear.svg'},
  {id:'flowers-pink',name:'Ramo de flores rosadas',category:'Flores artificiales',description:'Un toque de color para tus espacios favoritos.',price:29.90,image:'/images/flowers-pink.svg',isNew:true},
  {id:'flowers-orange',name:'Arreglo de flores cálidas',category:'Flores artificiales',description:'Detalles que llenan de alegría cualquier rincón.',price:44.90,image:'/images/flowers-orange.svg'},
  {id:'toy-car',name:'Carrito de juguete',category:'Juguetes',description:'Pequeñas ruedas para grandes historias.',price:19.90,image:'/images/rally-yellow.svg'},
]
