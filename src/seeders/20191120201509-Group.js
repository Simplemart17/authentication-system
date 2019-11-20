module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Groups',
    [
      {
        id: 'b6b0a6f4-8932-4e44-be5b-66d295a44ce3',
        userId: '98ef660e-c163-4e2e-8541-736cea7ecace',
        description: 'user group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0c517995-33ef-47ce-b879-0588b021d9ee',
        userId: '5838540e-377f-4622-87f2-b40b62d380af',
        description: 'user group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'dd1cac35-0684-4afa-861a-ee68186f734f',
        userId: '947eb4c8-626a-4b88-a6c9-070167e057bd',
        description: 'user group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '08d93840-fb9f-4801-b618-78d53f54cbcf',
        userId: '366d5f14-38b2-46af-b143-936d3662b6d8',
        description: 'user group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7a241d21-9b20-4daa-be68-94f0a01d5136',
        userId: '2a4edc1e-d661-4f54-b7b0-52d079fcb8d1',
        description: 'user group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Groups', null, {}),
};
