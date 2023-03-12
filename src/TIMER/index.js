const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {

  return (seconds) => {

    const timer = setInterval(() => {

      const hour = Math.floor(seconds / 60 / 60)
      const min = Math.floor(seconds / 60) - (hour * 60)
      const sec = seconds % 60

      if (seconds <= 0) {

        clearInterval(timer)
        alert('время закончилось')
        timerEl.innerHTML = 'hh:mm:ss'

      } else {

        const formatted = [
          hour.toString().padStart(2, '0'),
          min.toString().padStart(2, '0'),
          sec.toString().padStart(2, '0')
        ].join(':')

        timerEl.innerHTML = formatted

      }

      --seconds

    }, 1000)

    inputEl.dataset.timerId = timer.toString()

  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g,'')
});

buttonEl.addEventListener('click', () => {

  clearInterval(Number(inputEl.dataset.timerId))

  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
