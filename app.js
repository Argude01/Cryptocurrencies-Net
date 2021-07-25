new Vue({
  el: '#app',
  // state
  data () {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
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
  // Computed Properties
  computed: {
    title () {
      return `${this.name} - ${this.symbol}`
    }
  },
  // watchers are binded functions to the data properties
  watch: {
    showPrices (newVal, oldVal) {
      console.log('showPrices: ',newVal, oldVal)
    }
  },
  // functions
  methods: {
    toggleShowPrices () {
      this.showPrices = !this.showPrices
      
      this.color = this.color.split('').reverse().join('') // dark mode color = 4f4f4f 
    }  
  }


})