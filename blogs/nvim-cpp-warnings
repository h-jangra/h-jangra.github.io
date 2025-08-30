# `iostream: file not found` in Neovim

# Fixing C++ Warnings in Neovim

I opened a C++ file in Neovim and saw:

```

fatal error: 'iostream' file not found

````

Even though `clangd` was installed.

---

## Cause
`clangd` didn’t know where the C++ standard library headers were.

---

## Fix
I added a `.clangd` file in the project root:

```yaml
CompileFlags:
  Add: [-std=c++17, -I/usr/include/c++/11, -I/usr/include/x86_64-linux-gnu/c++/11]
````

---

**Tip:** if you use CMake, generate `compile_commands.json` instead. `clangd` will auto-detect flags.

```
