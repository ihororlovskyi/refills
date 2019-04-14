<template>
  <section>
    <div class="text-xs-center pa40" style="max-width:800px;margin:auto;">
      <div class="text-xs-center fs24 fw800 mb40">{{ title }}</div>
      <v-avatar size="80" class="mb20">
        <img :src="userpic" alt="avatar">
      </v-avatar>
      <div class="mb20">“{{ message }}”</div>
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
      <v-btn depressed large class="mx-0" color="#262626" dark>
        <!-- <v-icon large left>{{ btnSend.icon }}</v-icon> -->
        <img :src="btnSend.img" alt="" width="25px" class="mr20">
        {{ btnSend.text }}
      </v-btn>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Заказ просчета проекта',
        userpic: 'https://images.unsplash.com/photo-1495147334217-fcb3445babd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=160&h=160&q=69',
        message: 'Оставьте свой номер телефона и мы в течении 1 дня подготовим Вам план перепланировки квартиры и этапы ремонта под дизайн проект Manhattan',
        name: 'Егор Попов',
        btnSend: {
          // icon: 'mdi-send',
          img: '/img/icons/send.svg',
          text: 'Отправить',
        }
      }
    }
  }
</script>

<style lang="stylus">
</style>
