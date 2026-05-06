document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Navigation
    const navItems = document.querySelectorAll('.nav-item');
    const views = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active to clicked
            item.classList.add('active');

            // Hide all views
            views.forEach(view => view.classList.remove('active'));
            // Show target view
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // 2. Tabs Logic (Expediente)
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all tabs in the same container
            const container = btn.closest('.patient-tabs-container');
            container.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            container.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

            // Activate clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// 3. View switching for Expediente
function openExpediente(patientName) {
    // Update basic info based on mocked patient name
    document.getElementById('expediente-name').textContent = patientName;
    document.getElementById('expediente-img').src = `https://ui-avatars.com/api/?name=${patientName}&background=random&size=128`;
    
    // Set some dummy data depending on the pet
    if(patientName === 'Max') {
        document.getElementById('expediente-breed').textContent = 'Perro • Labrador';
        document.getElementById('expediente-owner').textContent = 'Juan Pérez';
    } else if (patientName === 'Luna') {
        document.getElementById('expediente-breed').textContent = 'Gato • Siamés';
        document.getElementById('expediente-owner').textContent = 'María Gómez';
    } else if (patientName === 'Rocky') {
        document.getElementById('expediente-breed').textContent = 'Perro • Bulldog';
        document.getElementById('expediente-owner').textContent = 'Carlos Ruiz';
    }

    // Hide all views and show expediente
    document.querySelectorAll('.view-section').forEach(view => view.classList.remove('active'));
    document.getElementById('view-expediente').classList.add('active');

    // Deselect sidebar items visually except for Pacientes
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelector('.nav-item[data-target="view-pacientes"]').classList.add('active');
    
    // Show/Hide hospital status based on patient (dummy logic)
    const statusIndicator = document.querySelector('.current-status-hospital');
    const tabHospitalBtn = document.querySelector('.tab-btn[data-tab="tab-hospital"]');
    
    if (patientName === 'Luna') {
        statusIndicator.style.display = 'inline-flex';
        tabHospitalBtn.style.display = 'block';
    } else {
        statusIndicator.style.display = 'none';
        tabHospitalBtn.style.display = 'none';
        // If hospital tab was active, switch to general automatically
        if(tabHospitalBtn.classList.contains('active')){
           document.querySelector('.tab-btn[data-tab="tab-general"]').click();
        }
    }
}

function backToPacientes() {
    document.querySelectorAll('.view-section').forEach(view => view.classList.remove('active'));
    document.getElementById('view-pacientes').classList.add('active');
}

// 4. Modals Logic
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal when clicking outside of modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.classList.remove('active');
    }
}
