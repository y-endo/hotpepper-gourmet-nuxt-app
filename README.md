# hotpepper-gourmet-nuxt-app

ホットペッパーグルメサーチAPIを使ったNuxt製の店舗検索Webサービス  

## ハマったこと
queryを変更したときにasyncDataが走らない。  
 → watchQueryを使って解決
https://github.com/nuxt/nuxt.js/issues/2591  
https://ja.nuxtjs.org/api/pages-watchquery/  

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
