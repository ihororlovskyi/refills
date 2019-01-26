<template>
  <v-container fluid pa-0 class="CustomProject">
    <v-container py-0>
      <v-layout row wrap class="pt80 pb80">
        <v-flex xs12 class="mb40">
          <div class="fs24 fw800">{{ title }}</div>
        </v-flex>
        <v-flex xs12 sm8 class="mb80">
          <div v-html="description"/>
        </v-flex>
        <v-flex xs12 sm4 class="mb80">
          <div class="mb20">{{ prePriceText }} <b>{{ price }}</b></div>
          <order-dialog/>
        </v-flex>
        <v-flex xs12>
          <v-parallax :src="img" height="300"/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  import OrderDialog from '@/components/shared/OrderDialog'

  export default {
    components: {
      OrderDialog
    },
    data () {
      return {
        title: 'Собственный проект',
        description: 'Проект перепланирки квартиры<br>Дизайн проект<br>Черновая и чистовая отделка<br>Материалы для ремонта<br>Окончательная отделка пола, стен, потолка<br>Кухня<br>Ванная комната и туалет',
        prePriceText: 'Цена проекта и ремонта',
        price: 'от $350 / м2',
        img: 'https://images.unsplash.com/photo-1527005980469-e172416c200b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&h=600&q=69',
      }
    }
  }
</script>

<style lang="stylus">
  .CustomProject
    background-color: #f7f7f7
</style>
