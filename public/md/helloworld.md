# Hello World

![Hello World](images/testimage.drawio.png)

A "Hello, World!" program is generally a computer program that ignores any input, and outputs or displays a message similar to "Hello, World!". A small piece of code in most general-purpose programming languages, this program is used to illustrate a language's basic syntax. "Hello, World!" programs are often the first a student learns to write in a given language, and they can also be used as a sanity check to ensure computer software intended to compile or run source code is correctly installed, and that its operator understands how to use it.  

## History

While small test programs have existed since the development of programmable computers, the tradition of using the phrase "Hello, World!" as a test message was influenced by an example program in the 1978 book The C Programming Language,, with likely earlier use in BCPL (as below). The example program in that book prints "hello, world", and was inherited from a 1974 Bell Laboratories internal memorandum by Brian Kernighan, Programming in C: A Tutorial:

```C title="hello world.c"
main( ) {
        printf("hello, world");
}
```

In the above example, the main( ) function defines where the program should start executing. The function body consists of a single statement, a call to the printf function, which stands for "print formatted". This function will cause the program to output whatever is passed to it as the parameter, in this case the string hello, world.

The C language version was preceded by Kernighan's own 1972 A Tutorial Introduction to the Language B, where the first known version of the program is found in an example used to illustrate external variables:  

```C title="aaa.c"
main( ) {
    extern a, b, c;
    putchar(a); putchar(b); putchar(c); putchar('!*n');
}
 
a 'hell';
b 'o, w';
c 'orld';
```

The program prints hello, world! on the terminal, including a newline character. The phrase is divided into multiple variables because in B a character constant is limited to four ASCII characters. The previous example in the tutorial printed hi! on the terminal, and the phrase hello, world! was introduced as a slightly longer greeting that required several character constants for its expression.

The Jargon File reports that "hello, world" instead originated with BCPL (1967).

## Variations

"Hello, World!" programs vary in complexity between different languages. In some languages, particularly scripting languages, the "Hello, World!" program can be written as a single statement, while in others (particularly many low-level languages) there can be many more statements required. For example, in Python, to print the string Hello, World! followed by a newline, one only needs to write print("Hello, World!"). In contrast, the equivalent code in C++ requires the import of the input/output software library, the manual declaration of an entry point, and the explicit instruction that the output string should be sent to the standard output stream.

The phrase "Hello, World!" has seen various deviations in casing and punctuation, such as the capitalization of the leading H and W, and the presence of the comma and/or exclamation mark. Some devices limit the format to specific variations, such as all-capitalized versions on systems that support only capital letters, while some esoteric programming languages may have to print a slightly modified string. For example, the first non-trivial Malbolge program printed "Hello world", this having been determined to be good enough. Another notable example is the Rust programming language, whose management system automatically inserts a "Hello, World" program when creating new projects.

Some languages change the functionality of the "Hello, World!" program while maintaining the spirit of demonstrating a simple example. Functional programming languages, such as Lisp, ML, and Haskell, tend to substitute a factorial program for "Hello, World!", as functional programming emphasizes recursive techniques, whereas the original examples emphasize I/O, which violates the spirit of pure functional programming by producing side effects. Languages otherwise capable of printing "Hello, World!" (Assembly, C, VHDL) may also be used in embedded systems, where text output is either difficult (requiring additional components or communication with another computer) or nonexistent. For devices such as microcontrollers, field-programmable gate arrays, and CPLDs, "Hello, World!" may thus be substituted with a blinking LED, which demonstrates timing and interaction between components.

The Debian and Ubuntu Linux distributions provide the "Hello, World!" program through their software package manager systems, which can be invoked with the command hello. It serves as a sanity check and a simple example of installing a software package. For developers, it provides an example of creating a .deb package, either traditionally or using debhelper, and the version of hello used, GNU Hello, serves as an example of writing a GNU program.

Variations of the "Hello, World!" program that produce a graphical output (as opposed to text output) have also been shown. Sun demonstrated a "Hello, World!" program in Java based on scalable vector graphics,:

## Time to Hello World

"Time to hello world" (TTHW) is the time it takes to author a "Hello, World!" program in a given programming language. This is one measure of a programming language's ease of use; since the program is meant as an introduction for people unfamiliar with the language, a more complex "Hello, World!" program may indicate that the programming language is less approachable.
