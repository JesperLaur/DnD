function updateModifier(input, output) {
  const score = Number(input.value);
  const mod = Math.floor((score - 10) / 2);
  output.textContent = mod >= 0 ? "+" + mod : mod;
}

const abilities = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

abilities.forEach(name => {
  const input = document.getElementById(name);
  const output = document.getElementById(name + "-mod");
  input.addEventListener("input", () => updateModifier(input, output));
  updateModifier(input, output);
});
