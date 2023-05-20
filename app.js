const input = document.getElementById('input');
const container = document.querySelector('#tasks-container');

function store() {
    localStorage.setItem('data',container.innerHTML)
}
function getData() {
    container.innerHTML = localStorage.getItem('data');
}

function add() {
    if (input.value === '') {
        alert('vui lòng nhập task trước')
    } else {
        let task = document.createElement('div');
        task.classList.add("task");
        task.setAttribute('id','task')
        task.innerHTML = input.value;
        container.appendChild(task)



        let done = document.createElement('button');
        done.classList.add('done');
        done.setAttribute('id','done');
        done.innerHTML = 'xong';
        task.appendChild(done);

        let del = document.createElement('button');
        del.classList.add('delete');
        del.setAttribute('id','delete');
        del.innerHTML = 'xoá';
        task.appendChild(del);
    }
    input.value ='';
    store();
}

container.addEventListener('click', function (e) {
    if (e.target.id == "delete") {
        let kill = e.target.parentElement;
        if (confirm("bạn có chắc chắn muốn xoá không")==true) {
            kill.remove();
        }
    }
    else if (e.target.id == "done") {
        let  done = e.target.parentElement;
        done.classList.toggle("done-style")
    }
    store();
})

getData();
// alert('alo ?')