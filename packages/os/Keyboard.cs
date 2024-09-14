using ManyConsole;

public class Keyboard : ConsoleCommand
{
    private const int Success = 0;
    private const int Failure = 2;

    public string? Input { get; set; }

    public Keyboard() {
        IsCommand("keyboard", "Send keystrokes to the host machine");

        // TODO: Longer description via HasLongDescription()

        HasRequiredOption("k|key=", "The key to send", p => Input = p);
    }

    public override int Run(string[] remainingArguments)
    {
        try {
            return Success;
        }
        catch (Exception e) {
            Console.Error.WriteLine(e.Message);
            Console.Error.WriteLine(e.StackTrace);

            return Failure;
        }
    }
}