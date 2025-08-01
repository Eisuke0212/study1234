<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>ホーム - 勉強育成ゲーム</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>勉強育成ゲーム</h1>
  
  <p>教科を選んで勉強しよう！</p>
  
  <div class="subjects">
    <button onclick="selectSubject('国語')">国語</button>
    <button onclick="selectSubject('数学')">数学</button>
    <button onclick="selectSubject('英語')">英語</button>
    <button onclick="selectSubject('理科')">理科</button>
    <button onclick="selectSubject('社会')">社会</button>
  </div>

  <div class="mode">
    <p>勉強モードを選んでね</p>
    <button onclick="startTimer()">タイマー</button>
    <button onclick="startStopwatch()">ストップウォッチ</button>
  </div>

  <p>コイン：<span id="coins">0</span></p>
  <button onclick="goPet()">ペットを見る</button>

  <script>
    let selectedSubject = '';

    function selectSubject(subject) {
      selectedSubject = subject;
      alert(subject + 'が選ばれました');
    }

    function startTimer() {
      if (!selectedSubject) return alert('教科を選んでね');
      location.href = 'timer.html?subject=' + selectedSubject;
    }

    function startStopwatch() {
      if (!selectedSubject) return alert('教科を選んでね');
      location.href = 'stopwatch.html?subject=' + selectedSubject;
    }

    function goPet() {
      location.href = 'pet.html';
    }

    document.getElementById('coins').textContent = localStorage.getItem('coins') || 0;
  </script>
</body>
</html>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
 <button onclick="resetLocalStorage()"><span stlyle="color: red; font-weight:900;">データをリセットする</span></button>

  <script>
    function resetLocalStorage() {
      if (confirm("本当にすべてのデータを削除しますか？")) {
        localStorage.clear(); // localStorageを全削除
        alert("データを削除しました！");
      }
    }
  </script>

  <footer>
    <a href="question.html"><button onclick="question">問い合わせボタン</button></a>
  </footer>
</body>
</html>

