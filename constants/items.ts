import { ItemType } from '@/recoil/data';

const items: ItemType[] = [
  {
    index: 0,
    image: 'https://sitem.ssgcdn.com/34/99/33/item/1000407339934_i1_1100.jpg',
    name: '더단백 파우더 단백질 쉐이크 곡물맛',
    brand: '빙그래',
    g: 32,
    nutrition: {
      kcal: 110,
      carbohydrate: 8,
      protein: 20,
      fat: 0.9,
    },
  },
  {
    index: 1,
    image:
      'https://m.barudak.co.kr/web/product/big/202111/809c8ad45412e878b35caefc3c700e02.jpg',
    name: '소스품은 닭가슴살 청양마요',
    brand: '바르닭',
    g: 100,
    nutrition: {
      kcal: 125,
      carbohydrate: 3,
      protein: 22,
      fat: 2.8,
      // sugar: 3,
      // salt: 280,
      // transFat: 0,
      // saturatedFat: 0.7,
      // cholesterol: 60,
    },
  },
  {
    index: 2,
    image: 'https://cdn.imweb.me/thumbnail/20221206/59eb114b46b30.png',
    name: '포크 명이나물 덮밥',
    brand: '프레퍼스',
    nutrition: {
      protein: 45,
    },
  },
  {
    index: 3,
    image:
      'https://cdn-pro-web-241-46.cdn-nhncommerce.com/farmartist_godomall_com/data/goods/20/08/35/1000000060/1000000060_detail_037.jpg',
    name: '구운계란득템',
    brand: 'CU HEYROO',
    g: 35,
    nutrition: {
      kcal: 60,
      carbohydrate: 1,
      protein: 6,
      fat: 3.4,
      // sugar: 0,
      // salt: 60,
      // transFat: 0,
      // saturatedFat: 1.1,
      // cholesterol: 75,
    },
  },
];

export default items;
