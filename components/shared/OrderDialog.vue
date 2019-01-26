<template>
  <div class="mb20">
    <v-dialog v-model="deleteTicketDialog" max-width="800">
      <v-btn depressed large class="ma-0" slot="activator" color="#262626" dark>
        <v-icon large left>{{ btnOrder.icon }}</v-icon>
        {{ btnOrder.text }}
      </v-btn>
      <v-card>
        <v-card-text class="text-xs-center pa40">
          <div class="text-xs-center fs24 fw800 mb40">{{ title }}</div>
          <v-avatar size="80" class="mb20">
            <img :src="userpic" alt="avatar">
          </v-avatar>
          <div class="mb20">“{{ text }}”</div>
          <div class="fs12 mb40">{{ name }}</div>
          <div class="" style="width:290px;margin:auto;">
            <v-text-field
              label="Телефон"
              box
            />
            <v-text-field
              label="Email"
              box
            />
          </div>
          <v-btn depressed large class="mx-0" color="#262626" dark @click="onRemove">
            <v-icon large left>{{ btnSend.icon }}</v-icon>
            {{ btnSend.text }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        deleteTicketDialog: false,
        btnOrder: {
          icon: 'mdi-ruler-square',
          text: 'Зыказать просчет проекта',
        },
        title: 'Заказ просчета проекта',
        userpic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160&h=160&q=69',
        text: 'Оставьте свой номер телефона и мы в течении 1 дня подготовим Вам план перепланировки квартиры и этапы ремонта под дизайн проект Manhattan',
        name: 'Егор Попов',
        btnSend: {
          icon: 'mdi-send',
          text: 'Отправить',
        },
      }
    },
    methods: {
      onRemove () {
        this.deleteTicketDialog = false
      }
    }
  }
</script>

<style lang="stylus">
</style>
