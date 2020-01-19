//js

/*To enable the SpeechRecognition in Firefox Nightly > 72,
 go to about:config and switch the flags
  media.webspeech.recognition.enable and media.webspeech.recognition.force_enable to true.*/
var message = document.querySelector('#message');
var ask = document.querySelector('#btnGiveCommand');

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

    /*JSpeech Grammar Format*/
var grammar = '#JSGF V1.0;';

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

    
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

/**Choose language */
recognition.lang = 'en-US';

/** */
recognition.interimResults = false;

/**when there is a result */
recognition.onresult = event => {
    setTimeout(() => {
        var says = event.results.length - 1,
        command = event.results[says][0].transcript;

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
                message.textContent = 'YouTube is opened';
                break;
                
            case 'open google':
                open("https://www.google.com", "_blank");
                message.textContent = 'Google is opened';
                break;
                
            case 'open facebook':
                open("https://www.facebook.com", "_blank");
                message.textContent = 'Facebook is opened';
                break;

            case 'open twitter':
              open("https://www.twitter.com", "_blank");
              message.textContent = 'Twitter is opened';
              break;

            case 'open whatsapp':
              window.location.href = "whatsapp://"
              message.textContent = 'Whatsapp is opened';
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

/**Ask button to start recognition */
ask.addEventListener('click', () => {
  recognition.start();
  message.textContent = 'Listening ...';
});

/*on speech*/
recognition.onspeechend = () => {
    recognition.stop();
};

/**when error happens */
recognition.onerror = event => {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}        










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
