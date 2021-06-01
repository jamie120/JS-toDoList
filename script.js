var button = document.querySelector('button');
var input = document.querySelector('input');
var list = document.querySelector('.list-items')


button.addEventListener('click', function() {
    if (input.value !== "") {
        var li = document.createElement('li');
        li.innerText = input.value;
        list.append(li);
        input.value = "";
        var dBtn = document.createElement('button')
        dBtn.appendChild(document.createTextNode('X'));
        dBtn.classList.add("delete-btn");
        li.appendChild(dBtn);
        dBtn.addEventListener('click', deleteListItem);

        function deleteListItem() {
            li.classList.add('delete')
        }

        li.addEventListener('click', function() {
            this.classList.toggle("complete");
            dBtn.classList.toggle('complete')
        })

    } else {
        alert("You have not typed anything into the input box!")
    }
})



