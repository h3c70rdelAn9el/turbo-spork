<template>
  <div class="m-auto h-screen">
    <h1 class="text-2xl text-center pb-2 my-2">Cal-vue</h1>
    <div class='mx-2 pb-3 flex justify-between'>
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold mx-2">{{ currentYear }}</h2>
    </div>
    <section class="flex text-center">
      <p class=" h-10 text-center" style="width:14.28%" v-for="day in days" :key='day'>
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p 
        class="h-10 text-center"
        style="width:14.28%"
        v-for="num in startDay()"
        :key="num"
      >
      </p>
      <p 
        class="h-10 text-center"
        style="width:14.28%"
        v-for="num in daysInMonth()"
        :key="num"
        :class="currentDateClass(num)"
      >
      {{ num }}
      </p>
    </section>
    <section class="flex justify-between mx-8 my-2">
      <button class="px-2 border rounded hover:bg-blue-400" @click="prev">prev</button>
      <button class="px-2 border rounded hover:bg-blue-400" @click="next">next</button>
    </section>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth:new Date().getMonth(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    daysInMonth(){
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if(this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    prev() {
      if(this.currentMonth === 0){
        this.currentMonth = 11
        this.currentYear--
      } else {
       this.currentMonth--
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString()
      return calendarFullDate === currentFullDate ? 'text-blue-400' : '';
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'});
    }
  },
}
</script>
