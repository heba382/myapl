 function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("من فضلك اكتب اسم المدينة");
    return;
  }

  // بيانات تجريبية ثابتة (مش من API)
  const fakeData = {
    name: city,
    temp: 26,
    desc: "جو مشمس",
    icon: "01d" // أيقونة الشمس
  };

  document.getElementById("weather").innerHTML = `
    <div class="icon"><img src="https://openweathermap.org/img/wn/${fakeData.icon}@2x.png" alt="icon"></div>
    <p><strong>${fakeData.name}</strong></p>
    <p>🌡️ ${fakeData.temp}°C</p>
    <p>${fakeData.desc}</p>
  `;
}
