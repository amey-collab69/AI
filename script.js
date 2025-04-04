const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
 

function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>=12 && hour<17){
        speak("Good Afternoon Boss...")
    }

    else{
        speak("Good Evening Boss...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes('who are you')){
      speak("My name is JARVIS. I'm a Virtual Assistant Created by My God Foxa whose real name is Amay.");
    }
    else if(message.includes('How are you')){
      speak(" i am very fine Thank you so much for asking I feel so much grateful for helping you.");
    }

    
    else if(message.includes('what is your name')){
        speak("My name is JARVIS.");
    }
    else if(message.includes('say something for my friends')){
        speak("You are very lucky that you found such an amazing person as a friend.");
    }
    else if(message.includes('bye')){
        speak("Bye Nice metting you.");

    }   
    else if(message.includes('who is my college best friend ')){
            speak(" Harshil is the  best friend of Amay whom he meet in college and he is with him till now");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }
    else if(message.includes("play satranga song")){
        window.open("https://youtu.be/w_eEnbApH0A?si=o6Jw4gK3ywg-xBxA", "_blank");
        speak("Playing Satranga Song")
    }
    else if(message.includes("play ishq hai song")){
        window.open("https://youtu.be/PczYAZLHs8o?si=YChpq8A5ODwcKg9-", "_blank");
        speak("Playing Ishq Hai Song")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('Tell me something about who is ') || message .includes('Tell me something about what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}