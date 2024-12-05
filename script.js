const description = {
    underweight:
        "Anda kekurangan berat badan, mungkin Anda harus menaikkan berat badan. Jangan ragu untuk konsultasi dengan ahli gizi.",
    normal: "Anda memiliki berat badan normal. Pertahankan berat badan Anda. Jangan ragu untuk konsultasi dengan ahli gizi.",
    overweight:
        "Anda memiliki berat badan berlebih, mungkin Anda harus menurunkan berat badan. Jangan ragu untuk konsultasi dengan ahli gizi.",
    obese: "Anda memiliki berat badan yang sangat berlebih, mungkin Anda harus menurunkan berat badan. Jangan ragu untuk konsultasi dengan ahli gizi.",
};
const weight = document.getElementById("weight");
const age = document.getElementById("age");
const height = document.getElementById("height");
const calculateBMI = document.getElementById("calculate-BMI");
const reset = document.getElementById("reset");
const gender = document.querySelectorAll('input[name="gender"]');
const resultWeight = document.getElementById("result-weight");
const conclusion = document.getElementById("conclusion");
const calculation = document.getElementById("calculation");
const minusOne = document.getElementById("minus-1");
const plusOne = document.getElementById("plus-1");
const majorResult = document.getElementById("major-result");
const resultDisc = document.getElementById("result-disc");
calculateBMI.addEventListener("click", () => {
    let genderValue = null;
    gender.forEach((gender) => {
        if (gender.checked) genderValue = gender.value;
    });
    if (weight.value === "" || age.value === "" || height.value === "" || genderValue === null) {
        alert("Please fill all the input fields");
    } else if (
        (typeof weight.value === "number" && weight.value < 0) ||
        (typeof age.value === "number" && age.value < 0) ||
        (typeof height.value === "number" && height.value < 0) || isNaN(weight.value) || isNaN(age.value) || isNaN(height.value)
    ) {
        alert("Please enter a valid number");
    } else {
        majorResult.style.display = "block";
        const bmi = (weight.value / (height.value / 100) ** 2).toFixed(2);
        calculation.textContent = bmi;
        minusOne.textContent = bmi - 1;
        plusOne.textContent = bmi + 1;
        if (bmi < 18.5) {
            resultWeight.textContent = "Underweight";
            conclusion.textContent = "Anda memiliki berat badan kurang";
            resultDisc.textContent = description.underweight;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultWeight.textContent = "Normal Weight";
            conclusion.textContent = "Anda memiliki berat badan ideal";
            resultDisc.textContent = description.normal;
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultWeight.textContent = "Overweight";
            conclusion.textContent = "Anda memiliki berat badan berlebih";
            resultDisc.textContent = description.overweight;
        } else {
            resultWeight.textContent = "Obesity";
            conclusion.textContent = "Anda memiliki berat badan obesitas";
            resultDisc.textContent = description.obese;
        }
    }
});
reset.addEventListener("click", () => {
    weight.value = "";
    age.value = "";
    height.value = "";
    majorResult.style.display = "none";
});
