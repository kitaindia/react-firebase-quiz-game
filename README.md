### React-Firebase Quiz Game

二次会用に作ったクイズゲーム

[Firebase Realtime DB](https://www.npmjs.com/package/firebase) でゲームの進行を参加者に同期します。

for 開発

```
$ cd ./react-firebase-quiz-game
# src/firebase/config.jsにFirebaseプロジェクトの設定を記入
$ npm install
$ npm start
```

for デプロイ ([Firebase Hosting](https://firebase.google.com/docs/hosting/) の場合)

```
$ cd ./react-firebase-quiz-game
# src/firebase/config.jsにFirebaseプロジェクトの設定を記入
$ npm install
$ npm run build
$ npm install -g firebase-tools
$ firebase login --interactive
$ firebase init
# initの途中publicディレクトリにはbuildを指定
$ firebase deploy
```
