const products = [
    {
        id: '1',
        name: 'Exprimidor para el limón 02',
        price: 2200,
        category: 'Aluminio Fundido',
        img: 'https://ferreteriavidri.com/images/items/large/85388.jpg',
        imgDescription: 'exprimidor para el limon 02',
        stock: 3866,
        description: 'medidas: 5.5 x 18 x 3.5cms, código: 114002'
    },
    {
        id: '2',
        name: 'Cuchara de palo 02',
        price: 2900,
        category: 'Madera',
        img: 'https://falabella.scene7.com/is/image/Falabella/gsc_120706706_2649271_2?wid=800&hei=800&qlt=70',
        imgDescription: 'cuchara de palo 02',
        stock: 206,
        description: 'medidas: 5.5 x 26 x 1.5cms, código: 273010'
    },
    {
        id: '3',
        name: 'Pocillo en aluminio repujado',
        price: 5500,
        category: 'Aluminio Repujado',
        img: 'https://aluminiosalfusa.com/wp-content/uploads/2022/03/jarra-10.jpg',
        imgDescription: 'pocillo en aluminio repujado',
        stock: 231,
        description: 'medidas: 11 x 15 x 09cms, código: 108005'
    },
    {
        id: '4',
        name: 'Perol con tapa y perilla 04',
        price: 8500,
        category: 'Aluminio Fundido',
        img: 'https://www.almacenesla13.com/cdn/shop/products/5861021331-10_876bb47d-d356-496a-b14e-fe5bdf19236d.png?v=1667790270&width=535',
        imgDescription: 'perol con tapa y perilla 04',
        stock: 248,
        description: 'medidas: 19 x 23 x 12cms, código: 125002'
    },
    {
        id: '5',
        name: 'Rodillo 01',
        price: 4900,
        category: 'Madera',
        img: 'https://www.todohogar.com/60779-large_default/rodillo-de-madera-catg-4098-rodillo-de-madera.jpg',
        imgDescription: 'rodillo 01',
        stock: 144,
        description: 'medidas: 04 x 30 x 04cms, código: 273022'
    },
    {
        id: '6',
        name: 'Juego de moldes para torta redondos x3',
        price: 14900,
        category: 'Aluminio Repujado',
        img: 'https://i.linio.com/p/b5640f17bf253e1ce04b19e70f60b1c4-product.jpg',
        imgDescription: 'juego de moldes para torta redondos x3',
        stock: 63,
        description: 'medidas: 1/2lb, 3/4lb, 1lb, código: 140002'
    },
    {
        id: '7',
        name: 'Cucharon con el mango en aluminio 10',
        price: 4900,
        category: 'Aluminio Fundido',
        img: 'https://alumaronline.com/wp-content/uploads/CUCH8CA.jpg',
        imgDescription: 'cucharon con el mango en aluminio 10',
        stock: 1485,
        description: 'medidas: 10 x 35.5 x 07cms, código: 110002'
    },
    {
        id: '8',
        name: 'Mortero 03',
        price: 8600,
        category: 'Madera',
        img: 'https://tiendaarticuloshosteleria.com/199-large_default/mortero-madera.jpg',
        imgDescription: 'mortero 03',
        stock: 48,
        description: 'medidas: 09 x 13.5 x 21cms, código: 273021'
    },
    {
        id: '9',
        name: 'Juego de ollas 14/22 en aluminio repujado mate',
        price: 23900,
        category: 'Aluminio Repujado',
        img: 'https://falabella.scene7.com/is/image/FalabellaCO/gsc_120197878_2594658_1?wid=800&hei=800&qlt=70',
        imgDescription: 'juego de ollas 14/22 en aluminio repujado mate',
        stock: 27,
        description: 'medidas: ref14, ref16, ref18, ref20, ref22, código: 140005'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}