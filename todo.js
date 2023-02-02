function addItem() {
    //ul 요소 가져오기
    let list=document.getElementById('todolist');
    //새로운 li 요소 생성
    let newli=document.createElement('li');
    //x버튼 생성
    let xbtn = document.createElement('button');
    
    //input 요소 가져옴 
    let todo=document.getElementById('item');

    xbtn.className='clsoe';
    xbtn.innerHTML='&times;';

    //x버튼이 눌릴때 작동
    xbtn.onclick=function(e){
        let pnode=e.target.parentNode;
        list.removeChild(pnode);
    }
    
    //li요소 구성
    newli.innerText=todo.value;
    newli.appendChild(xbtn);

    //ul요소에 li추가
    list.appendChild(newli);

    //입력칸 비우기 & 포커스 이동
    todo.value='';
    todo.focus();
}