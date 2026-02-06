
export enum Category {
  ARTESANIA = 'Artesanía',
  GASTRONOMIA = 'Gastronomía',
  SERVICIOS = 'Servicios',
}

export enum District {
  PARINAS = 'Pariñas',
  LOBITOS = 'Lobitos',
  EL_ALTO = 'El Alto',
  MANCORA = 'Máncora',
  LA_BREA = 'La Brea',
  LOS_ORGANOS = 'Los Órganos',
}

export interface Member {
  id: number;
  name: string;
  logoUrl: string;
  category: Category;
  district: District;
  productTypes: string[];
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  category: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
}

export interface LocalEvent {
    id: number;
    name: string;
    date: string;
    description: string;
}

// --- New Types for Vive Talara Page ---

export enum ViveTalaraCategory {
    GASTRONOMIA = 'Gastronomía',
    ARTESANIA_Y_COMPRAS = 'Artesanía y Compras',
    HOSPEDAJE = 'Hospedaje',
    SERVICIOS_Y_TOURS = 'Servicios y Tours',
}

export interface ViveTalaraBusiness {
    id: number;
    name: string;
    category: ViveTalaraCategory;
    imageUrl: string;
    description: string;
    whatsappNumber: string;
    viveTalaraUrl: string;
}
