package _01_JavaScript.Lession_001;

import java.util.Scanner;

public class Make_JavaScript_Compiler {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter JavaScript Code:");
        System.out.println("Type END to stop input.");

        StringBuilder jsCode = new StringBuilder();

        // Taking multiple lines of JS input
        while (true) {
            String line = sc.nextLine();

            if (line.equalsIgnoreCase("END")) {
                break;
            }

            jsCode.append(line).append("\n");
        }

        System.out.println("\n===== OUTPUT =====");

        executeJavaScript(jsCode.toString());

        sc.close();
    }

    /**
     * This method acts like a tiny JavaScript interpreter.
     */
    public static void executeJavaScript(String code) {

        // Split program into individual statements
        String[] statements = code.split(";");

        for (String statement : statements) {

            statement = statement.trim();

            if (statement.isEmpty()) {
                continue;
            }

            processStatement(statement);
        }
    }

    /**
     * Process one statement at a time.
     *
     * Example:
     * console.log("Dipan")
     * console.log(2+3)
     */
    public static void processStatement(String statement) {

        // Check whether statement starts with console.log(
        if (!statement.startsWith("console.log(")
                || !statement.endsWith(")")) {

            System.out.println("Invalid Syntax : " + statement);
            return;
        }

        // Extract content inside brackets
        String expression = statement.substring(
                "console.log(".length(),
                statement.length() - 1
        ).trim();

        evaluateExpression(expression);
    }

    /**
     * Evaluate expression inside console.log()
     */
    public static void evaluateExpression(String expression) {

        // ---------------------------
        // STRING CASE
        // ---------------------------
        if ((expression.startsWith("\"")
                && expression.endsWith("\""))
                ||
                (expression.startsWith("'")
                        && expression.endsWith("'"))) {

            String value =
                    expression.substring(1, expression.length() - 1);

            System.out.println(value);
            return;
        }

        // ---------------------------
        // ADDITION
        // ---------------------------
        if (expression.contains("+")) {

            String[] parts = expression.split("\\+");

            double a = Double.parseDouble(parts[0].trim());
            double b = Double.parseDouble(parts[1].trim());

            printResult(a + b);
            return;
        }

        // ---------------------------
        // SUBTRACTION
        // ---------------------------
        if (expression.contains("-")) {

            String[] parts = expression.split("-");

            double a = Double.parseDouble(parts[0].trim());
            double b = Double.parseDouble(parts[1].trim());

            printResult(a - b);
            return;
        }

        // ---------------------------
        // MULTIPLICATION
        // ---------------------------
        if (expression.contains("*")) {

            String[] parts = expression.split("\\*");

            double a = Double.parseDouble(parts[0].trim());
            double b = Double.parseDouble(parts[1].trim());

            printResult(a * b);
            return;
        }

        // ---------------------------
        // DIVISION
        // ---------------------------
        if (expression.contains("/")) {

            String[] parts = expression.split("/");

            double a = Double.parseDouble(parts[0].trim());
            double b = Double.parseDouble(parts[1].trim());

            printResult(a / b);
            return;
        }

        // ---------------------------
        // NUMBER ONLY
        // ---------------------------
        try {

            double num = Double.parseDouble(expression);
            printResult(num);

        } catch (Exception e) {

            System.out.println(
                    "Unsupported Expression : " + expression
            );
        }
    }

    /**
     * Print integer without decimal.
     * Example:
     * 5.0 -> 5
     */
    public static void printResult(double result) {

        if (result == (int) result) {
            System.out.println((int) result);
        } else {
            System.out.println(result);
        }
    }
}