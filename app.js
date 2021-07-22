new Vue({
  el: '#app',
  // state
  data () {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 0,
      //prices: [8400, 9000, 8500, 4500, 5630, 7854, 9540],
      showPrices: false,
      price: 8400,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 9000 },
        { day: 'Miércoles', value: 8500 },
        { day: 'Jueves', value: 4500 },
        { day: 'Viernes', value: 5630 },
        { day: 'Sábado', value: 7854 },
        { day: 'Domingo', value: 9540 },
      ],
    }
  },
  // functions
  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices
    }
  }


})