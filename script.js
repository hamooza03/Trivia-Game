document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        { name: 'World Capitals', questions: [
            { points: 100, question: 'What is the capital of France?', answer: 'Paris' },
            { points: 200, question: 'What is the capital of Spain?', answer: 'Madrid' },
            { points: 300, question: 'What is the capital of Japan?', answer: 'Tokyo' },
            { points: 400, question: 'What is the capital of Australia?', answer: 'Canberra' },
            { points: 500, question: 'What is the capital of Brazil?', answer: 'Brasília' }
        ]},
        { name: 'Famous Authors', questions: [
            { points: 100, question: 'Who wrote "1984"?', answer: 'George Orwell' },
            { points: 200, question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
            { points: 300, question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald' },
            { points: 400, question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' },
            { points: 500, question: 'Who wrote "Moby-Dick"?', answer: 'Herman Melville' }
        ]},

        { name: 'Category 3', questions: [
            { points: 100, question: 'Who wrote "1984"?', answer: 'George Orwell' },
            { points: 200, question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
            { points: 300, question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald' },
            { points: 400, question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' },
            { points: 500, question: 'Who wrote "Moby-Dick"?', answer: 'Herman Melville' }
        ]},

        { name: 'Category 4', questions: [
            { points: 100, question: 'Who wrote "1984"?', answer: 'George Orwell' },
            { points: 200, question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
            { points: 300, question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald' },
            { points: 400, question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' },
            { points: 500, question: 'Who wrote "Moby-Dick"?', answer: 'Herman Melville' }
        ]},

        { name: 'Category 5', questions: [
            { points: 100, question: 'Who wrote "1984"?', answer: 'George Orwell' },
            { points: 200, question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
            { points: 300, question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald' },
            { points: 400, question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' },
            { points: 500, question: 'Who wrote "Moby-Dick"?', answer: 'Herman Melville' }
        ]},

        { name: 'Category 6', questions: [
            { points: 100, question: 'Who wrote "1984"?', answer: 'George Orwell' },
            { points: 200, question: 'Who wrote "To Kill a Mockingbird"?', answer: 'Harper Lee' },
            { points: 300, question: 'Who wrote "The Great Gatsby"?', answer: 'F. Scott Fitzgerald' },
            { points: 400, question: 'Who wrote "Pride and Prejudice"?', answer: 'Jane Austen' },
            { points: 500, question: 'Who wrote "Moby-Dick"?', answer: 'Herman Melville' }
        ]},
        // Add more categories and questions as needed
    ];

    const categoryRow = document.querySelector('.category-row');
    categories.forEach(category => {
        const div = document.createElement('div');
        div.className = 'category';
        div.textContent = category.name;
        categoryRow.appendChild(div);
    });

    categories.forEach((category, categoryIndex) => {
        category.questions.forEach(question => {
            const div = document.createElement('div');
            div.className = 'points';
            div.textContent = question.points;
            div.addEventListener('click', function() {
                const userAnswer = prompt(question.question);
                if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                    alert('Correct!');
                    // Implement scoring system here
                } else {
                    alert(`Incorrect. The correct answer is ${question.answer}`);
                }
            });
            document.getElementById('jeopardy-board').appendChild(div);
        });
    });
});
