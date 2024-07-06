const bar = document.getElementById("bar");
const steps = document.querySelectorAll(".progress-step");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

let currActive = 1;

btnNext.addEventListener("click" , function(){
    currActive++;
    if(currActive > steps.length) currActive = steps.length;

    updateSteps();
});

btnPrev.addEventListener("click" , function(){
    currActive--;
    if(currActive < 1) currActive = 1;
    updateSteps();
});

const updateSteps = () => {
    steps.forEach((step, index) => {
        if (index < currActive)  step.classList.add("active");
        else step.classList.remove("active");
    });

    const actives = document.querySelectorAll(".active");

    bar.style.width = ((actives.length - 1) / (steps.length - 1)) * 100 + "%";

    if(currActive === 1) btnPrev.disabled = true;
    else if (currActive === steps.length) btnNext.disabled = true;
    else {
        btnNext.disabled = false;
        btnPrev.disabled = false;
    }
};