import java.util.Scanner;

public class GuessingGame {
    public static void main(String[] args) {
        Game game = new Game();
        Scanner scanner = new Scanner(System.in);
        while (game.isRunning == false) {
            System.out.println("Do you want to play again? (yes/no)");
            String playAgain = scanner.next();
            if (playAgain.equals("no")) {
                System.out.println("Thank you for playing the game!");
                game.isRunning = true;
                scanner.close();
            } else {
                game = new Game();
            }
        }
    }
}