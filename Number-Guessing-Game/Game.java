import java.util.*;

public class Game {
    boolean isRunning = true;
    int chances = 5;
    int level;
    Scanner sc = new Scanner(System.in);
    Random rand = new Random();
    int numberToGuess = rand.nextInt(100);

    public Game() {

        System.out.print(
                "Welcome to the Number Guessing Game! \n I'm thinking of a number between 1 and 100. \n You have 5 chances to guess the correct number.");
        SelectLevel();
        PlayGame();
    }

    public void SelectLevel() {
        System.out.println("Please select the difficulty level:");
        System.out.println("1. Easy (10 chances)");
        System.out.println("2. Medium (5 chances)");
        System.out.println("3. Hard (3 chances)");
        System.err.print("Enter your choice: ");
        this.level = sc.nextInt();

        switch (this.level) {
            case 1:
                System.out.println("Great! You have selected the Easy difficulty level");
                this.chances = 10;
                break;
            case 2:
                System.out.println("Great! You have selected the Medium difficulty level");
                this.chances = 5;
                break;
            case 3:
                System.out.println("Great! You have selected the Hard difficulty level");
                this.chances = 3;
                break;
            default:
                System.out.println("Invalid selection. Please try again.");
                SelectLevel();
        }
    }

    public void PlayGame() {
        System.out.println("Let's start the game!");
        int tries = 1;
        while (this.chances > 0) {
            System.err.print("Enter your guess:");
            int guess = sc.nextInt();
            if (guess == this.numberToGuess) {
                System.err.println("Congratulations! You guessed the correct number in " + tries
                        + " chances.");
                this.isRunning = false;
                break;

            } else if (guess < this.numberToGuess) {
                System.out.println("Incorrect! The number is greater than " + guess);
            } else {
                System.out.println("Incorrect! The number is less than " + guess);
            }
            tries++;
            this.chances--;
        }
        if (this.chances == 0) {
            System.out.println("Game Over! The correct number was " + this.numberToGuess);

        }
        this.isRunning = false;
    }

}
