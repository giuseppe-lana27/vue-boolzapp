var app = new Vue(
  {
    el: '#box',
    data: {
      contacts: [
          {
              name: 'Michele',
              avatar: 'img/avatar_1.jpg',
              visible: true,
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Hai portato a spasso il cane?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Ricordati di dargli da mangiare',
                      status: 'sent'
                  },
                  {
                      date: '10/01/2020 16:15:22',
                      message: 'Tutto fatto!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Fabio',
              avatar: 'img/avatar_2.jpg',
              visible: true,
              messages: [{
                  date: '20/03/2020 16:30:00',
                  message: 'Ciao come stai?',
                  status: 'sent'
              },
                  {
                      date: '20/03/2020 16:30:55',
                      message: 'Bene grazie! Stasera ci vediamo?',
                      status: 'received'
                  },
                  {
                      date: '20/03/2020 16:35:00',
                      message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Samuele',
              avatar: 'img/avatar_3.jpg',
              visible: true,
              messages: [{
                  date: '28/03/2020 10:10:40',
                  message: 'La Marianna va in campagna',
                  status: 'received'
              },
                  {
                      date: '28/03/2020 10:20:10',
                      message: 'Sicuro di non aver sbagliato chat?',
                      status: 'sent'
                  },
                  {
                      date: '28/03/2020 16:15:22',
                      message: 'Ah scusa!',
                      status: 'received'
                  }
              ],
          },
          {
              name: 'Luisa',
              avatar: 'img/avatar_io.jpg',
              visible: true,
              messages: [{
                  date: '10/01/2020 15:30:55',
                  message: 'Lo sai che ha aperto una nuova pizzeria?',
                  status: 'sent'
              },
                  {
                      date: '10/01/2020 15:50:00',
                      message: 'Si, ma preferirei andare al cinema',
                      status: 'received'
                  }
              ],
          },
      ],
      contactIndex: 0,
      activeContact: 0,
      newMessage: '',
      replyMessage: 'Ok',
    },
    methods: {
      // funzione per cambiare la chat
      changeChat: function(index){
        this.contactIndex = index;
        this.activeContact = index;
      },
      // funzione per inviare un messaggio
      addMessage: function(index){
        if(this.newMessage !== ''){
          const newMsg = {
            message: this.newMessage,
            date: '10/01/2020 17:50:00',
            status: 'sent',
          }
          this.contacts[index].messages.push(newMsg);
          this.newMessage = '';
          setTimeout(this.messageReply, 1000);
        };
      },
      messageReply: function(index){
        const msgReply = {
          message: this.replyMessage,
          date: '10/01/2020 18:20:00',
          status: 'received',
        }
        this.contacts[this.contactIndex].messages.push(msgReply);
      },
    }
  }
);
