// API Configuration
const API_BASE_URL = process.env.API_URL || 'http://localhost:5000/api';

// Fetch all projects
async function fetchProjects() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        return await response.json();
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Submit contact form
async function submitContact(formData) {
    try {
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error('Failed to submit form');
        return await response.json();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        throw error;
    }
}

// Get single project
async function fetchProject(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`);
        if (!response.ok) throw new Error('Failed to fetch project');
        return await response.json();
    } catch (error) {
        console.error('Error fetching project:', error);
        return null;
    }
}