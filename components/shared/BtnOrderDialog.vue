<template>
  <div class="mb20">
    <v-dialog v-model="orderDialog" max-width="800">
      <v-btn depressed large class="ma-0" slot="activator" color="#262626" dark :style="'width:' + customWidth">
        <img :src="btnOrder.img" alt="" width="25px" class="mr10">
        {{ btnOrder.text }}
      </v-btn>
      <v-card>
        <order-content/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import OrderContent from '@/components/shared/OrderContent'

  export default {
    props: [
      'customWidth'
    ],
    components: {
      OrderContent
    },
    data () {
      return {
        orderDialog: false,
        btnOrder: {
          img: '/img/icons/order.svg',
          text: 'Заказать просчет проекта',
        }
      }
    },
    // methods: {
    //   onSend () {
    //     this.orderDialog = false
    //   }
    // }
  }
</script>

<style lang="stylus">
</style>
