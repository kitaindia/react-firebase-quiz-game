// クイズの進行状態を表す共通のパラメータ
const steps = {
    BEFORE_GAME: -1, // クイズゲーム開始前
    ANSWER_TIME: 1, // スクリーン：クイズ表示, スマートフォン：回答可能
    SHOW_POLL: 2, // スクリーン：回答結果グラフ表示, スマートフォン: 回答不可
    SHOW_ANSWER: 3, // スクリーン: 正解表示, スマートフォン: 回答不可
    SHOW_RANKING: 4 // スクリーン：総合順位表示, スマートフォン: 回答不可
}

// 回答者の名前を保持するクッキー
const cookie = {
    NAME: "_CPQZ",
    MAX_AGE: 24 * 3600
}

class Constants {
    static get steps() {return steps}
    static get cookie() {return cookie}
}

export default Constants
