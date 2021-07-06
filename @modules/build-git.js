ARR_MODULE = [
    {
        title: 'Use Case',
        themes: [
            ['git/usecase/squash-commit',   emoji.code+setTheme(4, ['Squash Commit'])],
            ['git/usecase/reset-changes',   emoji.code+setTheme(4, ['Отмена изменений'])],
            ['git/usecase/common',          'Общее'],
            ['git/usecase/other',           'Прочее'],
        ]
    },
    {
        title: 'Команды',
        accent: true,
        themes: [
            ['git/command/merge',        setTheme(3, ['merge'])],
            ['git/command/rebase',       setTheme(3, ['rebase'])],
            ['git/command/reset',        setTheme(3, ['reset'])],
            ['', ''],
            ['git/command/init',         setTheme(1, ['init'])],
            ['git/command/clone',        setTheme(1, ['clone'])],
            ['git/command/add',          setTheme(1, ['add'])],
            ['git/command/commit',       setTheme(1, ['commit'])],
            ['git/command/push',         setTheme(1, ['push'])],
            ['git/command/pull',         setTheme(1, ['pull'])],
            ['git/command/fetch',        setTheme(1, ['fetch'])],
            ['', ''],
            ['git/command/branch',       setTheme(1, ['branch'])],
            ['git/command/checkout',     setTheme(1, ['checkout'])],
            ['git/command/cherry-pick',  setTheme(1, ['cherry-pick'])],
            ['', ''],
            ['git/command/stash',        setTheme(1, ['stash'])],
            ['git/command/revert',       setTheme(1, ['revert'])],
            ['git/command/status',       setTheme(1, ['status'])],
            ['git/command/diff',         setTheme(1, ['diff'])],
            ['git/command/config',       setTheme(1, ['config'])],
            ['git/command/help',         setTheme(1, ['help'])],
            ['git/command/log',          setTheme(1, ['log'])],
            ['git/command/clean',        setTheme(1, ['clean'])],
            ['', ''],
            ['git/command/tag',          setTheme(5, ['tag'])],
        ]
    },
    {
        title: 'GitHub',
        themes: [
            ['git/github/terminal-connect', 'Подключение по SSH'],
            ['git/github/info',             'Теория'],
            ['git/github/github-desktop',   'GitHub Desktop'],
            ['git/github/smart-git',        'SmartGit'],
        ]
    },
    {
        title: 'Теория',
        themes: [
            ['git/theory/info',    'Информация'],
            ['git/theory/vcs',     'Системы управления версиями'],
            ['git/theory/gitflow', 'Gitflow'],
        ]
    },
]
