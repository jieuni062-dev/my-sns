export type Post = {
  id: number
  author: string
  content: string
  images: string[]
  created_at: string
}

// 게시물마다 다른 단어(seed)로 사진 주소를 count 장 만든다
function photos(seed: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `https://picsum.photos/seed/${seed}-${i + 1}/600/600`,
  )
}

// id 1번이 가장 최신 글
export const samplePosts: Post[] = [
  {
    id: 1,
    author: '소금빵러버',
    content: '성수동 골목 빵집 첫 방문. 소금빵이 11시에 나온다고 해서 맞춰 갔어요. 겉은 바삭하고 바닥은 버터에 튀겨진 것처럼 고소해요.',
    images: photos('saltbread', 4),
    created_at: '2026-10-10T11:20:00+09:00',
  },
  {
    id: 2,
    author: '바게트한입',
    content: '오늘의 수확. 바게트 하나.',
    images: photos('baguette', 1),
    created_at: '2026-10-10T08:45:00+09:00',
  },
  {
    id: 3,
    author: '동네빵순이',
    content: '망원동에 새로 생긴 빵집을 드디어 다녀왔어요.\n문 열기 20분 전에 도착했는데 벌써 줄이 있더라고요. 크루아상은 겹이 아주 얇고 바삭했고, 버터 향이 진해서 하나만 먹어도 든든했어요. 같이 산 무화과 캄파뉴는 다음 날 아침에 구워 먹었는데 그게 더 맛있었습니다.\n사장님이 빵 나오는 시간을 칠판에 적어 두시니 가기 전에 꼭 확인하세요. 다음에는 식빵을 사러 다시 갈 거예요.',
    images: photos('campagne', 2),
    created_at: '2026-10-09T17:05:00+09:00',
  },
  {
    id: 4,
    author: '크루아상수집가',
    content: '연남동 크루아상 비교 3탄. 오늘 간 곳은 결이 제일 또렷했어요. 반으로 가르면 벌집 모양이 그대로 보여요.',
    images: photos('croissant', 3),
    created_at: '2026-10-09T10:30:00+09:00',
  },
  {
    id: 5,
    author: '식빵굽는고양이',
    content: '우리 동네 식빵 맛집은 오후 2시에 두 번째 판이 나와요. 따뜻할 때 손으로 찢어 먹는 게 최고.',
    images: photos('milkbread', 2),
    created_at: '2026-10-08T14:10:00+09:00',
  },
  {
    id: 6,
    author: '단팥이좋아',
    content: '40년 된 시장 빵집의 단팥빵. 팥이 빵보다 많아요.',
    images: photos('redbean', 1),
    created_at: '2026-10-08T09:20:00+09:00',
  },
  {
    id: 7,
    author: '빵지순례자',
    content: '서촌 빵집 세 곳을 하루에 돌았어요. 첫 집은 스콘, 둘째 집은 치아바타, 셋째 집은 에그타르트가 대표 메뉴였어요. 걸어서 다 갈 수 있는 거리라 순례 코스로 추천합니다.',
    images: photos('seochon', 4),
    created_at: '2026-10-07T16:40:00+09:00',
  },
  {
    id: 8,
    author: '아침엔베이글',
    content: '출근길에 들르는 베이글 가게. 무화과 크림치즈를 듬뿍 발라 주셔서 한 개로 아침이 해결돼요.',
    images: photos('bagel', 2),
    created_at: '2026-10-07T07:50:00+09:00',
  },
  {
    id: 9,
    author: '소금빵러버',
    content: '소금빵 순례 12번째 집. 여기는 소금이 굵어서 씹을 때마다 짭짤함이 톡톡 터져요.',
    images: photos('saltroll', 3),
    created_at: '2026-10-06T12:15:00+09:00',
  },
  {
    id: 10,
    author: '통밀한조각',
    content: '통밀 100% 식사빵을 파는 작은 가게를 찾았어요. 묵직하고 시큼한 맛이 치즈랑 잘 어울려요.',
    images: photos('wholewheat', 1),
    created_at: '2026-10-05T18:30:00+09:00',
  },
  {
    id: 11,
    author: '동네빵순이',
    content: '비 오는 날에는 갓 나온 크림빵이죠. 우유 크림이 가득 차서 한 입 베어 물면 옆으로 흘러나와요.',
    images: photos('creambun', 2),
    created_at: '2026-10-05T11:00:00+09:00',
  },
  {
    id: 12,
    author: '버터향기',
    content: '합정 골목 끝 빵집의 휘낭시에. 가장자리가 캐러멜처럼 바삭해요. 선물용으로 여섯 개 포장했어요.',
    images: photos('financier', 3),
    created_at: '2026-10-04T15:25:00+09:00',
  },
  {
    id: 13,
    author: '바게트한입',
    content: '바게트는 사자마자 끝을 뜯어 먹어야 해요. 집에 오니 반만 남았습니다.',
    images: photos('crust', 1),
    created_at: '2026-10-04T09:10:00+09:00',
  },
  {
    id: 14,
    author: '주말빵투어',
    content: '토요일 아침 을지로 빵 투어. 오래된 인쇄소 골목 사이에 빵집이 숨어 있어요. 간판이 작아서 두 번 지나쳤어요.',
    images: photos('euljiro', 4),
    created_at: '2026-10-03T10:05:00+09:00',
  },
  {
    id: 15,
    author: '크루아상수집가',
    content: '아몬드 크루아상은 전날 남은 크루아상으로 만든다는 걸 오늘 처음 알았어요. 그래서 더 촉촉한가 봐요.',
    images: photos('almond', 2),
    created_at: '2026-10-02T13:40:00+09:00',
  },
  {
    id: 16,
    author: '식빵굽는고양이',
    content: '밤식빵 속 밤이 이렇게 큰 건 처음 봐요.',
    images: photos('chestnut', 1),
    created_at: '2026-10-02T08:30:00+09:00',
  },
  {
    id: 17,
    author: '빵지순례자',
    content: '부암동 언덕 위 빵집. 올라가는 길이 힘들지만 창밖으로 산이 보이는 자리에서 먹는 스콘은 그만한 값을 해요.',
    images: photos('buam', 3),
    created_at: '2026-10-01T16:20:00+09:00',
  },
  {
    id: 18,
    author: '단팥이좋아',
    content: '앙버터를 처음 먹어 봤어요. 차가운 버터와 달콤한 팥, 바삭한 바게트가 이렇게 잘 맞을 줄 몰랐어요.',
    images: photos('angbutter', 2),
    created_at: '2026-09-30T12:50:00+09:00',
  },
  {
    id: 19,
    author: '아침엔베이글',
    content: '동네에 새 베이글 가게가 생겼어요. 플레인, 어니언, 블루베리를 하나씩 샀는데 어니언이 1등이에요. 쪽파 크림치즈와 같이 드세요.',
    images: photos('onionbagel', 4),
    created_at: '2026-09-29T09:15:00+09:00',
  },
  {
    id: 20,
    author: '통밀한조각',
    content: '사워도우를 직접 키운 효모로 굽는 집. 겉은 단단하고 속은 구멍이 숭숭 뚫려 있어요.',
    images: photos('sourdough', 2),
    created_at: '2026-09-28T17:45:00+09:00',
  },
  {
    id: 21,
    author: '버터향기',
    content: '까눌레는 겉이 거의 탄 것처럼 보여야 제대로라고 해요. 이 집이 딱 그래요.',
    images: photos('canele', 1),
    created_at: '2026-09-28T11:30:00+09:00',
  },
  {
    id: 22,
    author: '주말빵투어',
    content: '일요일에는 문 닫는 빵집이 많아서 미리 확인해야 해요. 오늘은 세 곳 중 한 곳만 열려 있었어요. 그래도 시나몬롤은 건졌습니다.',
    images: photos('cinnamon', 3),
    created_at: '2026-09-27T14:00:00+09:00',
  },
  {
    id: 23,
    author: '동네빵순이',
    content: '시장 입구 꽈배기 집. 설탕을 묻히자마자 건네주셔서 손이 뜨거웠어요. 세 개에 이천 원.',
    images: photos('twist', 2),
    created_at: '2026-09-26T16:10:00+09:00',
  },
  {
    id: 24,
    author: '소금빵러버',
    content: '명란 소금빵이라는 걸 발견했어요. 짭짤한 맛이 두 배.',
    images: photos('pollack', 1),
    created_at: '2026-09-25T12:35:00+09:00',
  },
  {
    id: 25,
    author: '크루아상수집가',
    content: '뺑오쇼콜라와 크루아상을 나란히 놓고 찍어 봤어요. 초콜릿이 두 줄 들어 있으면 합격입니다.',
    images: photos('chocolat', 3),
    created_at: '2026-09-24T10:20:00+09:00',
  },
  {
    id: 26,
    author: '빵지순례자',
    content: '대전까지 빵 사러 다녀왔어요. 튀김소보로는 기차 안에서 못 참고 하나 먹었고, 부추빵은 집에 와서 데워 먹었어요. 줄은 30분 정도 섰어요.',
    images: photos('daejeon', 4),
    created_at: '2026-09-23T19:00:00+09:00',
  },
  {
    id: 27,
    author: '식빵굽는고양이',
    content: '옥수수 식빵으로 만든 토스트. 버터만 발라도 달아요.',
    images: photos('corn', 2),
    created_at: '2026-09-22T08:40:00+09:00',
  },
  {
    id: 28,
    author: '버터향기',
    content: '마들렌 배꼽이 볼록 올라온 걸 보면 기분이 좋아져요. 레몬 글레이즈가 얇게 덮여 있어요.',
    images: photos('madeleine', 1),
    created_at: '2026-09-21T15:15:00+09:00',
  },
  {
    id: 29,
    author: '아침엔베이글',
    content: '포카치아에 올리브와 로즈마리가 올라가 있어요. 올리브유에 찍어 먹으니 식사로도 충분해요.',
    images: photos('focaccia', 3),
    created_at: '2026-09-20T12:25:00+09:00',
  },
  {
    id: 30,
    author: '주말빵투어',
    content: '빵지순례 첫 기록. 집에서 5분 거리 빵집부터 시작합니다. 매일 지나치기만 했는데 모카번이 이렇게 맛있는 줄 몰랐어요.',
    images: photos('mochabun', 2),
    created_at: '2026-09-19T10:00:00+09:00',
  },
]
