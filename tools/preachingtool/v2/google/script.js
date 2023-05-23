const recordButton = document.getElementById("record-btn");
const stopButton = document.getElementById("stop-btn");
const outputDiv = document.getElementById("output");

const encoding = 'LINEAR16';
const sampleRateHertz = 16000;
const languageCode = 'en-US';
const request = {
  config: {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  },
  interimResults: false,
};

let recorder;
let finalTranscript = "";

recordButton.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({audio: true})
    .then(stream => {
      recorder = new MediaRecorder(stream);
      recorder.start();
    });

  recorder.ondataavailable = async (e) => {
    const audioBlob = new Blob([e.data], { type: 'audio/wav' });
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = async () => {
      const base64Data = reader.result.replace(/^data:audio\/wav;base64,/, "");
      request.audio = {content: base64Data};
      const response = await fetch('https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyCYfIRQ7hEn8ZbH4FWt9xiXbtbJpoOXZ7c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      const data = await response.json();
      if (data.results && data.results[0] && data.results[0].alternatives) {
        const transcript = data.results[0].alternatives[0].transcript;
        finalTranscript += transcript;
        outputDiv.innerHTML = finalTranscript;
      }
    };
  };
});

stopButton.addEventListener("click", () => {
  recorder.stop();
});
