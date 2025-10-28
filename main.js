// main.js


const firebaseConfig = {
    apiKey: "AIzaSyCdl8-Qanx9eDxjx_3wdCFjvz11zQRgVkg",          
    
    authDomain: "chate-cd1e3.firebaseapp.com",  
    
    
    
    databaseURL: "https://chate-cd1e3-default-rtdb.firebaseio.com", 
    
   
    projectId: "chate-cd1e3",          
     
     
    storageBucket: "chate-cd1e3",
    messagingSenderId: "571146722295",
    appId: "1:571146722295:web:6eaeaf623e1910b3d42cf2",
};


// . <script>
const app = firebase.initializeApp(firebaseConfig);

// 3. 
const database = app.database();
const messagesRef = database.ref('messages'); 

// 4.   
const messageForm = document.getElementById('message-form');
const usernameInput = document.getElementById('username-input');
const messageInput = document.getElementById('message-input');
const messagesList = document.getElementById('messages');


messageForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const user = usernameInput.value.trim();
    const message = messageInput.value.trim();
    

    if (message === '' || user === '') return; 
    

    messagesRef.push({
        user: user, 
        text: message,
        timestamp: new Date().getTime()
    });
    
    messageInput.value = ''; //   
});


messagesRef.on('child_added', (snapshot) => {
    const messageData = snapshot.val();
    
    //     
    const li = document.createElement('li');
    
    //    
    li.textContent = `${messageData.user}: ${messageData.text}`;
    
   
    messagesList.appendChild(li);
    

    messagesList.scrollTop = messagesList.scrollHeight;
});
