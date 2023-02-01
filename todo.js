function addItem(){
    let list=document.getElementById('todolist'); //ul요소 가져옴
    let todo=document.getElementById('item');//입력값을 읽어옴
    let listitem =document.createElement('li'); //새로운 li 요소를 생성
    let xbnt =document.createElement('button');//li요소에 들어갈 닫기버튼 생성

    listitem.className='list-group-item list-group-item-action list-group-item-warning'; ///

    xbnt.className='close';
    xbnt.innerHTML='&times;';
    
    //close 버튼에 이벤트 처리
    xbnt.onclick=function(e){
        let pnode=e.target.parentNode;
        list.removeChild(pnode);
    }
    listitem.innerText=todo.value;
    listitem.appendChild(xbnt);
    list.appendChild(listitem); //ul요소에li추가

    //입력칸비우기 포커스 이동
    todo.value='';
    todo.focus();
}