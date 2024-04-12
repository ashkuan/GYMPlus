<template>
  <div class="shadow rounded-2 rounded-md-4 p-5 p-md-6 p-xl-7">
    <div class="row gx-lg-7">
      <VForm
        class="col-lg calculate-border-end pe-xl-7"
        @submit="calculateValue"
        v-slot="{ errors }"
      >
        <div class="row align-items-center mb-3 mb-xl-4 gx-3">
          <label class="col fs-8 small-md" for="ageGroup">您的年齡</label>
          <div class="col-9 col-xxl-10 ps-0" style="max-width: 332px">
            <VField
              name="ageGroup"
              rules="required"
              as="select"
              class="form-select form-select-sm fs-8 small-md bg-gray-5 border-0 py-xl-3 ps-xl-4"
              :class="{ 'is-invalid': errors['ageGroup'] }"
              id="ageGroup"
            >
              <option value="" selected hidden>請選擇年齡層</option>
              <option :value="`${num}0th`" v-for="num in 6" :key="num">
                {{ num }}0~{{ num }}9歲
              </option>
              <option value="over-70th">70歲 以上</option>
            </VField>
          </div>
          <ErrorMessage name="ageGroup" v-slot="{ message }" class="invalid-feedback">
            <small
              class="col-9 col-xxl-10 ps-0 fs-8 ms-auto mt-1 text-danger"
              style="max-width: 332px"
            >
              {{ message.replace('ageGroup', '年齡') }}
            </small>
          </ErrorMessage>
        </div>
        <div class="row align-items-center mb-3 mb-xl-4 gx-3">
          <label class="col fs-8 small-md">生理性別</label>
          <div class="radio-group col-9 col-xxl-10 ps-0" style="max-width: 332px">
            <div class="form-check form-check-inline mb-0 me-3">
              <VField
                name="sex"
                rules="required"
                type="radio"
                value="male"
                class="form-check-input"
                :class="{ 'is-invalid': errors['sex'] }"
                id="male"
              ></VField>
              <label class="fs-8 small-md" for="male">男性</label>
            </div>
            <div class="form-check form-check-inline mb-0">
              <VField
                name="sex"
                rules="required"
                type="radio"
                value="female"
                class="form-check-input"
                :class="{ 'is-invalid': errors['sex'] }"
                id="female"
              ></VField>
              <label class="fs-8 small-md" for="female">女性</label>
            </div>
          </div>
          <ErrorMessage name="sex" v-slot="{ message }" class="invalid-feedback">
            <small
              class="col-9 col-xxl-10 ps-0 fs-8 ms-auto mt-1 text-danger"
              style="max-width: 332px"
            >
              {{ message.replace('sex', '性別') }}
            </small>
          </ErrorMessage>
        </div>
        <div class="row align-items-center mb-3 mb-xl-4 gx-3">
          <label class="col fs-8 small-md" for="height">您的身高</label>
          <div class="col-9 col-xxl-10 ps-0" style="max-width: 332px">
            <VField
              name="height"
              rules="required|min_value:50"
              type="number"
              min="0"
              class="form-control form-control-sm fs-8 small-md bg-gray-5 border-0 py-xl-3 ps-xl-4"
              :class="{ 'is-invalid': errors['height'] }"
              placeholder="請輸入身高（cm）"
              id="height"
            ></VField>
          </div>
          <ErrorMessage name="height" v-slot="{ message }" class="invalid-feedback">
            <small
              class="col-9 col-xxl-10 ps-0 fs-8 ms-auto mt-1 text-danger"
              style="max-width: 332px"
            >
              {{ message.replace('height', '身高') }}
            </small>
          </ErrorMessage>
        </div>
        <div class="row align-items-center mb-3 mb-xl-4 gx-3">
          <label class="col fs-8 small-md" for="weight">您的體重</label>
          <div class="col-9 col-xxl-10 ps-0" style="max-width: 332px">
            <VField
              name="weight"
              rules="required|min_value:1"
              type="number"
              min="0"
              class="form-control form-control-sm fs-8 small-md bg-gray-5 border-0 py-xl-3 ps-xl-4"
              :class="{ 'is-invalid': errors['weight'] }"
              placeholder="請輸入體重（kg）"
              id="weight"
            ></VField>
          </div>
          <ErrorMessage name="weight" v-slot="{ message }" class="invalid-feedback">
            <small
              class="col-9 col-xxl-10 ps-0 fs-8 ms-auto mt-1 text-danger"
              style="max-width: 332px"
            >
              {{ message.replace('weight', '體重') }}
            </small>
          </ErrorMessage>
        </div>
        <div class="row align-items-center mb-4 mb-md-5 gx-3">
          <label class="col fs-8 small-md" for="fatPercentage">您的體脂率</label>
          <div class="col-9 col-xxl-10 ps-0" style="max-width: 332px">
            <VField
              name="fatPercentage"
              rules="required|min_value:1"
              type="number"
              min="0"
              class="form-control form-control-sm fs-8 small-md bg-gray-5 border-0 py-xl-3 ps-xl-4"
              :class="{ 'is-invalid': errors['fatPercentage'] }"
              placeholder="請輸入體脂率（%）"
              id="fatPercentage"
            ></VField>
          </div>
          <ErrorMessage name="fatPercentage" v-slot="{ message }" class="invalid-feedback">
            <small
              class="col-9 col-xxl-10 ps-0 fs-8 ms-auto mt-1 text-danger"
              style="max-width: 332px"
            >
              {{ message.replace('fatPercentage', '體脂率') }}
            </small>
          </ErrorMessage>
        </div>
        <div class="calculate-border-bottom d-flex flex-column pb-5 pb-lg-0">
          <button
            type="submit"
            class="btn btn-gray-1 btn-sm fs-md-7 align-self-lg-center py-lg-3 px-lg-8"
            :disabled="isGettingInfo"
          >
            <span v-if="isGettingInfo" class="line-loading-loop"></span>
            看結果
          </button>
        </div>
      </VForm>
      <div class="col-lg pt-5 pt-lg-0 ps-xl-7 d-flex flex-column">
        <div class="row g-0 text-center mb-5 mb-xl-6">
          <div class="col d-flex flex-column align-items-center justify-content-center">
            <ul class="list-unstyled mb-0 d-flex flex-column fw-medium">
              <li class="display-3 display-md-3 d-flex align-items-end mb-5">
                <span class="small fs-md-6 ls-2 lh-md-sm fw-md-bold">您的BMI為</span>
                <span class="calculated-number-border text-primary ms-3 d-inline-block">
                  {{ bmi }}
                </span>
              </li>
              <li class="display-3 display-md-3 d-flex align-items-end ms-auto">
                <span class="small fs-md-6 ls-2 lh-sm fw-md-bold">FFMI為</span>
                <span class="calculated-number-border text-primary ms-3 d-inline-block">
                  {{ ffmi }}
                </span>
              </li>
            </ul>
          </div>
          <div class="col" style="max-width: 198px">
            <small class="ms-5 ms-xl-6 d-block py-4 py-8 bg-light rounded-3">
              <span class="d-inline-block fs-md-7 fs-md-medium ls-md-2 mb-2">肌肉量</span>
              <br />
              <span
                class="text-linear fs-5 lh-sm fw-bold"
                :class="[suggestionContent.muscleMass.length > 2 ? 'fs-md-4' : 'fs-md-3']"
              >
                {{ suggestionContent.muscleMass ? suggestionContent.muscleMass : '未輸入' }}
              </span>
            </small>
          </div>
        </div>
        <p
          class="mb-5 mb-xl-6 small fs-md-7 ls-md-2 flex-grow-1"
          :class="{ 'text-gray-3': !suggestionContent.nutritional }"
        >
          營養建議：{{
            suggestionContent.nutritional
              ? suggestionContent.nutritional
              : '將針對您輸入的數值提供相關建議。'
          }}
        </p>
        <p class="mb-4 mb-md-8 fs-6 fs-md-5 lh-sm fw-bold">為您推薦</p>
        <div class="card" aria-hidden="true">
          <div class="d-flex">
            <router-link :to="`/course/${singleInfo.id}`">
              <img
                :src="singleInfo.imageUrl"
                class="img-fluid border rounded-3 me-3 me-md-4"
                :alt="singleInfo.title"
                style="width: 100px; height: 72px"
              />
            </router-link>
            <div class="col d-flex flex-column justify-content-center placeholder-glow">
              <h4 class="card-title small fs-md-7 ls-md-2 fw-medium lh-base">
                <span v-if="isGettingInfo" class="placeholder col-6"></span>
                <router-link v-else class="link-gray-1" :to="`/course/${singleInfo.id}`">
                  {{ singleInfo.title }}
                  <span class="icon-rwd icon-base icon-left-arrow ms-2"></span>
                </router-link>
              </h4>
              <span v-if="isGettingInfo" class="placeholder col-6"></span>
              <small v-else class="fs-8 small-md">{{ singleInfo.coach }} 教練</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import GetDataStore from '@/stores/GetDataStore';

export default {
  data() {
    return {
      isLoading: false,
      classRange: {
        male: [0, 17, 20, 21, 23, 27],
        female: [0, 14, 16, 18, 19, 21],
      },
      suggestions: [
        {
          belowAverage: {
            muscleMass: '低於平均',
            training: '肌肉增強訓練、基礎訓練，以增加肌肉量和改善肌肉質量。',
            nutritional: '增加蛋白質攝入，確保足夠的熱量攝入以促進肌肉增長。',
            courseId: '-NrTUhZK0UJ52Qb4B_Gp',
          },
        },
        {
          average: {
            muscleMass: '平均',
            training: '均衡的力量和耐力訓練，結合適當的有氧運動。',
            nutritional: '均衡飲食，注重蛋白質和健康碳水化合物的攝入。',
            courseId: '-NrTUMzN7l-7etK1Xusc',
          },
        },
        {
          aboveAverage: {
            muscleMass: '高於平均',
            training: '進階力量訓練和有針對性的肌肉塑形。',
            nutritional: '蛋白質豐富、低脂的飲食，以維持肌肉量和體態。',
            courseId: '-NrTUIMTKxxyeu1ELQTu',
          },
        },
        {
          excellent: {
            muscleMass: '優秀',
            training: '高強度間歇訓練（HIIT）、進階重量訓練。',
            nutritional: '精準控制營養攝入，確保充足的恢復和肌肉成長。',
            courseId: '-NrTUSKPR-lNQ1Tms-Wl',
          },
        },
        {
          superior: {
            muscleMass: '優越',
            training: '個性化的專業訓練計劃，可能包括交叉訓練、功能性訓練等。',
            nutritional: '專業營養指導，以維持高水平的體能和肌肉表現。',
            courseId: '-NsEHEJltmTp9RSwaeda',
          },
        },
        {
          abnormal: {
            muscleMass: '數值異常',
            training: '建議尋求專業健身教練和醫生的意見，進行健康評估。',
            nutritional: '可能需要專業的營養師介入，確保健康的飲食習慣。',
            courseId: '',
          },
        },
      ],
      sex: 'male',
      bmi: 0,
      ffmi: 0,
    };
  },
  computed: {
    ...mapState(GetDataStore, ['singleInfo', 'isGettingInfo']),
    personalSuggestion() {
      const { ffmi, sex, suggestions } = this;
      const sexRange = this.classRange[sex];
      if (ffmi === 0 || this.bmi === 0) {
        return false;
      }
      if (ffmi > sexRange[0] && ffmi < sexRange[1]) {
        return suggestions[0];
      }
      if (ffmi >= sexRange[1] && ffmi < sexRange[2]) {
        return suggestions[1];
      }
      if (ffmi >= sexRange[2] && ffmi < sexRange[3]) {
        return suggestions[2];
      }
      if (ffmi >= sexRange[3] && ffmi < sexRange[4]) {
        return suggestions[3];
      }
      if (ffmi >= sexRange[4] && ffmi < sexRange[5]) {
        return suggestions[4];
      }
      return suggestions[5];
    },
    suggestionContent() {
      if (!this.personalSuggestion) {
        return { muscleMass: '' };
      }
      const keyName = Object.keys(this.personalSuggestion)[0];
      return this.personalSuggestion[keyName];
    },
  },
  methods: {
    ...mapActions(GetDataStore, ['getSingleInfo']),
    calculateValue(value) {
      const { height, weight, fatPercentage } = value;
      const denominator = (height / 100) ** 2;
      this.sex = value.sex;
      this.bmi = Math.round((weight / denominator) * 10) / 10;
      this.ffmi = Math.round(((weight * (1 - fatPercentage / 100)) / denominator) * 10) / 10;
      let { courseId } = this.suggestionContent;
      if (!courseId) {
        courseId = '-NrTU50o7sU6teneehCS';
      }
      this.getSingleInfo('product', courseId);
    },
  },
  mounted() {
    // 預設取得推薦課程
    this.getSingleInfo('product', '-NrTU50o7sU6teneehCS');
  },
};
</script>

<style lang="scss">
.calculate-border-bottom {
  border-bottom: 1px solid #e0e0e0;
  @media (min-width: 992px) {
    border-bottom: none;
  }
}
@media (min-width: 992px) {
  .calculate-border-end {
    border-right: 1px solid #e0e0e0;
  }
}
.radio-group {
  padding-top: 8px;
  padding-bottom: 6px;
  @media (min-width: 1200px) {
    padding-top: 13.5px;
    padding-bottom: 13.5px;
  }
}
.calculated-number-border {
  width: 60px;
  padding-bottom: 4px;
  border-bottom: 1px solid #000;
  @media (min-width: 1200px) {
    width: 99px;
  }
}
.icon-rwd {
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    vertical-align: text-top;
  }
}

@media (min-width: 768px) {
  .rounded-md-4 {
    border-radius: 1rem !important;
  }
}
</style>
