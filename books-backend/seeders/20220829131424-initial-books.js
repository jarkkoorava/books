'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: '48 Laws Of Power',
          author: 'Robert Greene',
          description: 'Manipulate everyone to get influence',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'How To Win Friends And Gain Influence',
          author: 'Dale Carnegie',
          description: 'Be a nice person to get influence',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Emotional Intelligence',
          author: 'Daniel Goleman ',
          description: 'Know how people think to get influence',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'What Every Body Is Saying',
          author: 'Joe Navarro',
          description: 'Use body language to get influence',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
