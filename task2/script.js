// Initialize Quill rich text editor for experience section
var experienceEditor = new Quill('#experienceEditor', {
    theme: 'snow', // 'snow' is the built-in theme for a clean interface
    placeholder: 'Describe your experience...'
});

// Function to update the live preview
function updatePreview() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var summary = document.getElementById('summary').value;
    var experience = experienceEditor.root.innerHTML; // Get HTML content from Quill editor

    var preview = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Experience</h3>
        <div>${experience}</div>
        <!-- Add more sections for skills, education, projects, etc. -->
    `;

    document.getElementById('resumePreview').innerHTML = preview;
}

// Event listener for form submission
document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Update live preview
    updatePreview();

    // You would typically handle form submission here, e.g., sending data to backend
});

// Event listener for format selection and download button
document.getElementById('downloadBtn').addEventListener('click', function() {
    var format = document.getElementById('format').value;
    var resumeContent = document.getElementById('resumePreview').innerHTML;

    // Depending on the format chosen, you would generate the corresponding file
    if (format === 'pdf') {
        // Example: Generate PDF using jsPDF
        var doc = new jsPDF();
        doc.fromHTML(resumeContent, 15, 15);
        doc.save('resume.pdf');
    } else if (format === 'docx') {
        // Example: Generate DOCX using a server-side library like mammoth or docxtemplater
        // This would typically be handled on the server side
    } else if (format === 'txt') {
        // Example: Generate plain text file
        var blob = new Blob([resumeContent], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }
});
