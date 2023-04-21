import { ItemType } from './types';

const items: ItemType[] = [
    {
        index: 0,
        image: 'https://sitem.ssgcdn.com/34/99/33/item/1000407339934_i1_1100.jpg',
        name: '더단백 파우더 단백질 쉐이크 곡물맛',
        brand: '빙그래',
        g: 32,
        pcs: 1,
        nutrition: {
            kcal: 110,
            carbohydrate: 8,
            protein: 20,
            fat: 0.9
        }
    },
    {
        index: 1,
        image: 'https://m.barudak.co.kr/web/product/big/202111/809c8ad45412e878b35caefc3c700e02.jpg',
        name: '소스품은 닭가슴살 청양마요',
        brand: '바르닭',
        g: 100,
        pcs: 1,
        nutrition: {
            kcal: 125,
            carbohydrate: 3,
            protein: 22,
            fat: 2.8
            // sugar: 3,
            // salt: 280, //mg
            // transFat: 0,
            // saturatedFat: 0.7,
            // cholesterol: 60, //mg
        }
    },
    {
        index: 2,
        image: 'https://cdn.imweb.me/thumbnail/20221206/59eb114b46b30.png',
        name: '포크 명이나물 덮밥',
        brand: '프레퍼스',
        nutrition: {
            protein: 45
        }
    },
    {
        index: 3,
        image: 'https://cdn-pro-web-241-46.cdn-nhncommerce.com/farmartist_godomall_com/data/goods/20/08/35/1000000060/1000000060_detail_037.jpg',
        name: '구운계란득템',
        brand: 'CU HEYROO',
        g: 35,
        pcs: 1,
        nutrition: {
            kcal: 60,
            carbohydrate: 1,
            protein: 6,
            fat: 3.4
            // sugar: 0,
            // salt: 60, //mg
            // transFat: 0,
            // saturatedFat: 1.1,
            // cholesterol: 75, //mg
        }
    },
    {
        index: 4,
        image: '/images/GD_8801068914061_001.jpg',
        name: '탄단지 모짜치킨 볼',
        brand: '피그인더가든',
        g: 168,
        pcs: 1,
        nutrition: {
            kcal: 297,
            carbohydrate: 17,
            protein: 19,
            fat: 17
            // sugar: 1,
            // salt: 500, //mg
            // transFat: 0,
            // saturatedFat: 6,
            // cholesterol: 40, //mg
        }
    },
    {
        index: 5,
        image: 'https://m.barudak.co.kr/web/product/big/202303/cd3802ac20521d2b749bc5086e31757c.jpg',
        name: '한입 닭가슴살 타코맛',
        brand: '바르닭',
        g: 100,
        pcs: 1,
        nutrition: {
            kcal: 125,
            carbohydrate: 5,
            protein: 20,
            fat: 2.7
            // sugar: 1,
            // salt: 570, //mg
            // transFat: 0,
            // saturatedFat: 0.4,
            // cholesterol: 55, //mg
        }
    },
    {
        index: 6,
        image: 'https://cdn.weeat.kr/product_image/2023/02/06205007_d7a369ab933342f98d453cad8551280f.png',
        name: '참깨 파스타',
        brand: '위잇딜라이트',
        g: 237,
        pcs: 1,
        nutrition: {
            kcal: 500,
            carbohydrate: 64,
            protein: 17,
            fat: 20
            // sugar: 6,
            // salt: 740, //mg
            // transFat: 0.5 미만,
            // saturatedFat: 5,
            // cholesterol: 25, //mg
        }
    },
    {
        index: 7,
        image: '/images/IMG_6962.jpg',
        name: '플레인 탄산수 500ml',
        brand: '배민이지',
        g: 500, // ml
        pcs: 1,
        nutrition: {
            kcal: 0,
            carbohydrate: 0,
            protein: 0,
            fat: 0
            // sugar: 0,
            // salt: 0, //mg
            // transFat: 0,
            // saturatedFat: 0,
            // cholesterol: 0, //mg
        }
    },
    {
        index: 8,
        image: 'https://imagecdn.skstoa.com/goods/704/25283704_cg.jpg',
        name: '부드러운 현미밥',
        brand: '대왕님표 여주쌀밥',
        g: 210,
        pcs: 1,
        nutrition: {
            kcal: 310,
            carbohydrate: 70,
            protein: 5,
            fat: 0.9
            // sugar: 0,
            // salt: 10, //mg
            // transFat: 0,
            // saturatedFat: 0,
            // cholesterol: 0, //mg
        }
    },
    {
        index: 9,
        image: 'https://m.62life.com/images/gdimg/%ED%86%A0%EC%8A%A4%ED%8A%B8%EB%B9%84%EC%8A%A4%EC%BC%93_main1.jpg',
        name: '토스트 비스켓 1개',
        brand: '미주라',
        g: 9,
        pcs: 1,
        nutrition: {
            kcal: 30,
            carbohydrate: 5.9,
            protein: 5,
            fat: 0.5
            // sugar: 0.6,
            // salt: 43.2, //mg
            // transFat: 0,
            // saturatedFat: 0.1,
            // cholesterol: 0, //mg
            // dietaryFiber: 1.17
        }
    },
    {
        index: 10,
        image: 'https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2021/10/27/18/1/5c7bd64b-979c-4201-a43f-5bfa9468cd5d.jpg',
        name: '유기농 그릭요거트 플레인',
        brand: '우유창고',
        g: 100,
        pcs: 1,
        nutrition: {
            kcal: 111,
            carbohydrate: 14,
            protein: 6,
            fat: 3
            // sugar: 6,
            // salt: 71, //mg
            // transFat: 0,
            // saturatedFat: 2,
            // cholesterol: 27, //mg
            // calcium: 202 //mg
        }
    }
];

export default items;
