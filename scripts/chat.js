// ไม่รู้จะเอาธีมไหนเลยเอาเกมที่เคยเล่นอย่าง Guitar Girl มาทำแล้วมันดีกว่าที่คิด~
document.addEventListener("DOMContentLoaded", () => {
  const botProfile = { name: "ใครสักคน", avatar: "images/bot.png" };
  const userProfile = { name: "คุณ", avatar: "images/user.png" };

  
  const playlist = [
    "sounds/your_day.mp3",
    "sounds/hug.mp3",
    "sounds/a_day_in_october.mp3",
    "sounds/our_memories.mp3"
  ];
  let currentTrackIndex = 0;
  let bgMusic = null;

  const scriptMessages = [
    {
      botText: [ "นี่คุณๆ", "มีอะไรจะบอกแหละ...", "เรื่องสำคัญมากกกเลยล่ะ!" ],
      userText: [ "มีอะไรหรอ?", "รีบๆพูดมาได้แล้ว!" ]
    },
    {
      botText: [ "แต่ถามก่อน" ],
      userText: [ "อะไรหรอ?" ]
    },
    {
      botText: [ "วันนี้วันอาราย~" ],
      userText: [ "ก็วันพุธนิ?" ]
    },
    {
      botText: [ "ให้ตอบใหม่~" ],
      userText: [ "วันที่ 14 ตุลา?" ]
    },
    {
      botText: [ "ก็ถูกนั่นแหละ;-;", "บ๊อง-" ],
      userText: [ "เอ้า!?", "อะไรเนี่ย!?" ]
    },
    {
      botText: [ "วันเกิดคุณไง", "เห้ออออ 🙂‍↕️" ],
      userText: [ "ก็รู้นั่นแหละหน่า 😗" ]
    },
    {
      botText: [],
      userText: [ "แล้วมีอะไรหรอ?" ]
    },
    {
      botText: [ "อยากจะบอกว่า...", "แฮปปี้เบิร์ดเดย์ ทู ยู..." ],
      userText: [ "?" ]
    },
    {
      botText: [ "แฮปปี้เบิร์ดเดย์ ทู ยู...", "แฮปปี้เบิร์ดเดย์ แฮปปี้เบิร์ดเดย์", "แฮปปี้เบิร์ดเดย์ ทู ยู!" ],
      userText: []
    },
    {
      botText: [ "ขอให้คุณสุขสมบูรณ์", "เพิ่มพูนผ่องผิวพรรณ", "ร่างกายแข็งแรงไร้โรคันป์", "อายุนั้นยิ่งยืนนาน" ],
      userText: [ "สาธุ-" ]
    },
    {
      botText: [ "เป็นยังไงบ้างๆ ชอบม่ะๆ" ],
      userText: [ "แก่มาก~", "ฟิวคนแก่อวยพร5555+" ]
    },
    {
      botText: [ "😭", "ก็อวยพรไม่ค่อยเก่ง", "ขอโทษได้ไหมล่ะ;-;" ],
      userText: [ "ได้!", "(บังคับโดยคนทำ5555+)" ]
    },
    {
      botText: [ "และอีกอย่าง" ],
      userText: [ "?" ]
    },
    {
      botText: [ "ถ้าหนื่อยก็พักล่ะนะ", "อย่าฝืนตัวเองเยอะนะ" ],
      userText: [ "..." ]
    },
    {
      botText: [ "พักบ้างล่ะ ปีนี้เหนื่อยแย่เลยนะ" ],
      userText: []
    },
    {
      botText: [ "กินข้าวให้ตรงเวลาด้วยล่ะ", "เป็นห่วงนะ😆" ],
      userText: [ "ค๊าบบบ" ]
    },
    {
      botText: [],
      userText: [ "คุณก็ด้วยล่ะ" ]
    },
    {
      botText: [ "โอเค!" ],
      userText: [ "แล้ว...มีอะไรอยากจะคุยต่อไหม" ]
    },
    {
      botText: [ "ไม่น่า คนทำไม่รู้จะเขียนอะไรต่อล่ะ" ],
      userText: [ "เข้าใจได้" ]
    },
    {
      botText: [ "แต่!" ],
      userText: [ "?" ]
    },
    {
      botText: [ "รู้ไหม ว่าเขาตั้งใจทำให้คุณมากเลยนะ", "ถือจะเป็นแค่มือใหม่", "เรื่องระบบนี้ก็ไปหาจากที่อื่นๆบ้าง AI บ้าง (แค่ระบบ)" ],
      userText: [ "โอเค..." ]
    },
    {
      botText: [ "แต่...บทเนี่ย", "เขาตั้งใจเขียนให้เลยนะ", "พยายามให้ทันวันเกิดคุณเลยล่ะ!", "เขาฝากบอกแบบนั้น" ],
      userText: [ "ขอบคุณนะ" ]
    },
    {
      botText: [ "ฉันเองก็ขอบคุณเหมือนกันนะ" ],
      userText: []
    },
    {
      botText: [ "(แชทและระบบเรฟจากเกม Guitar Girl ของ Neowiz)", "เอาไปใช้เล่นๆได้ล่ะ" ],
      userText: ["เดี๋ยวๆ"]
    },
    {
      botText: ["อะไรหรอ"],
      userText: ["เรื่องสำคัญที่จะบอกอ่ะ"]
    },
    {
      botText: ["อ่อนั่นน่ะหรอ","ก็แค่..."],
      userText: ["แค่?"]
    },
    {
      botText: ["ขอตังค์ 20"],
      userText: ["ก็เอาเลขบัญชีมา"]
    },
    {
      botText: ["ไม่ให้","ว้ายๆ"],
      userText: ["เอ้า?"]
    },
    {
      botText: ["หยอกๆไม่เอาหรอกตังค์น่ะ","🙂‍↕️"],
      userText: ["แล้วไป~"]
    },
    {
      botText: ["แค่นี้แหละมีอะไรคุยกับเขาไปไม่ใช่กับฉ๊าน","ไปเล่นกีต้าร์ล่ะ บ๊ายย"],
      userText: ["ก็ได้ๆ บ๊าย~"]
    },
  ];

  const chatContainer = document.getElementById("chatContainer");
  const chatInput = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const loader = document.getElementById("loader");

  function disableSendBtn() {
    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.style.opacity = "0.5";
      sendBtn.style.cursor = "not-allowed";
    }
  }

  disableSendBtn();
  if (chatInput) chatInput.textContent = "";

  const clickSound = new Audio("sounds/bot-click.mp3");
  clickSound.preload = "auto";

  let isAudioUnlocked = false;

  function unlockAudio() {
    if (isAudioUnlocked) return;
    clickSound.play().then(() => {
      clickSound.pause();
      clickSound.currentTime = 0;
      isAudioUnlocked = true;
    }).catch(() => { });
  }

  function botClickSound() {
    const sound = new Audio("sounds/bot-click.mp3");
    sound.volume = 0.5;
    const playPromise = sound.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });
      });
    }
  }

  function userClickSound() {
    const sound = new Audio("sounds/user-click.mp3");
    sound.volume = 1.0;
    const playPromise = sound.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => { });
      });
    }
  }


  function soundTrack() {
    if (playlist.length === 0) return;

    bgMusic = new Audio(playlist[currentTrackIndex]);
    bgMusic.volume = 0.3;

    bgMusic.addEventListener("ended", () => {
      currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
      soundTrack();
    });

    bgMusic.play().catch(() => { });
  }

  let currentIndex = 0;
  let subIndex = 0;
  let lastSender = null;

  function appendMessage(text, sender) {
    const isUser = sender === "user";
    const profile = isUser ? userProfile : botProfile;
    const isConsecutive = lastSender === sender;

    const chatGroup = document.createElement("div");
    chatGroup.classList.add("chat-group", sender);

    if (isConsecutive) {
      chatGroup.innerHTML = `
        <div class="avatar-placeholder" style="width: 36px; height: 36px; flex-shrink: 0;"></div>
        <div class="message-wrapper">
          <div class="message ${sender}">${text}</div>
        </div>
      `;
    } else {
      chatGroup.innerHTML = `
        <img src="${profile.avatar}" alt="${profile.name}" class="avatar">
        <div class="message-wrapper">
          <span class="sender-name">${profile.name}</span>
          <div class="message ${sender}">${text}</div>
        </div>
      `;
    }

    lastSender = sender;
    chatContainer.appendChild(chatGroup);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function sendSequence(messages, sender, delay = 1200, callback = null) {
    const list = Array.isArray(messages) ? messages : [ messages ];

    if (list.length === 0) {
      if (callback) callback();
      return;
    }

    let index = 0;

    function sendNext() {
      if (index < list.length) {
        appendMessage(list[ index ], sender);

        if (sender === "bot") {
          botClickSound();
        }

        index++;
        setTimeout(sendNext, delay);
      } else if (callback) {
        callback();
      }
    }

    sendNext();
  }

  function typeInInput(text, speed = 80, onComplete = null) {
    chatInput.textContent = "";
    let charIndex = 0;

    function typeChar() {
      if (charIndex < text.length) {
        chatInput.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, speed);
      } else if (onComplete) {
        onComplete();
      }
    }

    typeChar();
  }

  function prepareUserMessage() {
    if (currentIndex >= scriptMessages.length) return;

    const currentScript = scriptMessages[ currentIndex ];
    const userTextList = Array.isArray(currentScript.userText)
      ? currentScript.userText
      : [ currentScript.userText ];

    if (userTextList.length === 0) {
      currentIndex++;
      setTimeout(startBotTurn, 1000);
      return;
    }

    if (subIndex < userTextList.length) {
      const textToType = userTextList[ subIndex ];

      typeInInput(textToType, 80, () => {
        sendBtn.disabled = false;
        sendBtn.style.opacity = "1";
        sendBtn.style.cursor = "pointer";
      });
    }
  }

  function startBotTurn() {
    disableSendBtn();
    chatInput.textContent = "";

    if (currentIndex >= scriptMessages.length) {
      chatInput.textContent = "คุยจบแล้วจ้า ~ แฮปปี้เบิร์ดเดย์น๊า 🎂";
      return;
    }

    const currentScript = scriptMessages[ currentIndex ];
    subIndex = 0;

    sendSequence(currentScript.botText, "bot", 1200, () => {
      prepareUserMessage();
    });
  }

  sendBtn.addEventListener("click", () => {
    if (currentIndex >= scriptMessages.length || sendBtn.disabled) return;

    unlockAudio();
    userClickSound();
    disableSendBtn();

    const currentScript = scriptMessages[ currentIndex ];
    const userTextList = Array.isArray(currentScript.userText)
      ? currentScript.userText
      : [ currentScript.userText ];

    if (subIndex < userTextList.length) {
      const messageToSend = userTextList[ subIndex ];
      chatInput.textContent = "";

      appendMessage(messageToSend, "user");
      subIndex++;

      if (subIndex < userTextList.length) {
        setTimeout(() => {
          prepareUserMessage();
        }, 600);
      } else {
        currentIndex++;
        setTimeout(startBotTurn, 1500);
      }
    }
  });

  function startChatApp() {
    disableSendBtn();
    startBotTurn();
    soundTrack();
  }

  let isStarted = false;

  function handleFirstTouch() {
    if (isStarted) return;
    isStarted = true;

    document.body.classList.add("loaded");

    unlockAudio();
    window.removeEventListener("click", handleFirstTouch);
    window.removeEventListener("touchstart", handleFirstTouch);

    if (loader) {
      loader.classList.add("fade-out");
      setTimeout(() => {
        loader.style.display = "none";
        startChatApp();
      }, 800);
    } else {
      startChatApp();
    }
  }

  if (loader) {
    window.addEventListener("click", handleFirstTouch);
    window.addEventListener("touchstart", handleFirstTouch);
  } else {
    document.body.classList.add("loaded");
    startChatApp();
  }
});
