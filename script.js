const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
function getplayspeed(){
	  let playbackRateInput = document.querySelector('.controls .playbackRate'); // replace '.playbackRate' with the correct class or id of your input
    alert(playbackRateInput.value);
}

function setplayspeed(){
    let video = document.querySelector('video'); // replace 'video' with the correct selector if necessary
    video.playbackRate = 0.5;
}