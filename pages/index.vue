<template>
  <div>
    <header>
    </header>
    <div>
      <div class="waku">
        <h1>
          募集内容
        </h1>
        <div class="bounce">
          シェアハウスに住人が<br class="display-none-pc"><span class="watashi">私</span>だけになってしまいました・・・！
        </div>
        <div class="padding-1">
          コワーキングスペースのような使い方ができるようにリビングを
          整えていますので、遊びに来ませんか？？？
          シェアハウスに興味がある方、もくもく作業したい方、就活合間のお茶スペースをお探しの方、、、
          どんな方でも大丈夫です！楽しい使い方をあなたが見つけてください。
        </div>
        <div class="padding-1 center-align">
          <a href="https://tokyosharehouse.com/jpn/house/detail/392/" target="_blank">外観(TOKYO SHAREHOUSE様より)</a>
        </div>
      </div>
    </div>
    <div class="bg-color">
      <div class="waku ">
        <h2>
          料金
        </h2>
        <div class="center-align">
          無料です。
        </div>
      </div>
    </div>
    <div>
      <div class="waku">
        <h2>
          受入人数
        </h2>
        <div class="center-align">
          同時に1-3名程度まで。
        </div>
      </div>
    </div>
    <div class="bg-color">
      <div class="waku">
        <h2>
          設備
        </h2>
        <div class="grid" style="text-align: center">
          <div class="col-4_sm-6" @click="openModal(1)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/wifi.jpg" width="230px" class="max-width-100" alt="env-1" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">Wi-Fi</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(2)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/moniter.jpg" width="230px" class="max-width-100" alt="env-2" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">モニター</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(3)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/power.jpg" width="230px" class="max-width-100" alt="env-3" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">電源</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(4)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/water.jpg" width="230px" class="max-width-100" alt="env-4" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">加湿器</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(5)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/oculus.jpg" width="230px" class="max-width-100" alt="env-5" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">Oculus Quest</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(6)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/kitchen.jpg" width="230px" class="max-width-100" alt="env-6" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">キッチン</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(7)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/beer.jpg" width="230px" class="max-width-100" alt="env-7" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">発泡酒</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(8)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/onion.jpg" width="230px" class="max-width-100" alt="env-8" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">玉ねぎ</span>
          </div>
          <div class="col-4_sm-6" @click="openModal(9)" style="margin-bottom: 3rem">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img src="/coffee.jpg" width="230px" class="max-width-100" alt="env-9" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">coffee</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="waku">
        <h2>
          アクセス
        </h2>
        <div>
          <div class="col-12" style="max-width: 1024px">
            <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.7642365881884!2d139.7470280155736!3d35.732016380182536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dbe58002c57%3A0x2782e0d9cd45dbba!2z44CSMTEzLTAwMjEg5p2x5Lqs6YO95paH5Lqs5Yy65pys6aeS6L6877yS5LiB55uu77yS77yY4oiS77yS77yY!5e0!3m2!1sja!2sjp!4v1616769040034!5m2!1sja!2sjp" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
          </div>
          <div class="col-12" style="max-width: 1024px;padding: .5rem">
            <h3>住所</h3>
            <span>
            〒113-0021 東京都文京区本駒込2-28-28<br>
            </span>
            <a href="https://goo.gl/maps/zXUAa3PjWG8VPhmbA" target="_blank" style="margin-bottom: .5rem">Google Map</a>

            <div class="col-12" style="max-width: 1024px;margin-top: .5rem">
              <iframe class="map-iframe" src="https://www.google.com/maps/embed?pb=!4v1616769191130!6m8!1m7!1sheU33yrr2_Vllel9JKdMCg!2m2!1d35.73210896288906!2d139.7493929030151!3f246.22672751775977!4f-1.1164638152424828!5f3.325193203789971" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-color">
      <div class="waku">
        <h2>
          注意事項
        </h2>
        <div class="padding-1">
          近隣・他の方のご迷惑となる行為は禁止です。また、意図せず利用時間中であっても
          ご退出をお願いする場合がございます。ご了承いただけますようよろしくお願いいたします。
        </div>
      </div>
    </div>
    <div>
      <div class="waku">
        <h2>
          予約方法
        </h2>
        <div class="padding-1">
          <div class="center-align" style="margin: .5rem 0">
            <a href="https://timerex.net/s/makki/1a4a6cbf">https://timerex.net/s/makki/1a4a6cbf</a>
          </div>
          <TimeRex />
          <div style="margin-top: .5rem">
            備考欄に<利用終了時刻><利用人数>をお書きください。
            その後、予約確定メールをお送りします。予約は初めの１枠のみで大丈夫です。人数超過の場合はお断りする場合がございます。
          </div>
        </div>
      </div>
    </div>
    <div class="bg-color">
      <div class="waku">
        <h2>
          貸出実績
        </h2>
        <div class="padding-1">
          <table style="padding: 0 2rem;border-collapse: collapse;width: 100%">
            <tbody>
              <tr v-for="i in day">
                <th style="">
                  {{ i["day"] }}
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse">
                  {{ i["text"]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="">
      <div class="waku">
        <h2>
          わたしについて
        </h2>
        <div class="center-align">
          ただの１住人です。休職中<br>
          <a href="https://creedo.jp/users/47430e40" target="_blank">https://creedo.jp/users/47430e40</a>
        </div>
      </div>
    </div>
    <footer>
      <div>
         © klavier.page
      </div>
    </footer>
    <transition name="modal" appear v-if="modal">
      <div class="modal modal-overlay" @click="closeModal">
        <div class="modal-window" style="max-height: 90vh">
          <div class="modal-header" style="position: relative">
            {{ title }}
            <button @click="closeModal" style="position: absolute;right: 1rem;top: .5rem;height: 1.8rem;width: 1.8rem;padding: .05rem 0 0 0">×</button>
          </div>
          <div class="modal-content" style="overflow-y: auto;max-height: 80vh;">
            <div class="grid col-12">
              <div class="col-12" style="max-width: 777px;margin: auto;text-align: center">
                <nuxt-img :src="img" width="300px" style="height: auto" alt="env-1" />
                <div class="col-12" style="padding: 1rem;text-align: left">
                  {{ text }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        modal: false,
        text: undefined,
        img: undefined,
        day: [
          {day: "3/26" , text: "サービス開始"},
          {day: "3/27" , text: "３名"},
          {day: "3/28" , text: " - "},
          {day: "3/29" , text: " - "},
          {day: "3/30" , text: " - "},
          {day: "3/31" , text: " - "},
          {day: "4/01" , text: " - "},
          {day: "4/02" , text: " - "},
          {day: "4/03" , text: " - "},
          {day: "4/04" , text: " - "},
          {day: "4/05" , text: " - "},
          {day: "4/06" , text: " - "},
          {day: "4/07" , text: " - "},
          {day: "4/08" , text: " - "},
          {day: "4/09" , text: " - "},
          {day: "4/10" , text: " - "},
          {day: "4/11" , text: " - "},
          {day: "4/12" , text: " - "},
          {day: "4/13" , text: " - "},
          {day: "4/14" , text: " - "},
          {day: "4/15" , text: " - "},
          {day: "4/16" , text: " - "},
        ]
      }
    },
    methods: {
      openModal(number) {
        this.modal = true;
        if(number == 1){
          this.text = "まあまあの速度がでます。";
          this.title = "Wi-Fi";
          this.img = "/wifi2.jpg";
        }else if(number == 2){
          this.text = "2台用意がございます。台を高くすればスタンドデスクも可能です。";
          this.title = "モニター";
          this.img = "/moniter2.jpg";
        }else if(number == 3){
          this.text = "多数ございます";
          this.title = "電源";
          this.img = "/power.jpg";
        }else if(number == 4){
          this.text = "加湿器のほか、暖房や換気など空調調節いただけます。";
          this.title = "加湿器";
          this.img = "/water.jpg";
        }else if(number == 5){
          this.text = "VRゲームです。「beat saber」のアプリがインストールされています。休憩にどうぞ";
          this.title = "Oculus Quest";
          this.img = "/oculus.jpg";
        }else if(number == 6){
          this.text = "食材の持ち込みも可です。住人がいないので、冷蔵庫も空気を冷やして待っています。自由にお使いください。";
          this.title = "キッチン";
          this.img = "/cool.jpg";
        }else if(number == 7){
          this.text = "アサヒのスタイルフリーは私が好きなのでサービスです。";
          this.title = "発泡酒";
          this.img = "/beer.jpg";
        }else if(number == 8){
          this.text = "買いすぎてしまったのでサービスです。";
          this.title = "玉ねぎ";
          this.img = "/onion.jpg";
        }else if(number == 9){
          this.text = "賞味期限が切れているのでサービスです。";
          this.title = "coffee";
          this.img = "/coffee.jpg";
        }
      },
      closeModal() {
        this.modal = false
      }
    }
  }
</script>



<style>
/* gridlex */
[class*='grid-'] , [class^='grid'] {
  margin: 0;
}
[class*='col-'] , [class^='col'] {
  padding: 0;
}

html {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
  color: #939597;
  font-style: normal;
  font-weight: 500;
}
header {
  background: url("/main.jpg") center center / cover no-repeat;
  height: 70vh;
  justify-content: center;
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  margin-bottom: 2rem;
}

h1,h2 {
  text-align: center;
  color: rgb(153,110,116,0.5);
  margin: 0;
  padding: 1rem 0;
}

h3 {
  margin: .5rem 0;
}

.h2-sub {
  margin: 0;
  text-align: center;
}

.watashi {
  font-size: 2rem;
    margin-right: .3rem;
    color: #C4438D;
}

body {
  margin: 0;
}

.padding-1 {
  padding: 1rem;
}

.center-align {
  text-align: center;
}

.max-width-100 {
  max-width: 100%;
}

.waku {
  padding-bottom: 3rem;
  width: 100%;
}

.bg-color {
  background: #F7F5DD;
}

footer{
    background-color: black;
    color: #999;
}
footer div{
    padding: 1rem 0 .3rem 0;
    text-align: center;
    font-size: .8rem;
}

table {
  display: block;
  text-align: center;
  overflow: hidden;
  height: 300px;
  overflow-y: scroll;
}

tbody {
  display: inline;
}

th {
  width: 20vw;
  border: 1px solid #000;
  padding: 1rem;
}

td {
  width: 40vw;
  border: 1px solid #000;
  padding: 1rem;
}

.bounce {
  animation: bounce 3s ease alternate;
  text-align: center;
  margin: 1rem 0 2rem 0;
  font-size: 1.3rem;
}

.map-iframe {
  height: 300px;
}

@keyframes bounce{
	0% {
		transform: translateY(-100px);
		animation-timing-function: ease-in;
	}
	30% {
    transform: translateY(0px);
		animation-timing-function: ease-out;
	}
  50% {
    transform: translateY(-40px);
		animation-timing-function: ease-in;
	}
  70% {
    transform: translateY(0px);
		animation-timing-function: ease-out;
	}
	80% {
    transform: translateY(-20px);
		animation-timing-function: ease-in;
	}
	90% {
    transform: translateY(0px);
		animation-timing-function: ease-out;
	}
	95% {
    transform: translateY(-10px);
		animation-timing-function: ease-in;
	}
	100% {
    transform: translateY(0px);
		animation-timing-function: ease-in;
	}
}

.modal-overlay {
  align-items: center;
  background: rgba(0, 0, 0, .5);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  padding: 5vh 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 30;
}

.modal-window {
  background: #FFF;
  border-radius: 4px;
  overflow: hidden;
  width: 90%;
  margin: auto;
}

.modal-content {
  padding: .5rem 1rem;
}

.modal-header {
  background: #CEE8E4;
  padding: 10px;
  text-align: left;
}

.modal-enter-active , .modal-leave-active {
  transition: opacity .4s;
}

.modal-enter-active .modal-window {
  transition: opacity .4s, transform .4s;
}

.modal-leave-active .modal-window {
  transition: opacity .4s, transform .4s;
}

.modal-leave-active {
  transition: opacity .6s ease .4s;
}

.modal-enter , .modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}



@media (max-width: 768px) {
  .display-none-mobile {
    display: none;
  }
}

@media (min-width: 769px) {
  .waku {
    max-width: 777px;
    margin: auto;
  }
  .map-iframe {
    height: 500px;
  }
  th {
    width: 200px;
  }

  td {
    width: 400px;
  }
}
</style>