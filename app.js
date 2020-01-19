//js

/*To enable the SpeechRecognition in Firefox Nightly > 72,
 go to about:config and switch the flags
  media.webspeech.recognition.enable and media.webspeech.recognition.force_enable to true.*/
var message = document.querySelector('#message'),
    ask = document.querySelector('#btnGiveCommand'),

    SpeechRecognition = SpeechRecognition || webkitSpeechRecognition,
    SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList,

    // JSpeech Grammar Format
    grammar = '#JSGF V1.0;',

    recognition = new SpeechRecognition(),
    speechRecognitionList = new SpeechGrammarList();

    
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

// Define the languages of the SpeechRecognition
recognition.lang = 'en-US';

// interimResults Controls whether interim results should be returned
recognition.interimResults = false;

// OnResult event
recognition.onresult = event => {
    setTimeout(() => {
        var last = event.results.length - 1,
        command = event.results[last][0].transcript;

        message.textContent = 'Command: ' + command;

        switch(command.toLowerCase()) {
            case 'what is your name':
                message.textContent = 'My name is Abc';
                break;

            case 'how are you':
                message.textContent = 'I am good, hope you\'re good too';
                break;

            case 'open youtube':
                open("https://www.youtube.com", "_blank");
                message.textContent = 'Done, YouTube is opened';
                break;
                
            case 'open google':
                open("https://www.google.com", "_blank");
                message.textContent = 'Done, Google is opened';
                break;
                
            case 'open facebook':
                open("https://www.facebook.com", "_blank");
                message.textContent = 'Done, Facebook is opened';
                break;

            case 'what time is it':
                var today = new Date();
                var time = today.getHours() + ":" + today.getMinutes();
                message.textContent = 'It is ' + time;
                break;

            case 'thank you':
                message.textContent = 'You are welcome';
                break;
        }
    }, 500);
};

// OnSpeech end event
recognition.onspeechend = () => {
    recognition.stop();
};

// OnError event
recognition.onerror = event => {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}        

// Start recognition by clicking
ask.addEventListener('click', () => {
    recognition.start();
    message.textContent = 'Listening ...';
});








// function twtPost(txtID, URL) {
//   var txt = document.getElementById(txtID).textContent;
//   window.open('https://twitter.com/share?text=' + txt + '&url=' + URL, "_blank");
// }

// function fbPost(URL) {
//   window.open('https://www.facebook.com/sharer/sharer.php?u=' + URL, "_blank");
// }

// function whatsAppShare(txtID, URL) {
//   var txt = document.getElementById(txtID).textContent;
//   window.location.href = "whatsapp://send?text=" + txt + " -- Link: " + URL;
// }
