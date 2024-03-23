/* eslint-disable max-len */
import { defineStore } from 'pinia';

export default defineStore('classroom', {
  state: () => ({
    classRoom: [
        {
            id: 1,
            imageUrl: 'https://raw.githubusercontent.com/ashkuan/GYMPlus/feature/smalljie-about/src/assets/classimage/danielle-cerullo-CQfNt66ttZM.jpg',
        },
        {
            id: 2,
            imageUrl: 'https://raw.githubusercontent.com/ashkuan/GYMPlus/feature/smalljie-about/src/assets/classimage/sam-moghadam-khamseh-0sa8D74iod.jpg',
        },
        {
            id: 3,
            imageUrl: 'https://raw.githubusercontent.com/ashkuan/GYMPlus/feature/smalljie-about/src/assets/classimage/sam-moghadam-khamseh-Z4Q9KHw9ofE.jpg',
        },
    ],
  }),
  actions: {

  },
});
