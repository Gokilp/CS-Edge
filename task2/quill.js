// quill.js

// Example: Customizing Quill editor toolbar
var toolbarOptions = [
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']
];

var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'  // or 'bubble'
});

// Example: Custom event handling
quill.on('text-change', function(delta, oldDelta, source) {
    console.log('Text changed:', delta);
});
