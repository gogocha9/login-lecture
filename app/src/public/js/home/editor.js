const editor = document.getElementById('editor');
var quill = new Quill(editor, {
    debug: 'info',
    placeholder: 'Compose an epic...',
    theme: 'snow',
});