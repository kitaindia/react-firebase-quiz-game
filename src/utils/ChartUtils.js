// Google Chart 描画用の配列を作成
class ChartUtils {

    // 引数として与えられたクイズの、各選択肢の回答者数をまとめる
    static createPoll(answers, quizIndex, quiz) {
        let data = quiz.answers.map(function(ansText, index) {
            let ansCount = 0
            Object.keys(answers).forEach(function(key) {
                let answerer = answers[key]
                if (answerer[quizIndex] === index) ansCount += 1
            })

            const text = (index + 1) + ". " + ansText + " " + ansCount + "人"
            return [text, ansCount, "#87CEEB"];
        })

        return [['回答', '選択数', {role: 'style'}]].concat(data)
    }

    // 全参加者の総合順位を作成
    static createRanking(answers, quizzes) {
        let ranking = []

        // 各参加者の正解数をカウント
        Object.keys(answers).forEach(function(key) {
            const user = answers[key]
            const name = key.substring(0, 6)
            let correctCount = 0

            quizzes.forEach(function(quiz, index) {
                if (user && user[index] === quiz.ansIndex) correctCount += 1
            })
            ranking.push([name, correctCount, correctCount + "問正解 ", "#87CEEB"])
        })

        // 正解数順に順位付け
        ranking = ranking.sort(function(a, b) {
            return b[1] - a[1]
        })

        ranking.forEach(function(rank, index) {
            rank[0] += (" " + (index + 1) + "位")
        })

        if (ranking[0]) ranking[0][3] = "gold"
        return [['名前', '正解数', {role: 'annotation'}, {role: 'style'}]].concat(ranking.slice(0, 10))
    }
}

export default ChartUtils
