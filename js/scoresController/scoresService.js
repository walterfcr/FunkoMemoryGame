import { GOTO_EVENT_TYPE } from "../constants.js";
import { Service } from "../service.js";

export class ScoresService extends Service {
    constructor(controller, onCompleted) {
        super(controller, onCompleted);
        this.fetch();
    }

    fetch() {
        let url = `http://localhost:3000/scores`;
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            try {
                let scoresData = JSON.parse(request.response);
                let scores = [];

                // Convert the scores data to an array
                for (const scoreKey in scoresData) {
                    const score = scoresData[scoreKey];
                    scores.push(score);
                }

                // Find the highest score
                const highestScore = scores.reduce((max, score) => score.score > max.score ? score : max, scores[0]);

                // Get the last 4 recent scores
                let recentScores = scores.slice(-3);

                // Reverse the order so the most recent ones are at the top
                recentScores.reverse();

                // Check if the highest score is already included in recentScores
                const isHighestScoreInRecent = recentScores.some(score => score === highestScore);

                // If the highest score is not included in the recent scores, add it to the top
                if (!isHighestScoreInRecent) {
                    recentScores.unshift(highestScore);
                }

                // Send the final list of scores to be displayed
                this.onCompleted(recentScores);
            } catch (error) {
                console.error("Error processing scores data:", error);
            }
        };

        request.onerror = () => {
            console.error("Request error");
        };

        request.send();
    }
}
