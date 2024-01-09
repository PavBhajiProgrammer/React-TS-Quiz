export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'

}

export const fetchQuezeQuestions = async(amount: Number, difficulty: Difficulty) => {
        const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        const data = await (await fetch(endpoint)).json();
        console.log(data);
        
}