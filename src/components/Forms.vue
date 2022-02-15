<template>
  <v-container>
    <v-form class="data__input">
      <h3>Заполните данные для заказа:</h3>

      <v-radio-group
          v-model="agent"
          row
      >
        <v-radio
            label="Физлицо"
            :value="true"
        ></v-radio>
        <v-radio
            label="Юрлицо"
            :value="false"

        ></v-radio>
      </v-radio-group>


      <!--   Физлицо   -->
      <div v-if="agent">
        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
          <form @submit.prevent="submit">

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="ФИО"
            >
              <v-text-field
                  v-model="formFiz.fio"
                  :error-messages="errors"
                  label="Фамилия Имя Отчество"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Серия паспорта"
                rules="required|max:4|min:4"
            >
              <v-text-field
                  v-model="formFiz.serial"
                  :error-messages="errors"
                  :counter="4"
                  label="Серия паспорта"
                  type="number"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Номер паспорта"
                rules="required|max:6|min:6"
            >
              <v-text-field
                  v-model="formFiz.number"
                  :error-messages="errors"
                  :counter="6"
                  label="Номер паспорта"
                  type="number"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Кем выдан"
            >
              <v-text-field
                  v-model="formFiz.place"
                  :error-messages="errors"
                  label="Кем выдан"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Дата выдачи"
            >
              <v-text-field
                  v-model="formFiz.date"
                  :error-messages="errors"
                  label="Дата выдачи"
                  required
                  type="date"
                  min="1991-01-01"
                  max="2025-12-31"
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Адрес регистрации"
            >
              <v-text-field
                  v-model="formFiz.address"
                  :error-messages="errors"
                  label="Адрес регистрации"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Электронная почта заказчика"
                rules="required|email"
            >
              <v-text-field
                  v-model="formFiz.email"
                  :error-messages="errors"
                  label="Электронная почта заказчика"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Дата рождения"
            >
              <v-text-field
                  v-model="formFiz.birthday"
                  :error-messages="errors"
                  label="Дата рождения"
                  type="date"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Телефон"
                rules="required|max:11|min:11"
            >
              <v-text-field
                  v-model="formFiz.phone"
                  :error-messages="errors"
                  :counter="11"
                  label="Телефон"
                  type="number"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="ИНН"
            >
              <v-text-field
                  v-model="formFiz.requisites"
                  :error-messages="errors"
                  label="ИНН"
                  type="number"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="подтверждения"
            >
              <v-checkbox
                  v-model="formFiz.checkbox"
                  :error-messages="errors"
                  value="1"
                  type="checkbox"
                  required
              >
                <template v-slot:label>
                  <div class="agree__fiz" data-app>
                    Согласен(a) на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                            target="_blank"
                            href="https://pay.muctr.ru/media/6b2a74cf-8ac7-45ee-a0e4-04500511748f.pdf"
                            @click.stop
                            v-on="on"
                        >
                          Согласие на обработку персональных данных.
                        </a>
                      </template>
                      Открыть документ
                    </v-tooltip>
                    *
                  </div>
                </template>
              </v-checkbox>

            </validation-provider>

            <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
                @click="submitFiz"
            >
              Отправить
            </v-btn>
            <v-btn @click="clearFiz">
              Очистить
            </v-btn>
          </form>
        </validation-observer>
      </div>


      <!--   Юрлицо   -->
      <div v-else>

        <validation-observer
            ref="observer"
            v-slot="{ invalid }"
        >
          <form @submit.prevent="submit">

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Полное наименование юрлица"
            >
              <v-text-field
                  v-model="formUr.fullName"
                  :error-messages="errors"
                  label="Полное наименование юрлица"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Краткое наименование юрлица"
            >
              <v-text-field
                  v-model="formUr.shortName"
                  :error-messages="errors"
                  label="Краткое наименование юрлица"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Должность первого лица (в род. падеже)"
            >
              <v-text-field
                  v-model="formUr.position"
                  :error-messages="errors"
                  label="Должность первого лица (в род. падеже)"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="ФИО (в родительном падеже)"
            >
              <v-text-field
                  v-model="formUr.name"
                  :error-messages="errors"
                  label="ФИО (в родительном падеже)"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                rules="required"
                name="Документ (в род. падеже)"
            >
              <v-text-field
                  v-model="formUr.document"
                  :error-messages="errors"
                  label="Документ (в род. падеже)"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                v-slot="{ errors }"
                name="Электронная почта заказчика"
                rules="required|email"
            >
              <v-text-field
                  v-model="formUr.email"
                  :error-messages="errors"
                  label="Электронная почта заказчика"
                  required
              ></v-text-field>
            </validation-provider>

            <validation-provider
                name="Реквизиты заказчика"
            >
              <v-textarea
                  v-model="formUr.requisites"
                  label="Реквизиты заказчика"
                  required
              ></v-textarea>
            </validation-provider>

            <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
                @click="submitUr"
            >
              Отправить
            </v-btn>
            <v-btn @click="clearUr">
              Очистить
            </v-btn>
          </form>
        </validation-observer>

      </div>

    </v-form>
  </v-container>
</template>

<script>
import { required, email, max, min } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
import {mapGetters} from "vuex";

setInteractionMode('eager')

extend('required', {
  ...required,
  message: 'Поле "{_field_}" не должно оставаться пустым',
})

extend('max', {
  ...max,
  message: '{_field_} не может превышать {length} символов',
})

extend('min', {
  ...min,
  message: '{_field_} не может быть короче {length} символов',
})

extend('email', {
  ...email,
  message: 'Email не соответствует требованиям',
})

export default {
  name: "Forms",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      agent: false,

      formFiz: {
        fio: '',
        serial: '',
        number: '',
        place: '',
        date: '',
        address: '',
        email: '',
        requisites: '',
        phone: '',
        birthday: '',
        checkbox: null,
      },

      formUr: {
        fullName: '',
        shortName: '',
        position: 'генерального директора',
        name: '',
        document: 'Устава',
        email: '',
        requisites: '',
      },

    }
  },
  methods: {
    submitFiz() {
      alert("Запрос в ЦКП отправлен");
      let formData, order_products;
      formData = this.formFiz;
      order_products = this.BASKET.map( el => {
        return {
          product: el.id,
          price: el.price,
          quantity: el.quantity,
        }
      });
      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent: this.agent,
          order_products,
          ...formData
        })
      };
      fetch("https://ckp.muctr.ru/api/shop/order/", requestOptions)
          .then(response => response.json())
          .then(data => (this.postId = data.id))
          .catch(error => {
            console.error('There was an error!', error);
      });
    },
    submitUr() {
      alert("Запрос в ЦКП отправлен");
      let formData, order_products;
      formData = this.formUr;
      order_products = this.BASKET.map( el => {
        return {
          product: el.id,
          price: el.price,
          quantity: el.quantity,
        }
      });
      const requestOptions = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent: this.agent,
          order_products,
          ...formData
        })
      };
      fetch("https://ckp.muctr.ru/api/shop/order/", requestOptions)
          .then(response => response.json())
          .then(data => (this.postId = data.id))
          .catch(error => {
            console.error('There was an error!', error);
          });
    },
    clearFiz() {
      this.formFiz.fio = ''
      this.formFiz.serial = ''
      this.formFiz.number = ''
      this.formFiz.place = ''
      this.formFiz.date = ''
      this.formFiz.address = ''
      this.formFiz.email = ''
      this.formFiz.requisites = ''
      this.formFiz.birthday = ''
      this.formFiz.phone = ''
      this.formFiz.checkbox = null

      this.$refs.observer.reset()
    },
    clearUr() {
      this.formUr.fullName = ''
      this.formUr.shortName = ''
      this.formUr.position = 'генерального директора'
      this.formUr.name = ''
      this.formUr.document = 'Устава'
      this.formUr.email = ''
      this.formUr.requisites = ''

      this.$refs.observer.reset()
    },
  },
  computed: {
    ...mapGetters([
        'BASKET'
    ])
  }
}
</script>

<style scoped>
.data__input {
  margin-bottom: 2rem;
}
</style>