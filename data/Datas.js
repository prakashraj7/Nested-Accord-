const explorer = {
  name: 'main',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              name: 'index.html',
              isFolder: false,
            },
            {
              name: 'hello.html',
              isFolder: false,
            },
            {
              name: 'Prakash.html',
              isFolder: false,
            },
          ],
        },
        {
          name: 'public_nested_file',
          isFolder: false,
        },
      ],
    },
    {
      name: 'Src',
      isFolder: true,
      items: [
        {
          name: 'App.js',
          isFolder: false,
        },
        {
          name: 'index.js',
          isFolder: false,
        },
        {
          name: 'Style.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'Package .json',
      isFolder: false,
    },
  ],
};

export default explorer;
