class Person {
    constructor(name) {
        this.name = name;
    }
};

class Voter extends Person {
    constructor(name, ideology) {
        super(name);
        this.ideology = ideology;
    }
};

class Candidate extends Person {
    constructor(name, party) {
        super(name);
        this.party = party;
        this.votes = 0;
    }
};

let voters = [];
let candidates = {
    'Democrat': [],
    'Independent': [],
    'Republican': []
};

let randomCandidateVote = function(party) {
    candidates[party][Math.floor(Math.random() * candidates[party].length)].votes++;
    return null;
};

$(function() {
    $('#candidate-form form').on('submit', function(event) {
        event.preventDefault();

        let formData = $(this).serializeArray();

        candidates[formData[1].value].push(new Candidate(formData[0].value, formData[1].value));
        
        $('<li/>', {
            'class': 'list-group-item',
            'text': formData[0].value + ' (' + formData[1].value + ')'
        }).appendTo('#candidate-list ul');
    });

    $('#voter-form form').on('submit', function(event) {
        event.preventDefault();

        let formData = $(this).serializeArray();

        voters.push(new Voter(formData[0].value, formData[1].value));

        $('<li/>', {
            'class': 'list-group-item',
            'text': formData[0].value + ' (' + formData[1].value + ')'
        }).appendTo('#voter-list ul');
    });

    $('#vote-btn-div button').on('click', function() {
        if (candidates['Democrat'].length === 0 || candidates['Independent'].length === 0 || candidates['Republican'].length === 0 ) {
            return alert('Candidates array is empty or not enought. Candidates must be from each parties.');
        }

        if (voters.length === 0) {
            return alert('Voters array is empty.');
        }

        ['Democrat', 'Independent', 'Republican'].forEach(function(party) {
            candidates[party].forEach(function(candidate) {
                candidate.votes = 0;
            });
        });

        voters.forEach(function(voter) {
            let randomValue = Math.random();

            if (voter.ideology === 'Conservative') {
                if (randomValue < 0.6) {
                    randomCandidateVote('Democrat'); 
                } else if (randomValue < 0.8) {
                    randomCandidateVote('Independent'); 
                } else {
                    randomCandidateVote('Republican');; 
                }
            } else if (voter.ideology === 'Liberal') {
                if (randomValue < 0.6) {
                    randomCandidateVote('Republican');; 
                } else if (randomValue < 0.8) {
                    randomCandidateVote('Independent'); 
                } else {
                    randomCandidateVote('Democrat'); 
                }
            } else if (voter.ideology === 'Neutral') {
                if (randomValue < 0.5) {
                    randomCandidateVote('Independent'); 
                } else if (randomValue < 0.75) {
                    randomCandidateVote('Democrat'); 
                } else {
                    randomCandidateVote('Republican');; 
                }
            }
        });
    
        let maxVotes = -Infinity;
        let winnerCandidate = null;

        ['Democrat', 'Independent', 'Republican'].forEach(function(party) {
            console.log(party + ':');

            candidates[party].forEach(function(candidate) {
                console.log(candidate.name + ' - ' + candidate.votes);

                if (maxVotes < candidate.votes) {
                    maxVotes = candidate.votes;
                    winnerCandidate = candidate;
                }
            });
        });
    
        return alert(`The winner is ${winnerCandidate.name} from ${winnerCandidate.party} (${winnerCandidate.votes} votes)`);
    });
});