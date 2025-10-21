document.getElementById('speak-button').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    
    // Set the voice to a female voice if available
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => voice.name.includes('Female')) || voices[0]; // Fallback to first available voice
    utterance.voice = femaleVoice;

    window.speechSynthesis.speak(utterance);
});

// Load voices when they are available
window.speechSynthesis.onvoiceschanged = function() {
    const voices = window.speechSynthesis.getVoices();
    console.log('Available voices:', voices);
};
