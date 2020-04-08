let data = [];

axios.get('http://localhost:3000/contacts')
    .then((response) => {
        console.log(response)
        const listsHTML = document.querySelector("#contacts>ol")
        data = response.data

        response.data.forEach(item => {
            const {
                name,
                age,id
            } = item;
            const itemHTML = `<li>
        Name : ${name}
        <br>
        Age : ${age}Year
        <a href="./detail.html,!id=${id}">detail</a>
         <button onclick="ubah(edit)>edit</button>
        <button onclick = "hapus(${id})">hapus</button>
        </li>`;
            listsHTML.innerHTML += itemHTML;

        })
    })

.catch ((pesanError) => {
    console.log(pesanError);
})


document.getElementById('SimpanContact').addEventListener('submit', function () {
    const name = document.getElementsByName('name')[0].value;
    const age = document.getElementsByName('age')[0].value;

    axios.post('http://localhost:3000/contacts', {
        name,
        age
    }).then(response => {
            console.log(response);
            window.alert('berhasil menambah data');
        })
        .catch((pesanError) => {
            console.log(pesanError);
        })

    event.preventDefault();

})


const hapus = id => {
    axios.delete('http:localhost:3000/contacts/${id}')
}

const ubah = id => {
    const contact = data.find(item => {
        return item === id
    })
    
    if (contact) {
        const name = window.prompt('Name',contact.name);
        const age = window.prompt ('Age', contact.age);
        axios.put('http://localhost:3000/contacts/${id}',{
           name,
           age 
        });
    }
}