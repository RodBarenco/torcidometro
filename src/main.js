// Passo 1: fazer requisição HTTP GET para o arquivo list.json
fetch("./list.json")
  .then(response => response.json())
  .then(list => {
    // Passo 2: adicionar a primeira lista do arquivo JSON ao list-container do template.html
    const listContainer = document.getElementById('list-container');
    const listTitle = document.getElementById('list-title');
    let currentListIndex = 0;
    updateListContainer()

    // Passos 3 e 4: adicionar eventos de clique para os botões left-arrow e right-arrow
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');

    leftArrow.addEventListener('click', () => {
      if (currentListIndex === 0) {
        currentListIndex = Object.keys(list).length - 1;
      } else {
        currentListIndex--;
      }
      updateListContainer();
    });

    rightArrow.addEventListener('click', () => {
      if (currentListIndex === Object.keys(list).length - 1) {
        currentListIndex = 0;
      } else {
        currentListIndex++;
      }
      updateListContainer();
    });

    // Passos 5 e 6: adicionar eventos de teclado para as setas esquerda e direita
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        if (currentListIndex === 0) {
          currentListIndex = Object.keys(list).length - 1;
        } else {
          currentListIndex--;
        }
        updateListContainer();
      } else if (event.key === 'ArrowRight') {
        if (currentListIndex === Object.keys(list).length - 1) {
          currentListIndex = 0;
        } else {
          currentListIndex++;
        }
        updateListContainer();
      }
    });

    // A função de update da página
    function updateListContainer() {
      const listName = Object.keys(list)[currentListIndex];
      const listItems = list[listName];
      const datasource = listItems[listItems.length - 1]; // obtém o último item da lista
      listContainer.innerHTML = '';
      listTitle.textContent = listName;
      listItems.slice(0, -1).forEach(team => {
        const listItem = document.createElement('div');
        listItem.textContent = team;
        listContainer.appendChild(listItem);
      });
      // atualiza o caminho da imagem de acordo com o índice da lista atual
      const ligaIcon = document.getElementById('liga-icon');
      ligaIcon.src = `assets/${encodeURI(listName)}.png`;
      // atualiza o data-source com o último time da lista atual
      const dataSource = document.getElementById('data-source');
      dataSource.textContent = `Fonte: ${datasource}`;
    }    

  });
