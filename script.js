// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

function removeElement() {
    let el = document.getElementById('text');
    console.log(el);
    if (el.style.display === 'block') {
        el.style.display = 'none';
    } else {
        el.style.display = 'block'
    }

}

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

function removeButton() {
    let btn = document.getElementById('btn');
    btn.remove();
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function chackAgeUser() {
    let age = document.getElementById('age').value;
    console.log(age);
    if (age < 18) {
        alert('Вам ще немає 18 років')
    } else {
        console.log('Walcome');
    }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [{
        "title": "id labore ex et quam laborum",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        "title": "quo vero reiciendis velit similique earum",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        "title": "odio adipisci rerum aut animi",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        "title": "alias odio sit",
        "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        "title": "vero eaque aliquid doloribus et culpa",
        "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
        "title": "et fugit eligendi deleniti quidem qui sint nihil autem",
        "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
        "title": "repellat consequatur praesentium vel minus molestias voluptatum",
        "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
        "title": "et omnis dolorem",
        "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
        "title": "provident id voluptas",
        "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
        "title": "eaque et deleniti atque tenetur ut quo ut",
        "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    }
]

comments.map((comment) => {
    let div = document.createElement('div');
    document.body.append(div);
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let button = document.createElement('button');
    h2.innerText = comment.title;
    p.innerText = comment.body;
    p.style.display = 'none';
    button.innerText = 'Show comment';
    button.className = 'show-comment';
    div.append(h2, button, p)

    button.onclick = () => {

        if (p.style.display === 'block') {
            p.style.display = 'none';
        } else {
            p.style.display = 'block'
        }
    }
})


// ***- Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

let swearWords = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple', 'pink', 'silver', 'gold', 'brown', 'grey', 'black', 'white'];

let div = document.createElement('div');
document.body.append(div);
let input = document.createElement('input');
let button = document.createElement('button');
input.id = 'input';
input.type = 'text';
button.innerText = 'check';
div.append(input, button);

button.onclick = () => {

    swearWords.map((word) => {

        if (word === input.value) {
            alert('Ви ввели заборонене слово');
        }
    })

}