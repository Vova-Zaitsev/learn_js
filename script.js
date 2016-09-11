var users = [
    {
        firstName: 'Dmitry',
        lastName: 'Kozlov',
        birthDay: '16.06.1990',
        phones: [
            '89001112233',
            '83458962574'
        ]
    },
    {
        firstName: 'Ivan',
        lastName: 'Petrov',
        birthDay: '08.05.1992',
        phones: [
            '89990003344',
            '84456763883'
        ]
    }
];

var user = {};

user.firstName = prompt('Ввведите имя:');
user.lastName = prompt('Ввведите фамилию:');
user.birthDay = prompt('Введите дату рождения:');
user.phones = [];
user.phones[0] = prompt('Введите номер телефона:');

users.push(user);

var i;
for (i = 0; i < users.lenght; i = i + 1) {console.log('Имя:' + users[i].firstName, +'Фамилия:' + users[i].lastName, +'Дата рождения:' + users[i].birthDay, +'Номер телефона:' + users[i].phones.join(', ')); }
