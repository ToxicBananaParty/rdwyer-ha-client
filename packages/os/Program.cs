using ManyConsole;
using WindowsInput;

internal class Program
{
    // List of features:
    // - sendkey: Sends keystrokes to the Host Machine
    public static int Main(string[] args) {

        /*
        var commands = GetCommands();

        return ConsoleCommandDispatcher.DispatchCommand(commands, args, Console.Out);
        */

        //Console.WriteLine("Hello, World!");
        //new InputSimulator().Keyboard.KeyPress(WindowsInput.Native.VirtualKeyCode.NUMPAD2);
        return 0;
    }

    public static IEnumerable<ConsoleCommand> GetCommands() {
        return ConsoleCommandDispatcher.FindCommandsInSameAssemblyAs(typeof(Program));
    }
}