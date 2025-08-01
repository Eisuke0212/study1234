// 時間とコイン表示の更新（ホーム画面用）
document.addEventListener("DOMContentLoaded", () => {
  const subjects = ["英語", "数学", "理科", "社会"];
  subjects.forEach(subject => {
    const totalSeconds = parseInt(localStorage.getItem(`${subject}-time`)) || 0;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const timeStr = `${minutes}分${seconds}秒`;
    const el = document.getElementById(`${subject}-time`);
    if (el) el.textContent = timeStr;
  });

  const coins = parseInt(localStorage.getItem("coins")) || 0;
  const coinEl = document.getElementById("coin-count");
  if (coinEl) coinEl.textContent = coins;
});
