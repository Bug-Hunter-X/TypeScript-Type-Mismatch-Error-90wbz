# TypeScript Type Mismatch Error

This repository demonstrates a common error in TypeScript: type mismatches. The `add` function is defined to accept two numbers, but we pass it a string.  TypeScript's type system catches this error during compilation, preventing runtime issues. The solution shows how to correctly type-check and handle potential type mismatches.

## Bug

The `bug.ts` file shows the incorrect implementation that causes the type error.  TypeScript correctly identifies the issue during compilation. 

## Solution

The `bugSolution.ts` file demonstrates several ways to fix the issue, including type guards and explicit type assertion.  This ensures the function receives the correct data type.
