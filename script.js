function boolZapp(){
    
    new Vue({
        el:'#app',
        
        data:{
            'contacts' : [
                {
                name: 'Michele',
                avatar: "img/tired.jpg",
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                            }
                    ],
                },
                {
                name: 'Fabio',
                avatar: "img/smile.jpg",
                visible: true,
                messages: [
                            {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                            },
                            {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            },
                            {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            }
                    ],
                },
                {
                name: 'Samuele',
                avatar: "img/trump.png",
                visible: true,
                messages: [
                            {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                            },
                            {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                            },
                            {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                            }
                    ],
                },
                {
                name: 'Luisa',
                avatar: "img/whatsapp-munch.jpg",
                visible: true,
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                            }
                            ],
                            },
                                
                    ],
                    'nameSelected':'',
                    'avatarSelected':'',
                    'selectedChat':0,
                    'myMsgs':'',
                    'sendMessages':[],
                    'search':'',
                    'convcontent':false,
                    'intro':true
                    
                },
     
                computed:{
                    filteredContacts: function(index) {
                        let target = this.search.toLowerCase();
                        const filtered =this.contacts.filter(elem=> {
                            if(elem.name.toLowerCase().includes(target)){
                                return elem;
                            }
                        });
                        return filtered;
                    },  
                },
               
            methods:{

                 chooseChat:function(el){
                     const index= this.contacts.indexOf(el);
                     this.convcontent=true;
                     this.intro=false;
                     this.selectedChat=index;
                     this.nameSelected  = this.contacts[index].name;
                     this.avatarSelected = this.contacts[index].avatar;

                     const contact = this.contacts[index];
                    const contactMsgs = contact['messages']
                     let contactMsgsValue = contactMsgs.status;
 
                    for(i=0; i<contactMsgs.length; i++){
                        const contactMess = contactMsgs[i];
                    } 
                  
                 }, 
                  autoAnswer: function (index) {
                   
                    let moment = new Date();
                    let date = `${moment.getDate()}/${('0'+moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                    let minutes = moment.getMinutes();
                        if(minutes.length<2){
                            return minutes='0'+ minutes;
                        } 
                        console.log(minutes)
                    let hours = `${moment.getHours()}:${minutes}`;
    
                    let textArr=[ 'ok!' , 'ho capito', 'va bene!', 'perchè?', 'hahahaha', 'non ho capito'];
                    let getRandomAnswer = Math.floor(Math.random()*(textArr.length));
                    let text = textArr[getRandomAnswer];

                    let status = 'received';
                    let contactControl = this.contacts[index].messages.length;
                    const intervalTool = this.contacts[index].messages;

                    if(contactControl++){
                        setTimeout(function(index){
                            intervalTool.push({date, hours,text, status});
                            console.log( getRandomAnswer,text)
                         },1500) 
                    }
                    
                }, 

                enterMsgs: function (index) {
                    let moment = new Date();
                    let date = `${moment.getDate()}/${'0'+(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                    let minutes =  moment.getMinutes();
                    let hours = `${moment.getHours()}:${minutes}`;
                     if(minutes<10){
                         minutes = '0'+ minutes;
                     }

    
                    let text = this.myMsgs;
                    let status = 'sent';
    
                        if(this.myMsgs.length > 0){
                            this.contacts[index].messages.push({date, hours, text, status});
                            this.myMsgs = '';
                        }
                    let getAnswer =  this.autoAnswer(index);
                    
                    return  getAnswer; 
                  
                        },

                        
                    }
                                
        })
    }


function init(){
    boolZapp()
}
document.addEventListener('DOMContentLoaded', init);