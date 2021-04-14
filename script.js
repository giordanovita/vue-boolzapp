function boolZapp(){
    
    new Vue({
        el:'#app',
        
        data:{
            'contacts' : [
                {
                name: 'Michele',
                avatar: "img/sdentato.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            
                            },
                            {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            
                            }
                    ],
                },
                {
                name: 'Fabio',
                avatar: "img/tutta salute.jpg",
                messages: [
                            {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            
                            },
                            {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                                                        },
                            {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                                                        }
                    ],
                },
                {
                name: 'Samuele',
                avatar: "img/trump.png",
                
                messages: [
                            {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received',
                            visible: true,
                            },
                            {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visible: true,
                            },
                            {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            visible: true,
                            }
                    ],
                },
                {
                name: 'Luisa',
                avatar: "img/minchiaguaddi.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                            {
                name: 'Franchino',
                avatar: "img/beltipo.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Non ti hanno ancora chiamato al circo?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                            {
                name: 'Mario',
                avatar: "img/beltipo2.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                            {
                name: 'Luigino',
                avatar: "img/beltipo3.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                            {
                name: 'Maria',
                avatar: "img/calma.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '30/11/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                            {
                name: 'Francesco',
                avatar: "img/jim.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '15/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                            {
                name: 'Guido',
                avatar: "img/whatsapp-munch.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            visible: true,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            visible: true,
                            }
                            ],
                            },
                                
                    ],
                    'nameSelected':'',
                    'avatarSelected':'',
                    'selectedChat':0,
                    'myMsgs':'',
                    'search':'',
                    'convcontent':false,
                    'intro':true,
                    'popdel':{
                                index:false,
                                show:false
                             },
                    
                },

                updated(){
                    var container = this.$el.querySelector(".conv");
                     container.scrollTop = container.scrollHeight;
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

                //funzione che permette la scelta della chat nella lista delle conversazioni
                 chooseChat:function(el){
                     this.convcontent=true;
                     this.intro=false;
                     const index= this.contacts.indexOf(el);
                     this.selectedChat=index;
                     this.nameSelected  = this.contacts[index].name;
                     this.avatarSelected = this.contacts[index].avatar;

                      this.popdel.index=false;
                      this.popdel.show=false;
                  
                 }, 

                 //funzione che genera una serie di risposte automatiche casuali, lanciata da enterMsgs()
                  autoAnswer: function (index) {
                   
                    let moment = new Date();
                    let date = `${moment.getDate()}/${('0'+moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                    let minutes = this.formatminuts(moment.getMinutes());
                    let hours = `${moment.getHours()}:${minutes}`;
    
                    let textArr=[ 'ok!' , 'ho capito', 'va bene!', 'perchè?', 'hahahaha', 'non ho capito','no problem!', 'in che senso?'];
                    let getRandomAnswer = Math.floor(Math.random()*(textArr.length));
                    let text = textArr[getRandomAnswer];

                    let status = 'received';
                    let visible = true;

                    let contactControl = this.contacts[index].messages.length;
                    const intervalTool = this.contacts[index].messages;

                        if(contactControl++){
                            setTimeout(function(){
                                intervalTool.push({date, hours,text, status, visible});
                                console.log( getRandomAnswer,text)
                            },2000) 
                        }
                    
                },

                //funzione che permette l'inserimento e l'invio di messaggi nella conversazione selezionata,
                //questa funzione comprende l'esecuzione della funzione di risposta automatica
                enterMsgs: function (index) {
                    let moment = new Date();
                    let date = `${moment.getDate()}/${'0'+(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                    let minutes =  this.formatminuts(moment.getMinutes());;
                    let hours = `${moment.getHours()}:${minutes}`;
                    let text = this.myMsgs;
                    let status = 'sent';
                    let visible = true;
    
                        if((this.myMsgs.length > 0)&&(this.myMsgs=!'')){
                            this.contacts[index].messages.push({date, hours, text, status, visible});
                            this.myMsgs = '';
                        }
                    let getAnswer =  this.autoAnswer(index);
                    return  getAnswer; 
                  
                        },

                    //funzione di formattazione orario 
                    formatminuts:function(i){
                        if(i<10){
                            i='0'+i;
                        }
                         return i;
                    },

                   //funzione che mostra e nasconde l'azione delete
                    showPopDel:function(index){
                       
                        if(this.popdel.index==index){
                            this.popdel.show=!this.popdel.show;
                        }else{
                            this.popdel.index=index;
                            this.popdel.show=true;
                        }
                    }, 

                    //funzione che permette di eliminare il messaggio selezionato
                    deleter:function(index){

                      const signal= this.contacts[this.selectedChat].messages 
                      signal.splice(index,1)
                      this.popdel.show=!this.popdel.show;
                    },

                    //torna all'intro
                    turnBack:function(){
                        this.convcontent=false, this.intro=true
                  
                    }
                    
                }                 
        })
    }


function init(){
    boolZapp()
}
document.addEventListener('DOMContentLoaded', init);



