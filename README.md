# Plugin Osuny : Single Page Application

Ce plugin transforme un site normal en application, avec des rechargements de page dans le même DOM.

## Utilisation

1. Importer le plugin dans le site.

```bash
git submodule add git@github.com:osunyorg/osuny-plugin-single-page-application.git themes/osuny-plugin-single-page-application
```

2. Ajouter le plugin comme un thème dans `config/_default/config.yaml`.

```yaml
theme: 
  - osuny
  - osuny-plugin-single-page-application
```

3. Importer le js

```main.js
import './osuny-plugin-single-page-application/main';
```

4. Ajouter la dépendance

```package.json
 "dependencies": {
    "osuny": "./themes/osuny",
    "osuny-plugin-single-page-application": "./themes/osuny-plugin-single-page-application"
  }
```


5. Installer les packages

```yarn upgrade```


## Exemples 

- https://histoires.noesya.coop
