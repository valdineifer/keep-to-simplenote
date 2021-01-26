# Google Keep to Simplenote

## Description
EN: This script convert Google Keep notes (exported by Google Takeout) to the Simplenote format. It accepts an JSON file or a directory (of JSON files).  
PT: Este script converte anotações Google Keep (exportadas pelo Google Takeout) para o formato Simplenote. Ele aceita um arquivo no formato JSON ou um diretório (com arquivos JSON nele).

## How to Use
1. To run this script, you will need [Nodejs](https://nodejs.org/).
2. Run `yarn install` (recommended) or `npm install`
3. Run index file: `node index.js <directory/file> [-v|--verbose]`

## Notes
* The `--verbose` option will print every JSON file found in the directory;
* The simplenote json file will be created in `storage` folder, with miliseconds as the filename.

## To-Do
* [ ] Improve the `--verbose` option