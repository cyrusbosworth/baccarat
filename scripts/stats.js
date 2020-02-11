const stats = document.querySelectorAll("#stats div");
const [total, tie, player, banker] = stats;
export function resetStats() {
  stats.forEach(stat => {
    stat.textContent = "0";
  });
}

export function increaseStats(result) {
  total.textContent = Number(total.textContent) + 1;
  switch (result) {
    case "player":
      player.textContent = Number(player.textContent) + 1;
      break;
    case "banker":
      banker.textContent = Number(banker.textContent) + 1;
      break;
    case "tie":
      tie.textContent = Number(tie.textContent) + 1;
      break;
  }
}
