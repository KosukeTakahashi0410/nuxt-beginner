# nuxt-beginner
## propsについて
Reactと同じような考え方でよさそう  
親から子にデータを渡すイメージ  

## ライブラリ取り込み
ライブラリをインポート  
pluginsにインポートするためのファイル追加  
element.jsみたいなファイルを作って

```
import Vue from 'vue'
// 取り込むライブラリ、取り込むものをimport
import Elemetn from 'element-ui'
import 'elment...'

// 使うものを宣言
Vue.use(Element)
```

Nuxtのconfigで読み込みの設定をする

```
plugins: [
  // 取り込むプラグインのパス
  '~/plugins/element.js'
]
```

## モジュール
pluginと似ている  
plubinはVue,一般的JSのライブラリを追加するもの  
モジュールはNuxt限定で追加していくイメージ  
axiosとか諸々  
調べればプラグインの入れ方はだいたい書いてあるっぽい  

## Vuex
Storeを作ってstateを保持する  
