const earnedMoneyElement = document.getElementById('earned-money')
const progressBar = document.getElementById('money-progress')
const progressLayer = document.querySelector('.progress-layer')

let currentValue = 0
const targetValue = 400000
const incrementSpeed = 5000

const interval = setInterval(function() {
  if (currentValue >= targetValue) {
    clearInterval(interval)
    return
  }

  currentValue += Math.min(incrementSpeed, targetValue - currentValue)
  earnedMoneyElement.textContent = `${currentValue.toLocaleString()}₽`
  progressBar.value = currentValue


  const percentComplete = (currentValue / targetValue) * 100;
  progressLayer.style.setProperty('--percent', percentComplete / 100)
}, 100)
