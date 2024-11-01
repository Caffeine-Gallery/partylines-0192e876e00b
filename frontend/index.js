import { backend } from 'declarations/backend';

const questions = [
    {
        id: 'healthcare-1',
        topic: 'Healthcare',
        text: 'What role should government play in healthcare?',
        options: [
            {
                text: 'Universal public healthcare for all citizens',
                alignment: { democrat: 90, republican: 10, independent: 50 }
            },
            {
                text: 'Mixed system with public and private options',
                alignment: { democrat: 60, republican: 40, independent: 70 }
            },
            {
                text: 'Primarily private healthcare with limited public assistance',
                alignment: { democrat: 20, republican: 80, independent: 40 }
            },
            {
                text: 'Fully privatized healthcare system',
                alignment: { democrat: 5, republican: 95, independent: 30 }
            }
        ]
    },
    {
        id: 'economy-1',
        topic: 'Economic Policy',
        text: 'How should economic policy be approached?',
        options: [
            {
                text: 'Strong government regulation and oversight',
                alignment: { democrat: 85, republican: 15, independent: 45 }
            },
            {
                text: 'Balanced regulation with market freedoms',
                alignment: { democrat: 50, republican: 50, independent: 80 }
            },
            {
                text: 'Minimal government intervention',
                alignment: { democrat: 10, republican: 90, independent: 40 }
            }
        ]
    },
    {
        id: 'education-1',
        topic: 'Education',
        text: 'What approach should be taken for education funding?',
        options: [
            {
                text: 'Increase federal funding for public education',
                alignment: { democrat: 80, republican: 20, independent: 60 }
            },
            {
                text: 'Maintain current funding levels with reforms',
                alignment: { democrat: 50, republican: 50, independent: 70 }
            },
            {
                text: 'Implement school choice and voucher systems',
                alignment: { democrat: 20, republican: 80, independent: 50 }
            }
        ]
    },
    {
        id: 'immigration-1',
        topic: 'Immigration',
        text: 'What should be the approach to immigration policy?',
        options: [
            {
                text: 'Path to citizenship for undocumented immigrants',
                alignment: { democrat: 85, republican: 15, independent: 55 }
            },
            {
                text: 'Stricter border control and enforcement',
                alignment: { democrat: 20, republican: 80, independent: 45 }
            },
            {
                text: 'Merit-based immigration system',
                alignment: { democrat: 40, republican: 60, independent: 70 }
            }
        ]
    },
    {
        id: 'climate-1',
        topic: 'Climate Change',
        text: 'How should the government address climate change?',
        options: [
            {
                text: 'Aggressive regulations and investment in renewable energy',
                alignment: { democrat: 90, republican: 10, independent: 60 }
            },
            {
                text: 'Market-based solutions like carbon pricing',
                alignment: { democrat: 60, republican: 40, independent: 75 }
            },
            {
                text: 'Minimal intervention, focus on adaptation',
                alignment: { democrat: 10, republican: 90, independent: 40 }
            }
        ]
    },
    {
        id: 'gun-control-1',
        topic: 'Gun Control',
        text: 'What approach should be taken on gun control?',
        options: [
            {
                text: 'Strict gun control laws',
                alignment: { democrat: 85, republican: 15, independent: 50 }
            },
            {
                text: 'Moderate regulations with focus on background checks',
                alignment: { democrat: 60, republican: 40, independent: 70 }
            },
            {
                text: 'Minimal restrictions on gun ownership',
                alignment: { democrat: 10, republican: 90, independent: 45 }
            }
        ]
    },
    {
        id: 'taxes-1',
        topic: 'Taxation',
        text: 'What should be the approach to taxation?',
        options: [
            {
                text: 'Progressive tax system with higher rates for wealthy',
                alignment: { democrat: 90, republican: 10, independent: 55 }
            },
            {
                text: 'Flat tax rate for all income levels',
                alignment: { democrat: 20, republican: 80, independent: 50 }
            },
            {
                text: 'Lower overall tax rates with fewer deductions',
                alignment: { democrat: 30, republican: 70, independent: 60 }
            }
        ]
    },
    {
        id: 'foreign-policy-1',
        topic: 'Foreign Policy',
        text: 'What should be the primary focus of U.S. foreign policy?',
        options: [
            {
                text: 'Multilateral cooperation and diplomacy',
                alignment: { democrat: 80, republican: 20, independent: 65 }
            },
            {
                text: 'Strong military presence and intervention when necessary',
                alignment: { democrat: 30, republican: 70, independent: 50 }
            },
            {
                text: 'Non-interventionism and focus on domestic issues',
                alignment: { democrat: 40, republican: 60, independent: 75 }
            }
        ]
    },
    {
        id: 'social-security-1',
        topic: 'Social Security',
        text: 'How should Social Security be managed in the future?',
        options: [
            {
                text: 'Expand benefits and increase funding through taxes',
                alignment: { democrat: 85, republican: 15, independent: 55 }
            },
            {
                text: 'Maintain current system with minor adjustments',
                alignment: { democrat: 60, republican: 40, independent: 70 }
            },
            {
                text: 'Privatize Social Security or offer optional personal accounts',
                alignment: { democrat: 10, republican: 90, independent: 45 }
            }
        ]
    },
    {
        id: 'minimum-wage-1',
        topic: 'Minimum Wage',
        text: 'What should be done with the federal minimum wage?',
        options: [
            {
                text: 'Significantly increase the federal minimum wage',
                alignment: { democrat: 90, republican: 10, independent: 60 }
            },
            {
                text: 'Modest increases tied to inflation',
                alignment: { democrat: 70, republican: 30, independent: 75 }
            },
            {
                text: 'Eliminate the federal minimum wage',
                alignment: { democrat: 5, republican: 95, independent: 30 }
            }
        ]
    },
    {
        id: 'criminal-justice-1',
        topic: 'Criminal Justice',
        text: 'How should the criminal justice system be reformed?',
        options: [
            {
                text: 'Focus on rehabilitation and reduce incarceration rates',
                alignment: { democrat: 85, republican: 15, independent: 60 }
            },
            {
                text: 'Maintain current system with minor reforms',
                alignment: { democrat: 40, republican: 60, independent: 55 }
            },
            {
                text: 'Tougher sentences and increased law enforcement funding',
                alignment: { democrat: 20, republican: 80, independent: 45 }
            }
        ]
    },
    {
        id: 'abortion-1',
        topic: 'Abortion',
        text: 'What should be the legal status of abortion?',
        options: [
            {
                text: 'Legal in all or most circumstances',
                alignment: { democrat: 90, republican: 10, independent: 60 }
            },
            {
                text: 'Legal with some restrictions',
                alignment: { democrat: 60, republican: 40, independent: 70 }
            },
            {
                text: 'Illegal in all or most circumstances',
                alignment: { democrat: 10, republican: 90, independent: 40 }
            }
        ]
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];

function showLoadingSpinner() {
    document.getElementById('loading-spinner').classList.remove('hidden');
}

function hideLoadingSpinner() {
    document.getElementById('loading-spinner').classList.add('hidden');
}

async function startSurvey() {
    document.getElementById('landing').classList.add('hidden');
    document.getElementById('survey').classList.remove('hidden');
    loadQuestion();
    updateProgress();
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <h3 class="question-title">${question.text}</h3>
        <div class="options">
            ${question.options.map((option, index) => `
                <button class="option-button" data-index="${index}">
                    ${option.text}
                </button>
            `).join('')}
        </div>
        <div id="alignment-feedback" class="alignment-feedback hidden"></div>
    `;

    container.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', () => selectAnswer(parseInt(button.dataset.index)));
    });
}

async function selectAnswer(optionIndex) {
    const question = questions[currentQuestionIndex];
    const answer = {
        questionId: question.id,
        topic: question.topic,
        selectedOption: optionIndex,
        alignment: question.options[optionIndex].alignment
    };

    userAnswers[currentQuestionIndex] = answer;
    
    document.querySelectorAll('.option-button').forEach((btn, index) => {
        if (index === optionIndex) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    showAlignmentFeedback(answer.alignment);

    setTimeout(async () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            await showResults();
        }
        updateProgress();
    }, 2000);
}

function showAlignmentFeedback(alignment) {
    const feedbackElement = document.getElementById('alignment-feedback');
    feedbackElement.innerHTML = `
        <p>This answer aligns:</p>
        <ul>
            <li>${alignment.democrat}% with Democratic views</li>
            <li>${alignment.republican}% with Republican views</li>
            <li>${alignment.independent}% with Independent views</li>
        </ul>
    `;
    feedbackElement.classList.remove('hidden');
}

function updateProgress() {
    const progress = (currentQuestionIndex / questions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function calculateResults() {
    let totalAlignment = {
        democrat: 0,
        republican: 0,
        independent: 0
    };

    userAnswers.forEach(answer => {
        totalAlignment.democrat += answer.alignment.democrat;
        totalAlignment.republican += answer.alignment.republican;
        totalAlignment.independent += answer.alignment.independent;
    });

    const total = userAnswers.length;
    return {
        democrat: totalAlignment.democrat / total,
        republican: totalAlignment.republican / total,
        independent: totalAlignment.independent / total
    };
}

async function showResults() {
    showLoadingSpinner();
    try {
        const results = calculateResults();
        await backend.saveSurveyResults(results);
        document.getElementById('survey').classList.add('hidden');
        document.getElementById('results').classList.remove('hidden');
        createAlignmentChart(results);
        displayDetailedResults(results);
    } catch (error) {
        console.error('Error saving survey results:', error);
        alert('An error occurred while saving your results. Please try again.');
    } finally {
        hideLoadingSpinner();
    }
}

function createAlignmentChart(results) {
    const ctx = document.getElementById('alignment-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Democratic', 'Republican', 'Independent'],
            datasets: [{
                label: 'Overall Policy Alignment (%)',
                data: [
                    results.democrat,
                    results.republican,
                    results.independent
                ],
                backgroundColor: [
                    'rgba(103, 2, 255, 0.8)',
                    'rgba(255, 103, 2, 0.8)',
                    'rgba(2, 103, 255, 0.8)'
                ]
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function displayDetailedResults(results) {
    const container = document.getElementById('results-breakdown');
    
    const topicResults = {};
    userAnswers.forEach(answer => {
        if (!topicResults[answer.topic]) {
            topicResults[answer.topic] = [];
        }
        topicResults[answer.topic].push(answer);
    });

    container.innerHTML = Object.entries(topicResults).map(([topic, answers]) => `
        <div class="result-card">
            <h3>${topic}</h3>
            <div class="topic-analysis">
                ${generateTopicAnalysis(answers)}
            </div>
        </div>
    `).join('');
}

function generateTopicAnalysis(answers) {
    const topicAlignment = answers.reduce((acc, answer) => {
        acc.democrat += answer.alignment.democrat;
        acc.republican += answer.alignment.republican;
        acc.independent += answer.alignment.independent;
        return acc;
    }, { democrat: 0, republican: 0, independent: 0 });

    const count = answers.length;
    const averageAlignment = {
        democrat: topicAlignment.democrat / count,
        republican: topicAlignment.republican / count,
        independent: topicAlignment.independent / count
    };

    const primaryAlignment = Object.entries(averageAlignment)
        .reduce((a, b) => a[1] > b[1] ? a : b)[0];

    return `
        <div class="alignment-bars">
            <div class="alignment-bar">
                <label>Democratic: ${Math.round(averageAlignment.democrat)}%</label>
                <div class="bar" style="width: ${averageAlignment.democrat}%"></div>
            </div>
            <div class="alignment-bar">
                <label>Republican: ${Math.round(averageAlignment.republican)}%</label>
                <div class="bar" style="width: ${averageAlignment.republican}%"></div>
            </div>
            <div class="alignment-bar">
                <label>Independent: ${Math.round(averageAlignment.independent)}%</label>
                <div class="bar" style="width: ${averageAlignment.independent}%"></div>
            </div>
        </div>
        <p class="alignment-summary">
            Your views on this topic align most closely with 
            <strong>${primaryAlignment.charAt(0).toUpperCase() + primaryAlignment.slice(1)}</strong> positions.
        </p>
    `;
}

function restartSurvey() {
    currentQuestionIndex = 0;
    userAnswers = [];
    document.getElementById('results').classList.add('hidden');
    document.getElementById('landing').classList.remove('hidden');
    document.getElementById('progress-bar').style.width = '0%';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-survey-btn').addEventListener('click', startSurvey);
    document.getElementById('landing-start-survey-btn').addEventListener('click', startSurvey);
    document.getElementById('restart-survey-btn').addEventListener('click', restartSurvey);
});
