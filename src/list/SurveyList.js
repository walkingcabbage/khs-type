const surveyList = [{//1
    id: 1,
    question: 'MBTI가 I로 시작한다.',
    answers: [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "아니다",
        score: -1
    }]
},
{//2
    id: 2,
    question: '소주는 후레시가 좋다.',
    answers: [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "보통이다",
        score: 0
    }, {
        id: 3,
        text: "아니다",
        score: -1
    }]
},
{//3
    id: 3,
    question: '남들이 모르는 나만의 음악/가수가 있다.',
    answers: [{
        id: 1,
        text: "즐겨듣는다",
        score: 1
    }, {
        id: 2,
        text: "보통이다",
        score: 0
    }, {
        id: 3,
        text: "아니다",
        score: -1
    }]
},
{//4
    id: 4,
    question: '브릿팝을 좋아한다.',
    answers: [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "뭐야그게",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//5
    id: 5,
    question: '사람이 많을 걸 싫어한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//6
    id: 6,
    question: '모르는 사람과 만나는 것을 꺼려한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//7
    id: 7,
    question: '가족과 친하다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//8
    id: 8,
    question: '술자리보단 술이 좋다',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//9
    id: 9,
    question: '로맨틱 코미디 장르를 좋아한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//10
    id: 10,
    question: '고양이를 좋아한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//11
    id: 11,
    question: '애니메이션을',
    answers:  [{
        id: 1,
        text: "자주본다",
        score: 1
    }, {
        id: 2,
        text: "가끔본다",
        score: 0
    }, {
        id: 3,
        text: "안본다",
        score: -1
    }]
},
{//12
    id: 12,
    question: '혼자 영화를 보거나 여행가는 것을 좋아한다',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//13
    id: 13,
    question: '야구장 실관을',
    answers:  [{
        id: 1,
        text: "간다",
        score: 1
    }, {
        id: 2,
        text: "안가봤다",
        score: 0
    }, {
        id: 3,
        text: "갈일없다",
        score: -1
    }]
},
{//14
    id: 14,
    question: '번데기탕을',
    answers:  [{
        id: 1,
        text: "좋아한다",
        score: 1
    }, {
        id: 2,
        text: "보통이다",
        score: 0
    }, {
        id: 3,
        text: "안먹는다",
        score: -1
    }]
},
{//15
    id: 15,
    question: '과일빙수를 ',
    answers:  [{
        id: 1,
        text: "좋아한다",
        score: 1
    }, {
        id: 2,
        text: "보통이다",
        score: 0
    }, {
        id: 3,
        text: "안먹는다",
        score: -1
    }]
},
{//16
    id: 16,
    question: '뉴스를 자주 본다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//17
    id: 17,
    question: '디테일한 일정이 싫다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//18
    id: 18,
    question: '산책을 좋아한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//19
    id: 19,
    question: '스키나 보드를 탄다.',
    answers:  [{
        id: 1,
        text: "즐긴다",
        score: 1
    }, {
        id: 2,
        text: "보통이다",
        score: 0
    }, {
        id: 3,
        text: "별로다",
        score: -1
    }]
},
{//20
    id: 20,
    question: '어바웃타임을 n번 봤다.',
    answers:  [{
        id: 1,
        text: "2번이상",
        score: 1
    }, {
        id: 2,
        text: "1번",
        score: 0
    }, {
        id: 3,
        text: "본적없다",
        score: -1
    }]
},
{//21
    id: 21,
    question: 'H2를 봤다.',
    answers:  [{
        id: 1,
        text: "본적있다",
        score: 1
    }, {
        id: 2,
        text: "본적없다",
        score: -1
    }]
},
{//22
    id: 22,
    question: '냉정과 열정사이를 봤다.',
    answers:  [{
        id: 1,
        text: "본적있다",
        score: 1
    }, {
        id: 2,
        text: "본적없다",
        score: -1
    }]
},
{//23
    id: 23,
    question: '비오는 날 외출하는 것을 싫어한다.',
    answers:  [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "보통이다",
        score: 0
    }, {
        id: 3,
        text: "아니다",
        score: -1
    }]
},
{//24
    id: 24,
    question: '비오는 건 좋다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//25
    id: 25,
    question: '겨울을 좋아한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//26
    id: 26,
    question: '건강을 생각해 잭콕을 타먹는다.',
    answers:  [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "뭐냐그게",
        score: 0
    }, {
        id: 3,
        text: "아니다",
        score: -1
    }]
},
{//27
    id: 27,
    question: '잭다니엘을 좋아한다. 그 이유는 커트코베인!',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "머냐그게..",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//28
    id: 28,
    question: '안 친한 사람 앞에선 잡아달라고 할까봐 벌레를 무서워하는 척 한다.(귀찮아서)',
    answers:  [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "진짜 무서워;;",
        score: 0
    }, {
        id: 3,
        text: "아니다",
        score: -1
    }]
},
{//29
    id: 29,
    question: '영화 영수증을 모은다.',
    answers:  [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "아니다",
        score: -1
    }]
},
{//30
    id: 30,
    question: '여행지에서 쓴 영수증을 모은다.',
    answers:  [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "아니다",
        score: -1
    }]
},
{//31
    id: 31,
    question: '돼지고기 vs 소고기',
    answers:  [{
        id: 1,
        text: "돼지고기",
        score: 1
    }, {
        id: 2,
        text: "소고기",
        score: -1
    }]
},
{//32
    id: 32,
    question: '시장 떡볶이를 좋아한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다.",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
},
{//33
    id: 33,
    question: '식당은 꼭 구글지도를 이용하여 찾는다.',
    answers:  [{
        id: 1,
        text: "그렇다",
        score: 1
    }, {
        id: 2,
        text: "아니다",
        score: -1
    }]
},
{//34
    id: 34,
    question: '오래된 가게를 좋아한다.',
    answers:  [{
        id: 1,
        text: "매우그렇다",
        score: 2
    }, {
        id: 2,
        text: "그렇다",
        score: 1
    }, {
        id: 3,
        text: "보통이다.",
        score: 0
    }, {
        id: 4,
        text: "아니다",
        score: -1
    }, {
        id: 5,
        text: "매우아니다",
        score: -2
    }]
}
]

export {surveyList};