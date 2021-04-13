function boolZapp(){
    
    new Vue({
        el:'#app',
        
        data:{
            'contacts' : [
                {
                name: 'Michele',
                avatar: "img/tired.jpg",
                messages: [
                            {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            visible: false,
                            }
                    ],
                },
                {
                name: 'Fabio',
                avatar: "img/smile.jpg",
                messages: [
                            {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            visible: false
                            },
                            {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            visible: false
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
                            visible: false,
                            },
                            {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            visible: false,
                            },
                            {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received',
                            visible: false,
                            }
                    ],
                },
                {
                name: 'Luisa',
                avatar: "img/whatsapp-munch.jpg",
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
                            visible: false,
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
                    'popdel':false,
                    'msgSelected':0
                    
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

                 chooseChat:function(el){
                     this.convcontent=true;
                     this.intro=false;
                     const index= this.contacts.indexOf(el);
                     this.selectedChat=index;
                     this.nameSelected  = this.contacts[index].name;
                     this.avatarSelected = this.contacts[index].avatar;
                    
                  
                 }, 
                  autoAnswer: function (index) {
                   
                    let moment = new Date();
                    let date = `${moment.getDate()}/${('0'+moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                    let minutes = this.formatminuts(moment.getMinutes());
                    let hours = `${moment.getHours()}:${minutes}`;
    
                    let textArr=[ 'ok!' , 'ho capito', 'va bene!', 'perchè?', 'hahahaha', 'non ho capito'];
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
                            },1500) 
                        }
                    
                }, 

                enterMsgs: function (index) {
                    let moment = new Date();
                    let date = `${moment.getDate()}/${'0'+(moment.getMonth() + 1)}/${moment.getFullYear().toString().slice(2)}`;  
                    let minutes =  this.formatminuts(moment.getMinutes());;
                    let hours = `${moment.getHours()}:${minutes}`;
                    let text = this.myMsgs;
                    let status = 'sent';
                    let visible = true;
    
                        if(this.myMsgs.length > 0){
                            this.contacts[index].messages.push({date, hours, text, status, visible});
                            this.myMsgs = '';
                        }
                    let getAnswer =  this.autoAnswer(index);
                    return  getAnswer; 
                  
                        },

                    formatminuts:function(i){
                        if(i<10){
                            i='0'+i;
                        }
                         return i;
                    },

                   /*  showPop:function(index){
                        this.popdel=true

                    },

                    hidePop:function(index){
                            this.popdel=false
                    }, */

                    showPopDel:function(){
                       // this.popdel=true

                        //const index= this.contacts.indexOf(el);
                       // const index= this.contacts[this.selectedChat].messages; //accedo ai messaggi della chat selezionata
                        //let superIndex= index[this.msgSelected].visible//accedo allo al visible del singolo mess 
                        //console.log(superIndex)
                        if(this.contacts[this.selectedChat].messages[this.msgSelected].visible=true){
                            
                        }else{
                            return this.contacts[this.selectedChat].messages[this.msgSelected].visible=true, this.popdel=true

                        }
                       
                        
                    }, 

                  
                    }
                                
        })
    }


function init(){
    boolZapp()
}
document.addEventListener('DOMContentLoaded', init);



