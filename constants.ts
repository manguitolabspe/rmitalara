
import { Member, Category, District, Product, NewsArticle, LocalEvent, ViveTalaraBusiness, ViveTalaraCategory } from './types';

export const MEMBERS: Member[] = [
  { id: 1, name: 'Artesanías Mar y Sol', logoUrl: 'https://picsum.photos/seed/mar-y-sol/200', category: Category.ARTESANIA, district: District.MANCORA, productTypes: ['Tejidos', 'Cerámica'] },
  { id: 2, name: 'Sazón Norteño de Doña Julia', logoUrl: 'https://picsum.photos/seed/dona-julia/200', category: Category.GASTRONOMIA, district: District.PARINAS, productTypes: ['Ceviche', 'Seco de Chabelo'] },
  { id: 3, name: 'Talara Tours & Travel', logoUrl: 'https://picsum.photos/seed/talara-tours/200', category: Category.SERVICIOS, district: District.PARINAS, productTypes: ['Tours a Playas', 'Transporte'] },
  { id: 4, name: 'Filigrana de Catacaos - Sede Talara', logoUrl: 'https://picsum.photos/seed/filigrana/200', category: Category.ARTESANIA, district: District.LA_BREA, productTypes: ['Joyeria de Plata', 'Filigrana'] },
  { id: 5, name: 'Delicias del Mar Lobitos', logoUrl: 'https://picsum.photos/seed/delicias-mar/200', category: Category.GASTRONOMIA, district: District.LOBITOS, productTypes: ['Pescado Frito', 'Chilcano'] },
  { id: 6, name: 'Consultoría y Gestión El Alto', logoUrl: 'https://picsum.photos/seed/consultoria/200', category: Category.SERVICIOS, district: District.EL_ALTO, productTypes: ['Asesoría Contable', 'Formalización'] },
  { id: 7, name: 'Tejedoras de Los Órganos', logoUrl: 'https://picsum.photos/seed/tejedoras/200', category: Category.ARTESANIA, district: District.LOS_ORGANOS, productTypes: ['Sombreros de Paja', 'Bolsos'] },
  { id: 8, name: 'Dulces Tradicionales de Negritos', logoUrl: 'https://picsum.photos/seed/dulces-negritos/200', category: Category.GASTRONOMIA, district: District.LA_BREA, productTypes: ['Alfajores', 'Cocadas'] },
];

export const B2B_PRODUCTS: Product[] = [
  { id: 1, name: 'Juego de Filigrana de Plata', imageUrl: 'https://picsum.photos/seed/b2b-filigrana/400/300', category: 'Joyería' },
  { id: 2, name: 'Canasta Gourmet Norteña', imageUrl: 'https://picsum.photos/seed/b2b-canasta/400/300', category: 'Gastronomía' },
  { id: 3, name: 'Sombrero de Paja Toquilla Fino', imageUrl: 'https://picsum.photos/seed/b2b-sombrero/400/300', category: 'Tejidos' },
  { id: 4, name: 'Cerámica Decorativa Chulucanas', imageUrl: 'https://picsum.photos/seed/b2b-ceramica/400/300', category: 'Artesanía' },
  { id: 5, name: 'Pack de Café Orgánico de la Sierra', imageUrl: 'https://picsum.photos/seed/b2b-cafe/400/300', category: 'Gastronomía' },
  { id: 6, name: 'Chalina de Alpaca Tejida a Mano', imageUrl: 'https://picsum.photos/seed/b2b-chalina/400/300', category: 'Tejidos' },
];

export const NEWS_ARTICLES: NewsArticle[] = [
  { id: 1, title: 'Impacto de la Expo Perú Seafood en la economía local', summary: 'Nuestras socias del rubro gastronómico brillaron en el último evento, abriendo nuevas oportunidades de mercado.', imageUrl: 'https://picsum.photos/seed/news-seafood/400/250', date: 'Julio 15, 2026' },
  { id: 2, title: 'Consejos para recibir a los turistas en Agosto', summary: 'Con la llegada de la temporada alta, preparamos a nuestras emprendedoras para ofrecer el mejor servicio.', imageUrl: 'https://picsum.photos/seed/news-turistas/400/250', date: 'Julio 10, 2026' },
  { id: 3, title: 'RMI Talara y Mincetur: Alianza por la formalización', summary: 'Nuevos decretos y guías para facilitar el camino de la formalización de nuestras socias.', imageUrl: 'https://picsum.photos/seed/news-mincetur/400/250', date: 'Junio 28, 2026' },
];

export const LOCAL_EVENTS: LocalEvent[] = [
    {id: 1, name: 'Aniversario de Talara', date: 'Marzo 16', description: 'Celebraciones cívicas, desfiles y eventos culturales en toda la provincia.'},
    {id: 2, name: 'Fiesta de San Pedro y San Pablo', date: 'Junio 29', description: 'Festividad patronal de los pescadores con procesiones en el mar y ferias gastronómicas.'},
    {id: 3, name: 'Semana Turística de Talara', date: 'Agosto (variable)', description: 'Una semana dedicada a promover los atractivos turísticos, la cultura y la gastronomía de Talara.'},
];

export const VIVE_TALARA_BUSINESSES: ViveTalaraBusiness[] = [
    { id: 1, name: 'Manguito Fast Food', category: ViveTalaraCategory.GASTRONOMIA, imageUrl: 'https://picsum.photos/seed/manguito-ff/400/300', description: 'La sazón norteña en su versión más rápida y deliciosa.', whatsappNumber: '51912345671', viveTalaraUrl: '#' },
    { id: 2, name: 'Cevichería El Point', category: ViveTalaraCategory.GASTRONOMIA, imageUrl: 'https://picsum.photos/seed/el-point/400/300', description: 'El ceviche más fresco, directo del mar de Talara a tu plato.', whatsappNumber: '51912345672', viveTalaraUrl: '#' },
    { id: 3, name: 'Tejidos Sol de Máncora', category: ViveTalaraCategory.ARTESANIA_Y_COMPRAS, imageUrl: 'https://picsum.photos/seed/tejidos-sol/400/300', description: 'Bolsos y sombreros únicos, tejidos a mano con amor.', whatsappNumber: '51912345673', viveTalaraUrl: '#' },
    { id: 4, name: 'Artesanías de La Brea', category: ViveTalaraCategory.ARTESANIA_Y_COMPRAS, imageUrl: 'https://picsum.photos/seed/artesania-brea/400/300', description: 'Recuerdos auténticos que capturan la esencia de nuestra tierra.', whatsappNumber: '51912345674', viveTalaraUrl: '#' },
    { id: 5, name: 'Hospedaje "Mi Refugio"', category: ViveTalaraCategory.HOSPEDAJE, imageUrl: 'https://picsum.photos/seed/mi-refugio/400/300', description: 'Descansa como en casa con la mejor atención personalizada.', whatsappNumber: '51912345675', viveTalaraUrl: '#' },
    { id: 6, name: 'Lobitos Surf Hostal', category: ViveTalaraCategory.HOSPEDAJE, imageUrl: 'https://picsum.photos/seed/lobitos-surf/400/300', description: 'La mejor ola al pie de tu cama. Vive la experiencia surfer.', whatsappNumber: '51912345676', viveTalaraUrl: '#' },
    { id: 7, name: 'Talara Adventure Tours', category: ViveTalaraCategory.SERVICIOS_Y_TOURS, imageUrl: 'https://picsum.photos/seed/talara-adventure/400/300', description: 'Descubre los secretos mejor guardados de las playas del norte.', whatsappNumber: '51912345677', viveTalaraUrl: '#' },
    { id: 8, name: 'Transporte "El Rápido"', category: ViveTalaraCategory.SERVICIOS_Y_TOURS, imageUrl: 'https://picsum.photos/seed/el-rapido/400/300', description: 'Movilidad segura y confiable para que explores sin preocupaciones.', whatsappNumber: '51912345678', viveTalaraUrl: '#' },
];
