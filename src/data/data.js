const productos = [
    {
        id: "001924",
        nombre: "Camiseta de Universitario 2024",
        categoria: "ropa",
        precio: 80,
        descripcion: "Camiseta 2024 del equipo más grande del Perú",
        stock: 1,
        imagen: "../public/camiseta-u.jfif",
        genero: "hombre"
    },
    {
        id: "001945",
        nombre: "Short Nike Sportwear",
        categoria: "ropa",
        precio: 40,
        stock: 14,
        descripcion: "Short deportivo para todo tipo de ocasión y con la mejor tecnología",
        imagen: "../public/short-nike.jfif",
        genero: "hombre"
    },
    {
        id: "002023",
        nombre: "Zapatilla Adidas Predator",
        categoria: "calzado",
        precio: 100,
        stock: 3,
        descripcion: "Zapatillas para grass sintético, diseñadas para el mundial México 30",
        imagen: "../public/zapatilla-predator.jpg",
        genero: "hombre"
    },
    {
        id: "001999",
        nombre: "Pelota Eurocopa 2024",
        categoria: "accesorios",
        precio: 20,
        stock: 2,
        descripcion: "Réplica de la pelota oficial de la Eurocopa 2024",
        imagen: "../public/pelota-euro.jfif",
        genero: "ambos"
    },
    {
        id: "002024",
        nombre: "Gafas de natación Arena",
        categoria: "accesorios",
        precio: 40,
        stock: 6,
        descripcion: "Gafas profesionales de natación para todo tipo de competencias",
        imagen: "../public/gafa-arena.jpg",
        genero: "ambos"
    },
    {
        id: "002045",
        nombre: "Gafas de natación Winner",
        categoria: "accesorios",
        precio: 10,
        stock: 10,
        descripcion: "Gafas amateurs de natación para todo tipo de competencias",
        imagen: "../public/gafa-winner.jpg",
        genero: "ambos"
    },
    {
        id: "002019",
        nombre: "Medias antideslizantes",
        categoria: "ropa",
        precio: 10,
        stock: 8,
        descripcion: "Medias cortas antideslizantes con certificación grip",
        imagen: "../public/media-anti.jpg",
        genero: "ambos"
    },
    {
        id: "002015",
        nombre: "Mangas de compresión",
        categoria: "ropa",
        precio: 30,
        stock: 5,
        descripcion: "Mangas licradas con protección anti UV",
        imagen: "../public/polo-compr.jfif",
        genero: "hombre"
    },
    {
        id: "002014",
        nombre: "Montura deportiva",
        categoria: "accesorios",
        precio: 60,
        stock: 10,
        descripcion: "Montura deportiva para deportes de contacto",
        imagen: "../public/lente-fut.avif",
        genero: "ambos"
    },
    {
        id: "001969",
        nombre: "Leggins Adidas",
        categoria: "ropa",
        precio: 80,
        stock: 3,
        descripcion: "Leggins deportivos para mujer con tecnología antitranspiración",
        imagen: "../public/leggins.jpg",
        genero: "mujer"
    },
    {
        id: "002000",
        nombre: "Giannis Immortality 3",
        categoria: "calzado",
        precio: 80,
        stock: 4,
        descripcion: "Zapatillas oficiales de Giannis Antetokoumpo para practicar basket y voley",
        imagen: "../public/giannis.jfif",
        genero: "ambos"
    },
    {
        id: "001000",
        nombre: "Pelota para pilates",
        categoria: "accesorios",
        precio: 20,
        stock: 9,
        descripcion: "Pelota de 45 cm de diámetro, especial para pilates",
        imagen: "../public/pelota-pilates.jpg",
        genero: "mujer"
    },
    {
        id: "001040",
        nombre: "Top deportivo Adidas",
        categoria: "ropa",
        precio: 40,
        stock: 5,
        descripcion: "Top Adidas para todo tipo de deportes y ajuste especial",
        imagen: "../public/top-deportivo.jpg",
        genero: "mujer"
    },
    {
        id: "001060",
        nombre: "Traje de baño para mujer",
        categoria: "ropa",
        precio: 30,
        stock: 7,
        descripcion: "Traje de baño para mujer",
        imagen: "../public/traje-mujer.jpg",
        genero: "mujer"
    },
    {
        id: "002020",
        nombre: "Set de pesas",
        categoria: "accesorios",
        precio: 60,
        stock: 6,
        descripcion: "Set de 4 pesas de 15 kg, 25 kg, 30 kg y 40 kg",
        imagen: "../public/pesas.jpg",
        genero: "ambos"
    },
    {
        id: "002525",
        nombre: "Maletín deportivo para hombres",
        categoria: "accesorios",
        precio: 70,
        stock: 12,
        descripcion: "Maletín deportivo mediano de hombre para ocasiones deportivas",
        imagen: "../public/maleta-hombre.avif",
        genero: "hombre"
    },
    {
        id: "002424",
        nombre: "Maletín deportivo para mujeres",
        categoria: "accesorios",
        precio: 70,
        stock: 10,
        descripcion: "Maletín deportivo mediano de mujer para ocasiones deportivas",
        imagen: "../public/maleta-mujer.jpg",
        genero: "mujer"
    },
    {
        id: "009090",
        nombre: "Falda de tenis",
        categoria: "ropa",
        precio: 40,
        stock: 4,
        descripcion: "Falda blanca para practicar tenis",
        imagen: "../public/falda-tenis.avif",
        genero: "mujer"
    },
    {
        id: "001515",
        nombre: "Raqueta de tenis Wilson",
        categoria: "accesorios",
        precio: 100,
        stock: 3,
        descripcion: "Raqueta profesional unisex para tenis",
        imagen: "../public/raqueta-wilson.jfif",
        genero: "ambos"
    },
    {
        id: "001234",
        nombre: "Vincha Adidas",
        categoria: "accesorios",
        precio: 10,
        stock: 5,
        descripcion: "Vincha deportiva con tecnología antitranspiración",
        imagen: "../public/vincha.avif",
        genero: "ambos"
    },
    {
        id: "001235",
        nombre: "Paquete de pelotas Wilson",
        categoria: "accesorios",
        precio: 20,
        stock: 5,
        descripcion: "Lata de 7 pelotas de tenis",
        imagen: "../public/pelotas-tenis.jpg",
        genero: "ambos"
    },
    {
        id: "000808",
        nombre: "Zapatilla Runner ASICS Mujer",
        categoria: "calzado",
        precio: 120,
        stock: 3,
        descripcion: "Zapatillas de mujer especializadas para correr",
        imagen: "../public/run-mujer.jpg",
        genero: "mujer"
    },
    {
        id: "006565",
        nombre: "Adidas Ultraboost Hombre",
        categoria: "calzado",
        precio: 120,
        stock: 2,
        descripcion: "Zapatillas de hombre especializadas para correr",
        imagen: "../public/adidas-ultraboost.avif",
        genero: "hombre"
    },
    {
        id: "000809",
        nombre: "Balon de voley Mikasa",
        categoria: "accesorio",
        precio: 100,
        stock: 7,
        descripcion: "Pelota profesional de voley para competencias oficiales",
        imagen: "../public/balon-mikasa.jpg",
        genero: "ambos"
    },
    {
        id: "000810",
        nombre: "Cinta de vendaje",
        categoria: "accesorio",
        precio: 10,
        stock: 6,
        descripcion: "Cinta de vendaje con grip reforzado",
        imagen: "../public/cinta-vendaje.jfif",
        genero: "ambos"
    },
    {
        id: "000811",
        nombre: "Rodilleras para voley",
        categoria: "accesorio",
        precio: 10,
        stock: 6,
        descripcion: "Rodilleras para voley",
        imagen: "../public/rodilleras.avif",
        genero: "ambos"
    },
    {
        id: "000812",
        nombre: "Camiseta Alemania 1990",
        categoria: "ropa",
        precio: 50,
        stock: 2,
        descripcion: "Camiseta de Alemania del año 1990",
        imagen: "../public/alemania90.jpeg",
        genero: "hombre"
    },
    {
        id: "000813",
        nombre: "Pelota de basket Wilson",
        categoria: "accesorio",
        precio: 80,
        stock: 3,
        descripcion: "Pelota profesional de basket para competencias oficiales",
        imagen: "../public/pelota-basket.jpg",
        genero: "ambos"
    },
    {
        id: "000814",
        nombre: "Short deportivo para mujer",
        categoria: "ropa",
        precio: 30,
        stock: 6,
        descripcion: "Short deportivo para mujer con tecnología antitranspiración",
        imagen: "../public/short-mujer.avif",
        genero: "mujer"
    },
    {
        id: "000815",
        nombre: "Tomatodo para mujer",
        categoria: "accesorio",
        precio: 20,
        stock: 7,
        descripcion: "Tomatodo para mujer de 700 ml",
        imagen: "../public/tomatodo-mujer.avif",
        genero: "mujer"
    }
]

const condicion = true

const getProductos = () => {
    return(new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
    }))
}

export {getProductos}