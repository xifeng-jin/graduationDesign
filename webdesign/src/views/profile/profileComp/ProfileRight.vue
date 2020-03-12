<template>
  <div class="profile-right">
    <div class="one">
      <img src="~assets/img/png/vip.png" alt="">
    </div>
    <div class="two">
      <div class="n1">昨天</div>
      <div class="nav">
        我的日历
      </div>
      <div class="n2" @click="changeDay">明天</div>
      <div class="content">
        <div class="a">{{calender.date}}</div>
        <div class="b">{{calender.day}}</div>
        <div class="c">
          <span class="c1">{{calender.year}}</span>
          <span class="c2">{{calender.month}}</span>
        </div>
      </div>
    </div>
    <div class="three">
      <img src="~assets/img/png/bird2.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileRight",
    data() {
      return {
        calender: {}
      }
    },
    created() {
      this.calender = this._getCalender();
      console.log( this.calender );
    },
    methods: {
      changeDay() {
        var time = new Date();
        var day = time.getDay();
        var year = time.getFullYear();
        var month = time.getMonth() ;
        var date =  time.getDate();
        // console.log(date,day);
        //判断一年的最后一天
        if (month === 11 && date === 31) {
          year +=1;
          month = 0;
          date = 1;
          if (day === 6) {
            day = 0
          }
          day = this._getDay(day)
        }
        //判断一个月的最后一天
        if (month !== 11 && (date === 31 || date === 28 || date === 30 || date === 29)) {
          month += 1;
          date = 1;
          if (day === 6) {
            day = 0
          }
          day = this._getDay(day)
        }
        date +=1;
        if (day === 6) {
          day = 0
        }
        day +=1;
        day = this._getDay(day);
        // console.log(date,day);

        //重新赋值
        this.calender = {
          day,
          year,
          month: month > 9 ? month + 1 : '0' + (month + 1),
          date: date > 9 ? date : '0' + date
        }
      },
      _getCalender() {
        var time = new Date();
        var day = this._getDay(time.getDay());
        var year = time.getFullYear();
        var month = time.getMonth() > 9 ? time.getMonth()+1 : '0'+ (time.getMonth() +1);
        var date = time.getDate() > 9 ? time.getDate() : '0' + time.getDate();
        return {
          day,
          year,
          month,
          date
        }
      },
      _getDay(day) {
        var newDay = '';
        switch (day) {
          case 0:
            newDay = '星期天';
            break;
          case 1:
            newDay = '星期一';
            break;
          case 2:
            newDay = '星期二';
            break;
          case 3:
            newDay = '星期三';
            break;
          case 4:
            newDay = '星期四';
            break;
          case 5:
            newDay = '星期五';
            break;
          case 6:
            newDay = '星期六';
            break;
        }
        return newDay
      }
    }
  }
</script>

<style scoped>
  .profile-right {
    margin-left: 15px;
    cursor: pointer;
  }
  .one {
    width: 100%;
  }
  .one img {
    width: 260px;
    height: 110px;
    border: 2px solid orangered;
  }
  .two {
    width: 264px;
    margin-top: 20px;
    text-align: center;
    border: 1px solid #E5E5E5;
    position: relative;
  }
  .two .nav {
    width: 264px;
    height: 40px;
    text-align: center;
    background: rgb(110,200,132);
    color: #ffeeee;
    line-height: 40px;
  }
  .two .n1 {
    position: absolute;
    top: 10px;
    left: 10px;
    color: #FFeeee;
  }
  .two .n2 {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #FFeeee;
  }
  .two .content {
    background: rgb(248,250,250);
    width: 264px;
    padding-bottom: 15px;
  }
  .two .a {
    font-size: 50px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgb(110,200,132);
  }
  .two .b ,.two .c {
    color: rgb(110,200,132);
    margin-top: 5px;
  }
  .two .b ,.two .c .c1 {
    margin-right: 5px;
  }
  .three img {
    width: 264px;
    height: 180px;
  }
</style>
