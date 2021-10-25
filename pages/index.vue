<template>
  <div>
    <header>
    </header>
    <div>
      <p class="center-align font-size-0-8-mobile">※このページは１住人による非公式ページです</p>
      <div class="waku">
        <h1>
          募集内容
        </h1>
        <div class="bounce">
          シェアハウスに住人が<br><span class="watashi">私</span>だけになってしまいました・・・！
        </div>
        <div class="padding-1">
          コワーキングスペースのような使い方ができるようにリビングを
          整えていますので、お友達として遊びに来ませんか？？？
          シェアハウスに興味がある方、雀荘をお探しの方、もくもく作業したい方、就活合間のお茶スペースをお探しの方、、、
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
          <div v-for="item in items" class="col-4_sm-6" @click="openModal(item['id'])" style="margin-bottom: 3rem;cursor: pointer" :key="item['id']">
            <div style="position: relative;padding: 0 1rem">
              <nuxt-img :src="item['src']" width="230" class="max-width-100" :alt="item['alt']" />
            </div>
            <span style="padding-left: 1rem;text-decoration: underline">{{ item['title'] }}</span>
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
          <div class="col-12" style="max-width: 1024px;padding: 0 .5rem">
            <h3>住所</h3>
            <span>
            〒113-0021 東京都文京区本駒込2-28-28<br>
            </span>
            <a href="https://goo.gl/maps/zXUAa3PjWG8VPhmbA" target="_blank" style="margin-bottom: .5rem">Google Map</a>
            <h3 style="margin-top: 2rem">アクセス</h3>
            <span>
              駒込駅：徒歩5分<br>
              千石駅：徒歩5分
            </span>
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
            予約は初めの１枠のみで大丈夫です。備考欄に終了時刻をお書きください。人数超過の場合はお断りする場合がございます。
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
          <table style="padding: 0 1rem;border-collapse: collapse;width: 100%">
            <tbody>
              <tr v-for="i in days" :key="i['day']">
                <th style="">
                  {{ i["day"] }}
                </th>
                <td style="border: 1px solid #000;padding: 1rem;border-collapse: collapse">
                  {{ i["text"]}}
                </td>
              </tr>
            </tbody>
          </table>
	  ※気が向いたら記録しています。
        </div>
      </div>
    </div>
    <div class="">
      <div class="waku">
        <h2>
          わたしについて
        </h2>
        <div class="center-align">
          ただの１住人です<br>
          <a href="https://portfolio.klavier.page/" target="_blank">https://portfolio.klavier.page/</a>
        </div>
      </div>
    </div>
    <footer>
      <div>
         © klavier.page
      </div>
    </footer>
    <transition name="modal" appear v-if="modal">
      <div class="modal modal-overlay" style="cursor: pointer" @click.self="closeModal">
        <div class="modal-window" style="max-height: 90vh">
          <div class="modal-header" style="position: relative">
            {{ title }}
            <button @click="closeModal" style="position: absolute;right: .6rem;top: 1rem;background: none;border: none;color: #555;cursor: pointer">×</button>
          </div>
          <div class="modal-content" style="overflow-y: auto;max-height: 80vh;">
            <div class="grid col-12">
              <div class="col-12" style="max-width: 777px;margin: auto;text-align: center">
                <nuxt-img :src="modal_src" width="300" style="height: auto" alt="env-1" />
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
        title: '',
        modal_src: undefined,
        days: [
          {day: "3/26" , text: "サービス開始"},
          {day: "3/27" , text: "３名／コワーキングスペース"},
          {day: "4/02" , text: "３名／夕食・DVD鑑賞会"},
          {day: "4/24" , text: "３名／屋上BBQ会"},
          {day: "5/03" , text: "２名／ライブ配信リハ"},
          {day: "6/01" , text: "３名／麻雀"},
          {day: "7/09" , text: "piscine終了会"},
          {day: "7/22" , text: "弦楽演奏リハ"},
          {day: "7/31" , text: "ビールサーバー導入会"},
          {day: "8/13" , text: "42tokyo入学会"},
        ],
        items: [
          {id: 0 , title: "Wi-Fi", alt: "wifi", src: "/wifi.jpg", modal_src: "/wifi2.jpg", text: "まあまあの速度がでます。"},
          {id: 1 , title: "モニター", alt: "moniter", src: "/moniter.jpg", modal_src: "/moniter2.jpg", text: "2台用意がございます。台を高くすればスタンドデスクも可能です。"},
          {id: 2 , title: "電源", alt: "power", src: "/power.jpg", modal_src: "/power.jpg", text: "多数ございます"},
          {id: 3 , title: "Oculus Quest", alt: "oculus", src: "/oculus.jpg", modal_src: "/oculus.jpg", text: "VRゲームです。「beat saber」のアプリがインストールされています。休憩にどうぞ"},
          {id: 4 , title: "キッチン", alt: "kitchen", src: "/kitchen.jpg", modal_src: "/cool.jpg", text: "食材の持ち込みも可です。住人がいないので、冷蔵庫も空気を冷やして待っています。自由にお使いください。"},
          {id: 5 , title: "発泡酒", alt: "beer", src: "/beer2.jpg", modal_src: "/beer.jpg", text: "アサヒのスタイルフリーは私が好きなのでサービスです。"},
          {id: 6 , title: "電動麻雀卓AmosJP", alt: "mahjong", src: "/mahjong.jpg", modal_src: "/mahjong.jpg", text: "点数表示ナシ。3麻対応。"},
        ]
      }
    },
    methods: {
      openModal(number) {
        this.modal = true
        this.text = this.items[number]['text']
        this.title = this.items[number]['title']
        this.modal_src = this.items[number]['modal_src']
      },
      closeModal() {
        this.modal = false
      }
    }
  }
</script>

<style>
/* normalize */
/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

 html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the `main` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}


/* semantic */
@media (max-width: 768px) {
  .display-none-mobile {
    display: none;
  }
}

@media (min-width: 769px) {
  .display-none-pc {
    display: none;
  }
}
</style>
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
  line-height: 2rem;
  letter-spacing: .1rem;
}
header {
  background: url("/main.jpg") center center / cover no-repeat;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size:cover;
  background-size: cover;
  height: 70vh;
  justify-content: center;
  position: relative;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  color: white;
  margin-bottom: .5rem;
}

.font-size-0-8-mobile {
  font-size: .8rem
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
  .font-size-0-8-mobile {
    font-size: 1rem
  }
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
