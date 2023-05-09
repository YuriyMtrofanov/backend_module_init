const yargs = require('yargs');
const package = require('./package.json');
const { addNote, printNotes, removeNote } = require('./note.controller');

yargs.version(package.version);

yargs.command({
    command: 'add',
    describe: 'Add new note ti list',
    builder: {
        title: {
            type: 'string',
            describe: 'Note title',
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Print all notes',
    async handler() {
        printNotes();
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove note by it`s id',
    builder: {
        id: {
            type: 'string',
            describe: 'Note id',
            demandOption: true
        }
    },
    async handler({ id }) {
        removeNote(id);
    }
});

yargs.parse(); // инициализация пакета команд