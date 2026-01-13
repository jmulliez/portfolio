const needle = document.getElementById('needle');
const speedVal = document.getElementById('speed-val');
const gearInd = document.getElementById('gear');

const maxSpeed = 360;
const minAngle = -90;
const maxAngle = 90;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / docHeight;

    if (scrollPercent > 1) scrollPercent = 1;
    if (scrollPercent < 0) scrollPercent = 0;

    const currentSpeed = Math.floor(scrollPercent * maxSpeed);
    const currentAngle = minAngle + (scrollPercent * (maxAngle - minAngle));

    let currentGear = 'N';
    if (currentSpeed > 0 && currentSpeed < 50) currentGear = 1;
    else if (currentSpeed >= 50 && currentSpeed < 100) currentGear = 2;
    else if (currentSpeed >= 100 && currentSpeed < 150) currentGear = 3;
    else if (currentSpeed >= 150 && currentSpeed < 200) currentGear = 4;
    else if (currentSpeed >= 200 && currentSpeed < 250) currentGear = 5;
    else if (currentSpeed >= 250 && currentSpeed < 300) currentGear = 6;
    else if (currentSpeed >= 300 && currentSpeed < 340) currentGear = 7;
    else if (currentSpeed >= 340) currentGear = 8;

    if (currentSpeed === 0) currentGear = 'N';

    needle.style.transform = `rotate(${currentAngle}deg)`;
    speedVal.innerText = currentSpeed;
    gearInd.innerText = currentGear;

    if (currentGear === 8) {
        gearInd.style.color = 'red';
        gearInd.style.borderColor = 'red';
    } else {
        gearInd.style.color = '#FFF200';
        gearInd.style.borderColor = '#FFF200';
    }
});
