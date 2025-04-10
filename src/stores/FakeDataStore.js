import { defineStore } from "pinia";

export default defineStore("fackDataStore", {
  state: () => ({
    // imageUrl-大圖；avatarUrl-方形頭像
    coaches: {
      Alex: {
        name: "Alex",
        imageUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447755538.jpg",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447738741.png",
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
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447581246.jpg",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447639859.png",
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
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447716148.jpg",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447697703.png",
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
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447554726.jpg",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447668959.png",
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
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447603909.jpg",
        avatarUrl:
          "https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447620951.png",
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
    articleTags: ["健身好處", "健身知識", "營養素", "開課訊息"],
  }),
});
