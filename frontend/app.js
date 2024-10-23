document.getElementById('ruleForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const ruleInput = document.getElementById('rule').value;

    const response = await fetch('http://localhost:3000/api/create_rule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rule: ruleInput })
    });

    const result = await response.json();
    if (result.success) {
        alert('Rule created successfully!');
        
        // Clear the input field after successful submission
        document.getElementById('rule').value = ''; // Clear the input field
    } else {
        alert('Error creating rule.');
    }
});
