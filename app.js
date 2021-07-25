new Vue({
  el: '#app',
  // state
  data () {
    return {
      name: 'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 1,
      //prices: [8400, 9000, 8500, 4500, 5630, 7854, 9540],
      showPrices: true,
      price: 8400,
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miércoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sábado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],
      color: 'f4f4f4'
    }
  },
  // functions
  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices 
    }
  
  }


})