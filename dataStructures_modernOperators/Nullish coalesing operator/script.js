// The JavaScript nullish coalescing operator (??) helps you provide a default value when a variable is null or undefined. It checks if the value on the left side is either null or undefined, and if so, it returns the value on the right side. If the value is not null or undefined, it uses the left-side value.

let name = null;
let defaultName = name ?? "Guest";
console.log(defaultName); // "Guest"

// In this case, name is null, so it uses "Guest" as the default value. If name had a value like "John", it would use "John" instead.

// The difference between ?? and the || (OR) operator is that ?? only considers null and undefined as empty values, while || treats other falsy values like 0, false, or "" (empty string) as empty.

// Example with ||:

let orCount = 0;
let orDefaultCount = orCount || 10;
console.log(orDefaultCount); // 10

// Here, count is 0, which is falsy, so || returns 10.

// Example with ??:

let count = 0;
let defaultCount = count ?? 10;
console.log(defaultCount); // 0

// With ??, it returns 0 because 0 is not null or undefined.
