



const mymsg_array=[];

loopmsg();

  function allmessage(){
    let input=document.querySelector('.message');

    inputval=input.value;
    mymsg_array.push(inputval);

    console.log(mymsg_array);



    loopmsg();
    

  }
//   allmessage();


  function loopmsg(){

    let mytogether='';
    for(i=0;i <mymsg_array.length; i++){
        let eachone=mymsg_array[i];
        let html=`<p>${eachone}</p>`;
        mytogether+=html;

    }

    let message_text=document.querySelector('.message-text').innerHTML=mytogether;
  }