import { defineStore } from 'pinia';

export default defineStore('fackDataStore', {
  state: () => ({
    // imageUrl-大圖；avatarUrl-方形頭像
    coaches: {
      Alex: {
        name: 'Alex',
        imageUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447755538.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Tm2yv6O6TFaWWN%2BjC5AGqwAfCoJ%2Bw83D1WLf2IV1oj5GhC7L45UIWrDAnqlXjSV9NsQGawNCXp385%2BESyyJSdb6fDoyyd%2FmEh2oyve0PDpORd0Jeim2Nko6uPkIUw6LG0UWZCsbgdhHJZsX7Pizd8t3o2T5qV6kgOZeine6RWno8UlZc8hVA5TYpEnUp3%2F3V6oggEvNX3g%2FxE2ZzxL2gm%2FP5KJDgnGMXxQla49k7HSDQdh7E6lUCc5KuSk3ZNjAhKZAKJVAPBi7fjHLT4vh00hXJmmbA%2FVAHmlu00HYnpcPOkVwkQO73uCG82Fuav%2BjMw9ED6vqumNZ7S53UsVkVew%3D%3D',
        avatarUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447738741.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=f8PYdXtpz0BHP%2BY5WOCKYF%2BLy9bnbaETESAHg7QAa3ePDzELnde0ABaQ0vqhdyn1BUojkGi7wTd59S6u5sajHZfPl%2FG3BsvbZID7Pei3TIOzxcR4e%2FVYBZdsJRmtPJ60YDYUHPaIgyg0J6KkvEdb%2B8RK8oqoFfjEYZVk9aR4iVZFo1%2FHem%2FRKorDBG6l1qU88zeu%2BVzLe41ibSk5R5P6WoX0hz1%2FnP8E4kEBIOqIZ%2B13efI1EDHPnZRWF2mZ85V6yBCZ0JFyplhli8RnKLtH2zj8RCABCMWQ4XbxGhc0bUfjggKfpaIv6GvjWorZk9GJOvHisKpCYog6BHtWOynFAA%3D%3D',
      },
      'Olivia Chang': {
        name: 'Olivia Chang',
        imageUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447581246.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PgMA%2FH9d0pUMQGK%2B8ht4owzrEsvaYknT5Us2M68FNvLI4YYjK5MffWRn0aASmR5OP1IDlelCKcFn204lV%2BeTplm%2FEBD8MV3wkN7NpGAarRb1RqH%2FqLEi1QUULlGBtL43yEZU7D95aPOdNVd3lQ2iaVmyjSxIGuazB%2FEHeIsRXJMeln%2BlRiGDKVkr4o675LsfWRb9G8cwlISU9NqBiEkQnZFuPUG4Yj2jQLCWGb7KgpybFKqcL2MYNjoHkthdIwM039uGbl92A1MO%2Fga8i6gpkdzjVz8iehKhyAbxBIlFs9ZCuRH7cNisuh%2BovYkJqqKIgIj68iAUkvBf6PrBcZszlA%3D%3D',
        avatarUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447639859.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AXUtogzYmQ4knZ2xyE%2BHqCvkazbGsPnV91dcTJHb%2FcsT%2Fhc5mS03gOMNkpuZLzMmmw0AdDaRFC7Z6zUObX0oxtAj0t21MI0G3LwmD6x7ea40vHcp6mYTOfG8UWRgKwk6BJLLEEtGVEossstVoTtkxoYpU93e%2FSwMJJkPfzB4pHGlngiqD1s3xdptjkXbbhn%2BgVLnPoh9m4eSDDxdJzO1sdRDoQT4dkVdsjO19U%2BD2bVHJyHK6XY5wSZwIIT%2B31K%2BvH5BEA4OYlnskm1nmkXauGm%2FGalQC2A9zhPho2bKuvmH%2Bbdh3zzsODCLdWMDKnkd7PJln6n%2F65pCD%2BkhINkf7A%3D%3D',
      },
      'Jackson Liu': {
        name: 'Jackson Liu',
        imageUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447716148.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=IyD0UknoC9ebc4bW3KFSaSpo58jBlKCjvnv7iPJ4nnz5QhQxTAZoHZbOffgq8PSjayeb6wZ2oBsKH2GAlbduCvmfDYB2KzcR%2Ffxo4ex%2FUEsG0bZikRTWKqU4AMpeiYotxkZeV%2FztctvUF0wVP41tb1v%2FYQalPFK%2FBQwcjh4Fde41jg02dntMrFm%2BBx5Nkes7eZParPfffyOnvQCvsBqdIJ7sth3wIphin1guzCcEklSV2IgpSo7am7LKUFcx%2F5a337iRjceKFY8GzxBbAifnlS7QFnwB1Gh5KsxYYRwY%2FPO9GPzr54vpoLcegTaHbE6FvGSiZnB3HqBZL64t2ZtmmA%3D%3D',
        avatarUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447697703.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XVwEceR5lzAArAt6SB%2FwMVLc3P%2FcdWcMSnMOLbsfqVEyKvBuvjq%2Bc15gjpleMmjgY0jdcYfbCQaS197%2FUyCFBH64bsoF29E%2FCSAiV%2BtFJboWe%2F6B9BRKF5ydxj4hyBv6nlZ503gjYFZyR%2Fp98asmrYiAfZ%2BzHZqcvCd2ISe02dUxzTZh6DF88wa5qfdwpY369%2FehvGxdTdPCNJbu6z5koABPzb3jyhlnJeL3E2CC67XALlh0KOYtdfzE53wbLJxFuTIy4nwvgvkZ2VHjxXzCKZTvg84fCaeeYcY5RF6otZyg3Bz6d%2FbC13XQthNa7DgV%2BHbEct%2F4xfIcc99u4spOfQ%3D%3D',
      },
      Emma: {
        name: 'Emma',
        imageUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447554726.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=dx%2FT1A2cvaQWmPUMgVluQHPixP6t6zrPyDTTt2VZ8rSXN7T8hpey2HQWX8fWPh10fmPZ7d6ldr%2F%2FYksn16%2Fu9IfMwP5jxlSBf%2F1JkO7Awj5l0CI88eluNKZMjUkweI3S1WWEW5%2FJxdZnmrOi0FRnVeMndJCNZIQ5hhFU4IGigPgTqKfqILAgcdjzIEH9KAuKDhn6QNoZpYPu%2BxTpWbB8fz7PnagzLzVhUyNScZEnZlEeIAOtiO9qkCB1QD4MKErYHnaqDY7ez%2Bct5f9Tozsz8J%2BFBjz2Io4wBkbHxYr8GIG4%2BrguiawA6WkFK6WmacHpJ47GSQx2OZW%2BwkVOFf0vdg%3D%3D',
        avatarUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447668959.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=FUgaM1cygrJbd8UVi8D%2B1rEADXMeXpd9S4ZzjYYIeWFNuzuthChEG%2F38Lw%2FYPtIETcovrZwMkagNDwZ1ewOPbOvEw0Xze8h3udb2zBwibAPldJECuBSE6ToAsTo8mPOoI4576tpRexnWsf8VadcM1oLMAfBbES3KPzgKAlgSz4yDQIQxVnp9PHWzWQoXF38nvMXm4d6QQrSr8No37gnQy5EaVSAGX17b2InroHWyj6dxzjuLuIwQvbHbYdwlCxsNdV2VM%2FGSlSEg14jYZLuzUQ8fFfOAUonyuhiev51ECMZxMYpvtD5A1Re09F%2Fmei21Q4GcIdlDp1HaowFWrlJrJw%3D%3D',
      },
      Dhalsim: {
        name: 'Dhalsim',
        imageUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447603909.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jUWkaaHlgBXwuyGOYGpjZftzVb%2BinCzSjhNryatOyF9pkcNEa8NcAhCVGMWgGAlszsz2SG2tkcbEKQcKmAWW73BsHbi2p5kXlQVgG4MXqT%2BRllAwL%2B6F0ja0zsFKAeKn7EYEBahnxLD3u8AvfXzQngWwqNU8wVD4FaFQa%2FoN0NibgMs6%2Fr1I2Raj0KEN8gQrv53vgeOJ%2FOYjzJ%2Ffyebjtzp%2BKsKgJt2cNJ6fZTYE7nJQcanl169P0hx5zhsSWYWLp%2B%2FI2cXOEl%2BcLb%2FpBncF84GXSg2baMPmFR6yJbJhBfWerHSIYfKS%2B2tX5dFMWlPzNIfgHejmOTdJs499Vq22jw%3D%3D',
        avatarUrl:
          'https://storage.googleapis.com/vue-course-api.appspot.com/gymplus/1709447620951.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=O7fbmLEvyYW9quhMiwsV9P61rdqJYPk28b1zhG9HGNW05GgB972f3vcMf6a383AyavMz2Z2LZNDeWReyTEyjgRglmHHSz8jWUI6OfTtwp1aZs8QzBadHNpAmsc7sKpUPJSGCbw15TH5YBTsfz6Sbjt5IX5d4U9bKOqI2EwSeb4LfICWrnQpEitjNLV2gOlxA0G7Wz%2FAgI7QXSG0s3b%2B3LbQZB0OiBRlyo22KaGpYEYL1Ww%2FXrXO%2FW%2FBPMR1UDF2zO1OSTOKzLmQmSM%2BpVNCi8Q3F1OPnsJfCCRfLZZHPpGE1RlGLtv7spuK%2BQsxCYuMllwYsblvNy5bwN5LIw2f%2FTA%3D%3D',
      },
    },
    // 文章分類
    articleTags: ['健身好處', '健身知識', '營養素', '開課訊息'],
  }),
});
