module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'Roles',
    [
      {
        id: 'a6bf3a11-ef19-44e0-a03e-8c3de556f91a',
        userId: '98ef660e-c163-4e2e-8541-736cea7ecace',
        role: 'basic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cb454d64-b844-4b98-b963-76d21e54c503',
        userId: '210a4f65-2f82-4441-aa2d-e7312017fbac',
        role: 'superAdmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'feef660e-c163-4e2e-8541-736cea7ee34c',
        userId: '9a23ab22-ce06-49ab-95b9-b66a259d5751',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '444fc35d-583e-42e8-a538-e3f09acede77',
        userId: '947eb4c8-626a-4b88-a6c9-070167e057bd',
        role: 'basic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '79829aca-a256-4e1e-9560-88de1e1d7984',
        userId: '366d5f14-38b2-46af-b143-936d3662b6d8',
        role: 'basic',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('Roles', null, {}),
};
