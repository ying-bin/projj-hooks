# @ying-bin/projj-hooks

Hooks for [Projj](https://github.com/ying-bin/projj)

## Requirements

- Node.js >= 20

## Usage

```bash
npm i @ying-bin/projj-hooks -g
```

Configure hooks in Projj:

```json
{
  "hooks": {
    "clean": "projj_clean",
    "dirty": "projj_dirty",
    "git_config_user": "projj_git_config_user"
  }
}
```

## Hooks

### clean

Clean `node_modules` and ignored git files.

Default options:

```json
{
  "hooks": {
    "clean": "projj_clean"
  },
  "clean": {
    "node_modules": true,
    "git": true
  }
}
```

### git_config_user

Set `user.name`, `user.email`, and optionally `user.signingkey` for the current git repository.

The hook picks a config entry by matching the current path domain, for example:

```text
/path/to/github.com/owner/repo -> github.com
```

Options:

```json
{
  "hooks": {
    "git_config_user": "projj_git_config_user"
  },
  "git_config_user": {
    "github.com": {
      "name": "your name",
      "email": "your email",
      "signingkey": "your signingkey"
    },
    "gitlab.com": {
      "name": "your name",
      "email": "your email"
    }
  }
}
```

When `signingkey` is set, the hook also enables `commit.gpgsign`.

### atom_project

Hook for [atom project](https://github.com/danielbrodin/atom-project-manager)

It adds the current repository to `projects.cson`.

Options:

```json
{
  "hooks": {
    "atom_project": "projj_atom_project"
  },
  "atom_project": {
    "setting": "/path/to/projects.cson"
  }
}
```

### dirty

Check whether the current git repository has uncommitted changes.

Options:

```json
{
  "hooks": {
    "dirty": "projj_dirty"
  }
}
```

### vscode_project_manager

Hook for [vscode-project-manager](https://github.com/alefragnani/vscode-project-manager)

It adds the current repository to `projects.json`.

Options:

```json
{
  "hooks": {
    "vscode_project_manager": "projj_vscode_project_manager"
  },
  "vscode_project_manager": {
    "setting": "/path/to/projects.json"
  }
}
```

## License

[MIT](LICENSE)
