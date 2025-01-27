root = 'starter/';

ARR_MODULE = [
    {
        title: 'Основы',
        themes: [
            [root+'main/info',         emoji.theory+'Информация'],
            [root+'main/install',      emoji.code+'Установка и настройка'],
            [root+'main/basic-sample', emoji.fire+'Базовый пример'],
        ]
    },
    {
        title: 'Common',
        accent: true,
        themes: [
            [root+'common/onSubmit', setTheme(1, ['onSubmit'])],
            ['', ''],
            [root+'common/onChange', setTheme(5, ['onChange'])],
        ]
    },
]
