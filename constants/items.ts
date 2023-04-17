import { ItemType } from '@/recoil/data';

const items: ItemType[] = [
  {
    index: 1,
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
    index: 2,
    image:
      'https://balanceweek-static.s3.ap-northeast-2.amazonaws.com/product_detail/%5B%E1%84%87%E1%85%A1%E1%84%85%E1%85%B3%E1%84%83%E1%85%A1%E1%86%B0%5D%E1%84%89%E1%85%A9%E1%84%89%E1%85%B3%E1%84%91%E1%85%AE%E1%86%B7%E1%84%8B%E1%85%B3%E1%86%AB%20%E1%84%83%E1%85%A1%E1%86%B0%E1%84%80%E1%85%A1%E1%84%89%E1%85%B3%E1%86%B7%E1%84%89%E1%85%A1%E1%86%AF_%E1%84%8E%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A3%E1%86%BC%E1%84%86%E1%85%A1%E1%84%8B%E1%85%AD_%E1%84%89%E1%85%A1%E1%86%BC%E1%84%89%E1%85%A6%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B54.jpg',
    name: '소스품은 닭가슴살 청양마요',
    brand: '바르닭',
    g: 100,
    nutrition: {
      kcal: 125,
      carbohydrate: 3,
      protein: 22,
      fat: 2.8,
    },
  },
];

export default items;
