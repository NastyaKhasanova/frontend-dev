let table = document.getElementById('table');

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam tempora earum, cupiditate commodi quisquam soluta autem porro sunt harum praesentium, iure sit laborum hic necessitatibus tenetur adipisci nostrum! Obcaecati beatae recusandae quis cumque mollitia deserunt incidunt nam in qui illo sunt reiciendis repellat ratione, voluptatem deleniti nemo repellendus aliquam dicta atque, commodi placeat excepturi? Excepturi dolorem a delectus voluptates corrupti, fuga, autem labore, totam facilis alias ipsa? Iste, facilis deleniti debitis unde fuga voluptate, mollitia fugiat nihil perferendis velit dolorem ut consequatur repellat! Adipisci dolore ea consequuntur nobis dolorem ab explicabo ut voluptatibus accusantium aspernatur, eveniet quisquam commodi? In.';
let textArray = text.split(' ');

textArray.forEach((element,index) => {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let tdNum = document.createElement('td');
  td.innerText = element;
  tdNum.innerText = index+1;
  tr.appendChild(tdNum);
  tr.appendChild(td);
  table.appendChild(tr);
});

