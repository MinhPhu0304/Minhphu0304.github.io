const reasonUseAR = "For the longest time as I remembered, most of the school work is purely torture for student." +
" Me, personally having a hard time on visualizing molecule structure. But " +
" with the help of AR, it would have been a better experience learning about chemistry"+
".";
const ARAdditionalUsage = "You might be wondering what else can AR do for education. Turn out there are plethora "+
"usage of AR in other subject such as Astrophysics, history, etc";      


function Paragraph (props){
  return <p className="text-justify">{props.content}</p>
}

function Image(props){
  return  (
    <div className="text-center">
      <figure className="figure">
        <img src={props.url} className="figure-img img-fluid"></img><br />
        <figurecaption className="figure-caption align-center"> {props.caption}</figurecaption>
      </figure>
    </div>
  );
}

function DisplayContent(){
  return(
      <div className="container-fluid">
        <h2 className="section-header">III.Reason using AR in classroom </h2>
        <Paragraph content={reasonUseAR}/>
        <Image url="https://cdn.apk-cloud.com/detail/screenshot/PJbzsiWjca_IMy-zhozr0Ha0xUMWH4fRvdnpWQZTJ37asKBnyVucxjLa1OrKUlNZhA=h900.png" caption="I wish we had this earlier" />
        
      </div>
  );
}

ReactDOM.render(
        <DisplayContent />,
        document.getElementById('newContent')
      );    