export function animationProgressBar() {
  // Obtén la barra de progreso
  const $progressBars = document.querySelectorAll('.progressbar');

  // Simula un aumento gradual del valor de la barra de progreso
  const simulateProgress = () => {
    $progressBars.forEach($bar => {
      const currentValueBar = $bar.value;
      console.log($bar.value);
      let value = 0;

      // Utiliza un intervalo paraincrementar el valor gradualmente
      const interval = setInterval(() => {
        value += 1;
        $bar.value = value;

        // Si alcanzamos el % del "value" definido en <progress>, detenemos el intervalo
        if (value >= currentValueBar) {
          clearInterval(interval);
        }
      }, 20); // Ajusta el intervalo según tus preferencias
    });
  };

  // Llama a la función para iniciar la simulación al cargar la página
  simulateProgress();
}
const $colorsItems = document.querySelectorAll('.colors__item--');
$colorsItems.forEach($item => {
  $item.addEventListener('click', () => {
    const $bar = $item.closest('.progressbar');
    const color = $item.dataset.color;

    // Elimina el contenido de la barra de progreso
    $bar.querySelector('.progressbar::after').textContent = '';

    // Establece el color de la barra de progreso
    $bar.style.backgroundColor = color;
  });
});
