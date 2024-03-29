import { defineStore } from "pinia";

export default defineStore("fackDataStore", {
  state: () => ({
    // imageUrl-大圖；avatarUrl-方形頭像
    coaches: {
      Alex: {
        name: "Alex",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447755538.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tm2yv6O6TFaWWN%2BjC5AGqwAfCoJ%2Bw83D1WLf2IV1oj5GhC7L45UIWrDAnqlXjSV9NsQGawNCXp385%2BESyyJSdb6fDoyyd%2FmEh2oyve0PDpORd0Jeim2Nko6uPkIUw6LG0UWZCsbgdhHJZsX7Pizd8t3o2T5qV6kgOZeine6RWno8UlZc8hVA5TYpEnUp3%2F3V6oggEvNX3g%2FxE2ZzxL2gm%2FP5KJDgnGMXxQla49k7HSDQdh7E6lUCc5KuSk3ZNjAhKZAKJVAPBi7fjHLT4vh00hXJmmbA%2FVAHmlu00HYnpcPOkVwkQO73uCG82Fuav%2BjMw9ED6vqumNZ7S53UsVkVew%3D%3D",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447738741.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=f8PYdXtpz0BHP%2BY5WOCKYF%2BLy9bnbaETESAHg7QAa3ePDzELnde0ABaQ0vqhdyn1BUojkGi7wTd59S6u5sajHZfPl%2FG3BsvbZID7Pei3TIOzxcR4e%2FVYBZdsJRmtPJ60YDYUHPaIgyg0J6KkvEdb%2B8RK8oqoFfjEYZVk9aR4iVZFo1%2FHem%2FRKorDBG6l1qU88zeu%2BVzLe41ibSk5R5P6WoX0hz1%2FnP8E4kEBIOqIZ%2B13efI1EDHPnZRWF2mZ85V6yBCZ0JFyplhli8RnKLtH2zj8RCABCMWQ4XbxGhc0bUfjggKfpaIv6GvjWorZk9GJOvHisKpCYog6BHtWOynFAA%3D%3D",
        motto: ["超越自我", "超越極限", "追求卓越的生活方式"],
        teachingExpertise: [
          "高效有氧運動課程設計",
          "體能訓練與身體塑造",
          "跑步技巧與訓練方法",
          "減重與健康飲食指導",
          "徒手訓練與核心肌群鍛鍊",
        ],
        certifications: [
          "國際運動科學協會（ISSA）認證教練",
          "有氧運動教練執照",
          "CPR及急救認證",
        ],
        teachingExperience: [
          "五年健身房教練經驗，專注於有氧訓練與健身指導",
          "大學校園健身中心專職教練，指導學生及教職員工進行健身訓練",
          "舉辦過多場有氧運動工作坊，受到學員好評",
          "私人健身教練，為客戶提供個性化的健身方案與指導",
          "在社區健康促進活動中擔任講師，宣導健康生活方式",
        ],
        competitionParticipation: [
          "2018年城市馬拉松賽事，完賽時間3小時45分，男子組第10名",
          "2019年健美比賽，獲得男子健美組冠軍",
          "2020年國際室內自行車錦標賽，獲得男子組第三名",
          "2021年健身大賽，獲得有氧運動組冠軍",
          "2022年全國健康生活節有氧舞蹈比賽，獲得冠軍",
        ],
      },
      "Olivia Chang": {
        name: "Olivia Chang",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447581246.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PgMA%2FH9d0pUMQGK%2B8ht4owzrEsvaYknT5Us2M68FNvLI4YYjK5MffWRn0aASmR5OP1IDlelCKcFn204lV%2BeTplm%2FEBD8MV3wkN7NpGAarRb1RqH%2FqLEi1QUULlGBtL43yEZU7D95aPOdNVd3lQ2iaVmyjSxIGuazB%2FEHeIsRXJMeln%2BlRiGDKVkr4o675LsfWRb9G8cwlISU9NqBiEkQnZFuPUG4Yj2jQLCWGb7KgpybFKqcL2MYNjoHkthdIwM039uGbl92A1MO%2Fga8i6gpkdzjVz8iehKhyAbxBIlFs9ZCuRH7cNisuh%2BovYkJqqKIgIj68iAUkvBf6PrBcZszlA%3D%3D",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447639859.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AXUtogzYmQ4knZ2xyE%2BHqCvkazbGsPnV91dcTJHb%2FcsT%2Fhc5mS03gOMNkpuZLzMmmw0AdDaRFC7Z6zUObX0oxtAj0t21MI0G3LwmD6x7ea40vHcp6mYTOfG8UWRgKwk6BJLLEEtGVEossstVoTtkxoYpU93e%2FSwMJJkPfzB4pHGlngiqD1s3xdptjkXbbhn%2BgVLnPoh9m4eSDDxdJzO1sdRDoQT4dkVdsjO19U%2BD2bVHJyHK6XY5wSZwIIT%2B31K%2BvH5BEA4OYlnskm1nmkXauGm%2FGalQC2A9zhPho2bKuvmH%2Bbdh3zzsODCLdWMDKnkd7PJln6n%2F65pCD%2BkhINkf7A%3D%3D",
        motto: ["勇於挑戰", "超越自我", "不斷突破極限"],
        teachingExpertise: [
          "重量訓練課程設計與執行",
          "肌肉群分解與訓練技巧",
          "增加肌肉質量與力量提升",
          "負重訓練與器械運用",
          "健身姿勢與姿勢修正",
        ],
        certifications: [
          "國家健身專業認證協會（NASM）認證教練",
          "重量訓練與健身教練執照",
          "進階負重訓練認證",
        ],
        teachingExperience: [
          "十年健身房教練經驗，專注於重量訓練與健身指導",
          "大學校園健身中心專職教練，指導學生及教職員工進行重量訓練",
          "舉辦過多場重量訓練工作坊，受到學員好評",
          "私人健身教練，為客戶提供個性化的重量訓練方案與指導",
          "在健身行業研討會上擔任講師，分享重量訓練技巧與知識",
        ],
        competitionParticipation: [
          "2017年全國健美比賽，獲得女子健美組冠軍",
          "2018年重訓挑戰賽，獲得女子組第二名",
          "2019年健身大賽，獲得重量訓練組冠軍",
          "2020年全國舉重錦標賽，獲得女子組第三名",
          "2021年國際健身健美大賽，獲得女子組季軍",
        ],
      },
      "Jackson Liu": {
        name: "Jackson Liu",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447716148.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IyD0UknoC9ebc4bW3KFSaSpo58jBlKCjvnv7iPJ4nnz5QhQxTAZoHZbOffgq8PSjayeb6wZ2oBsKH2GAlbduCvmfDYB2KzcR%2Ffxo4ex%2FUEsG0bZikRTWKqU4AMpeiYotxkZeV%2FztctvUF0wVP41tb1v%2FYQalPFK%2FBQwcjh4Fde41jg02dntMrFm%2BBx5Nkes7eZParPfffyOnvQCvsBqdIJ7sth3wIphin1guzCcEklSV2IgpSo7am7LKUFcx%2F5a337iRjceKFY8GzxBbAifnlS7QFnwB1Gh5KsxYYRwY%2FPO9GPzr54vpoLcegTaHbE6FvGSiZnB3HqBZL64t2ZtmmA%3D%3D",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447697703.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XVwEceR5lzAArAt6SB%2FwMVLc3P%2FcdWcMSnMOLbsfqVEyKvBuvjq%2Bc15gjpleMmjgY0jdcYfbCQaS197%2FUyCFBH64bsoF29E%2FCSAiV%2BtFJboWe%2F6B9BRKF5ydxj4hyBv6nlZ503gjYFZyR%2Fp98asmrYiAfZ%2BzHZqcvCd2ISe02dUxzTZh6DF88wa5qfdwpY369%2FehvGxdTdPCNJbu6z5koABPzb3jyhlnJeL3E2CC67XALlh0KOYtdfzE53wbLJxFuTIy4nwvgvkZ2VHjxXzCKZTvg84fCaeeYcY5RF6otZyg3Bz6d%2FbC13XQthNa7DgV%2BHbEct%2F4xfIcc99u4spOfQ%3D%3D",
        motto: ["心隨運動", "身體超越", "追求健康與快樂的生活"],
        teachingExpertise: [
          "有氧運動課程設計與執行",
          "快樂健身與有氧舞蹈指導",
          "體能訓練與身體塑造",
          "伸展與柔軟度訓練",
          "瑜珈與冥想指導",
        ],
        certifications: [
          "國際有氧運動協會（IAA）認證教練",
          "有氧舞蹈教練執照",
          "瑜珈教練認證",
        ],
        teachingExperience: [
          "十年健身房教練經驗，專注於有氧運動與健身指導",
          "大學校園健身中心專職教練，指導學生及教職員工進行有氧運動訓練",
          "主持多場有氧舞蹈課程，受到學員好評",
          "私人健身教練，為客戶提供個性化的有氧運動方案與指導",
          "組織舉辦健身活動，推廣健康生活方式",
        ],
        competitionParticipation: [
          "2018年城市馬拉松賽事，完賽時間4小時15分，男子組第15名",
          "2019年有氧舞蹈大賽，獲得男子組亞軍",
          "2020年全國瑜珈比賽，獲得男子組季軍",
          "2021年健身大賽，獲得有氧運動組冠軍",
          "2022年全國健康生活節有氧舞蹈比賽，獲得冠軍",
        ],
      },
      Emma: {
        name: "Emma",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447554726.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dx%2FT1A2cvaQWmPUMgVluQHPixP6t6zrPyDTTt2VZ8rSXN7T8hpey2HQWX8fWPh10fmPZ7d6ldr%2F%2FYksn16%2Fu9IfMwP5jxlSBf%2F1JkO7Awj5l0CI88eluNKZMjUkweI3S1WWEW5%2FJxdZnmrOi0FRnVeMndJCNZIQ5hhFU4IGigPgTqKfqILAgcdjzIEH9KAuKDhn6QNoZpYPu%2BxTpWbB8fz7PnagzLzVhUyNScZEnZlEeIAOtiO9qkCB1QD4MKErYHnaqDY7ez%2Bct5f9Tozsz8J%2BFBjz2Io4wBkbHxYr8GIG4%2BrguiawA6WkFK6WmacHpJ47GSQx2OZW%2BwkVOFf0vdg%3D%3D",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447668959.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FUgaM1cygrJbd8UVi8D%2B1rEADXMeXpd9S4ZzjYYIeWFNuzuthChEG%2F38Lw%2FYPtIETcovrZwMkagNDwZ1ewOPbOvEw0Xze8h3udb2zBwibAPldJECuBSE6ToAsTo8mPOoI4576tpRexnWsf8VadcM1oLMAfBbES3KPzgKAlgSz4yDQIQxVnp9PHWzWQoXF38nvMXm4d6QQrSr8No37gnQy5EaVSAGX17b2InroHWyj6dxzjuLuIwQvbHbYdwlCxsNdV2VM%2FGSlSEg14jYZLuzUQ8fFfOAUonyuhiev51ECMZxMYpvtD5A1Re09F%2Fmei21Q4GcIdlDp1HaowFWrlJrJw%3D%3D",
        motto: ["身心合一", "尋找平衡", "靈動無限"],
        teachingExpertise: [
          "瑜珈基本姿勢與呼吸法",
          "瑜珈流動式課程設計",
          "精神與身體平衡的練習",
          "瑜珈靜心冥想與放鬆練習",
          "客製化瑜珈療法與個人指導",
        ],
        certifications: [
          "國際瑜珈聯盟（IYA）認證瑜珈教練",
          "瑜珈靜心冥想指導證書",
          "瑜珈治療師執照",
        ],
        teachingExperience: [
          "十年瑜珈教學經驗，專注於瑜珈基本與進階課程教學",
          "為企業、學校和社區中心提供瑜珈課程，幫助學員紓解壓力和改善身體靈活性",
          "主持瑜珈工作坊和營地，向學員傳授瑜珈的理念和實踐",
          "私人瑜珈教練，提供一對一或小型團體的定制化瑜珈課程",
          "舉辦瑜珈療癒工作坊，幫助受傷或需要身心靈療愈的學員恢復健康",
        ],
        competitionParticipation: [
          "2018年全國瑜珈比賽，獲得女子組冠軍",
          "2019年城市瑜珈大賽，獲得最佳靜心冥想獎",
          "2020年瑜珈健身展示賽，獲得最佳表現獎",
          "2021年國際瑜珈節演示，獲得表現精彩獎",
          "2022年區域瑜珈對決，獲得冠軍殊榮",
        ],
      },
      Dhalsim: {
        name: "Dhalsim",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447603909.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jUWkaaHlgBXwuyGOYGpjZftzVb%2BinCzSjhNryatOyF9pkcNEa8NcAhCVGMWgGAlszsz2SG2tkcbEKQcKmAWW73BsHbi2p5kXlQVgG4MXqT%2BRllAwL%2B6F0ja0zsFKAeKn7EYEBahnxLD3u8AvfXzQngWwqNU8wVD4FaFQa%2FoN0NibgMs6%2Fr1I2Raj0KEN8gQrv53vgeOJ%2FOYjzJ%2Ffyebjtzp%2BKsKgJt2cNJ6fZTYE7nJQcanl169P0hx5zhsSWYWLp%2B%2FI2cXOEl%2BcLb%2FpBncF84GXSg2baMPmFR6yJbJhBfWerHSIYfKS%2B2tX5dFMWlPzNIfgHejmOTdJs499Vq22jw%3D%3D",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447620951.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=O7fbmLEvyYW9quhMiwsV9P61rdqJYPk28b1zhG9HGNW05GgB972f3vcMf6a383AyavMz2Z2LZNDeWReyTEyjgRglmHHSz8jWUI6OfTtwp1aZs8QzBadHNpAmsc7sKpUPJSGCbw15TH5YBTsfz6Sbjt5IX5d4U9bKOqI2EwSeb4LfICWrnQpEitjNLV2gOlxA0G7Wz%2FAgI7QXSG0s3b%2B3LbQZB0OiBRlyo22KaGpYEYL1Ww%2FXrXO%2FW%2FBPMR1UDF2zO1OSTOKzLmQmSM%2BpVNCi8Q3F1OPnsJfCCRfLZZHPpGE1RlGLtv7spuK%2BQsxCYuMllwYsblvNy5bwN5LIw2f%2FTA%3D%3D",
        motto: ["融合心靈", "追求平衡", "通向內在自我"],
        teachingExpertise: [
          "瑜珈哲學與心靈實踐",
          "靜心冥想與呼吸調控",
          "靈活度與平衡訓練",
          "瑜珈體位法與動作修正",
          "瑜珈治療與康復練習",
        ],
        certifications: [
          "國際瑜珈聯盟（IYA）高級瑜珈教練",
          "有瑜珈心靈冥想指導證書",
          "瑜珈治療師執照",
        ],
        teachingExperience: [
          "在瑜珈工作室、健身中心和靈性中心提供瑜珈課程，引導學員探索身心靈的奧妙",
          "主持瑜珈營地和靜修工作坊，幫助學員深入理解瑜珈的本質和價值觀",
          "以個人方式或小型團體形式提供瑜珈治療，協助學員康復身心健康",
          "在瑜珈社區中積極參與，舉辦瑜珈慈善活動，推廣瑜珈對健康的益處",
        ],
        competitionParticipation: [
          "曾參與國際瑜珈節表演，展示特技與平衡技巧",
          "在地區瑜珈比賽中獲得多項獎項，包括最佳表現和最佳靜心獎",
          "在國際瑜珈大賽中，以其獨特的風格和表現贏得觀眾的讚賞",
        ],
      },
    },
    // 文章分類
    articleTags: ['健身好處', '健身知識', '營養素', '開課訊息'],
  }),
});
