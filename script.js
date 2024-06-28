const scene = document.querySelector("a-scene");
const button = document.querySelector('#button');

button.addEventListener('mouseenter', () => {
    console.log('Mouse entered the button');
    button.setAttribute('material', 'color', 'magenta');
  });

  button.addEventListener('mouseleave', () => {
    console.log('Mouse left the button');
    button.setAttribute('material', 'color', 'red');
  });

  button.addEventListener('click', () => {
    console.log('Button clicked');
  });
});


document.getElementById('button').addEventListener('click', function() {
    for(const particle in particles){
        particle.emit('wavefunction-collapse')
    }
});

numParticles = 100
particleRadius = 0.5
volumeSize = 500
particles = []

for(let i = 0; i < numParticles; i++){
    posX = random(-volumeSize/2, volumeSize/2)
    posY = random(-volumeSize/2, volumeSize/2)
    posZ = random(-volumeSize/2, volumeSize/2)

    const particle = document.createElement("a-sphere");

    particle.setAttribute('radius', particleRadius)
    particle.setAttribute('position', {x: posX, y: posY, z: posZ})
    particle.setAttribute('color', 'blue')

    scene.appendChild(particle)
    particles.append(particle)

}




centerPoint = {x: 0, y: 0, z: 0}
animationDuration = 2000  

for(const particle in particles){
    animation = createElement('a-animation')
    animation.setAttribute('attribute', 'position')
    animation.setAttribute('dur', animationDuration)
    animation.setAttribute('to', centerPoint)

    particle.appendChild(animation)

}


