document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const folder = urlParams.get('folder');
    const subjectTitle = document.getElementById('subject-title');
    const notesList = document.getElementById('notes-list');

    if (folder) {
        subjectTitle.textContent = `${folder} Notes`;
        
        // Predefined list of notes for each subject (since no backend)
        const notes = {
            'DBMS': [
                { name: 'Schema', file: 'Schema.html' },
				 { name: '2_3 Arctiture', file: '2_3Arctiture.html' },
                { name: 'FileVsDBMS', file: 'FileVsDBMS.html' }
               
            ],
            'C_Programming': [
                { name: 'Overview_of C_Language', file: 'Overview_of C_Language.html' },
                { name: 'Notes 2', file: 'notes2.html' }
            ],
            'History': [
                { name: 'Chapter 1', file: 'chapter1.html' }
            ],
			'Syllabus': [
                { name: 'DBMS ', file: 'DBMS_SYLLABUS.html' },
                { name: 'C ', file: 'C_syllabus.html' },
                { name: 'CN ', file: 'CN_Syllabus.html' },
                { name: 'java ', file: 'java.html' }
            ]
        };

        const subjectNotes = notes[folder] || [];
        notesList.innerHTML = subjectNotes.map(note => `
            <a href="${folder}/${note.file}" class="note-card">${note.name}</a>
        `).join('');
    } else {
        notesList.innerHTML = '<p>No subject selected.</p>';
    }
});
