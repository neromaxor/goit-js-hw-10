import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const delayInput = form.querySelector('[name="delay"]');
    const stateInput = form.querySelector('[name="state"]:checked');

    const delay = parseInt(delayInput.value, 10);
    const state = stateInput.value;

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (state === 'fulfilled') {
            resolve(`✅ Fulfilled promise in ${delay}ms`);
          } else if (state === 'rejected') {
            reject(`❌ Rejected promise in ${delay}ms`);
          }
        }, delay);
      });

      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    }
  });
});
