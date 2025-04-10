const samples = [
  { name: "Muda", file: "muda.mp3", duration: 0.03 },
  { name: "Onichan", file: "onichan.mp3", duration: 0.01 },
  { name: "Out", file: "out.mp3", duration: 0.01 },
  { name: "Plankton", file: "plankton.mp3", duration: 0.05 },
  { name: "Solo", file: "solo.mp3", duration: 0.37 },
  { name: "Miku", file: "miku.mp3", duration: 0.43 },
  { name: "Tuturu", file: "tuturu.mp3", duration: 0.01 },
  { name: "Uhe", file: "uhe.mp3", duration: 0.01 },
  { name: "Omg", file: "omg.mp3", duration: 0.01 },
  { name: "Explosion", file: "explosion.mp3", duration: 0.01 },
  { name: "Horse", file: "horse.mp3", duration: 0.06 },
];

const grid = document.getElementById("sampleGrid");
const speakBtn = document.getElementById("speakBtn");
const textarea = document.querySelector("textarea");

let currentPage = 0;
const samplesPerPage = 9;

function renderSamples() {
  grid.innerHTML = "";
  const start = currentPage * samplesPerPage;
  const currentSamples = samples.slice(start, start + samplesPerPage);

  currentSamples.forEach((sample, index) => {
    const div = document.createElement("div");
    div.className = "sample";
    div.innerHTML = `
      <strong>${start + index + 1}. ${sample.name}</strong><br>
      <span>${sample.duration} sec</span>
    `;
    div.onclick = () => {
      const audio = new Audio("samples/" + sample.file);
      audio.play();
    };
    grid.appendChild(div);
  });

  document.getElementById("prevBtn").classList.toggle("hidden", currentPage === 0);
  document.getElementById("nextBtn").classList.toggle("hidden", (start + samplesPerPage) >= samples.length);
  document.getElementById("sampleBankTitle").textContent = `Sample Bank ${currentPage + 1}`;
}

renderSamples();

document.getElementById("prevBtn").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    renderSamples();
  }
};

document.getElementById("nextBtn").onclick = () => {
  if ((currentPage + 1) * samplesPerPage < samples.length) {
    currentPage++;
    renderSamples();
  }
};

speakBtn.onclick = () => {
  const msg = new SpeechSynthesisUtterance(textarea.value);
  window.speechSynthesis.speak(msg);
};
