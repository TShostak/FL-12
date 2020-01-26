const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function filesStructure(structure, node) {
    const newElement = document.createElement('ul');
    for (let item of structure) {
        const newItem = document.createElement('li');
        const itemText = document.createElement('div');
        const itemImage = document.createElement('i');
        itemImage.classList.add('material-icons');
        const span = document.createElement('span');
        itemText.appendChild(itemImage);
        itemText.appendChild(span);
        span.innerHTML = item.title;
        newItem.appendChild(itemText);
        newElement.appendChild(newItem);
        if (item.folder) {
            itemText.classList.toggle('folder');
            itemImage.innerText = 'folder';
            itemText.addEventListener('click', function() {
                itemImage.innerText === 'folder' ? itemImage.innerText = 'folder_open' : itemImage.innerText = 'folder';
                newItem.querySelector('.is-closed').classList.toggle('is-open');
            });
            if (item.children) {
                filesStructure(item.children, newItem);
            } else {
                let empty_folder = document.createElement('div');
                empty_folder.classList.add('message_empty', 'is-closed');
                empty_folder.innerText = 'Folder is empty';
                newItem.appendChild(empty_folder);
            }
        } else {
            itemText.classList.toggle('file');
            itemImage.innerText = 'insert_drive_file';
            itemImage.classList.add('file_image');
        }
    }
    node.appendChild(newElement);
    if (newElement.parentNode !== rootNode) {
        newElement.classList.toggle('is-closed');
    }
}
filesStructure(structure, rootNode);