const flashcards = [
  { category: "Algebra 1", term: "Solve for x: 3x + 7 = 22", definition: "x = 5", example: "Subtract 7 from both sides: 3x = 15; divide by 3." },
  { category: "Algebra 1", term: "Simplify: 4(x + 3)", definition: "4x + 12", example: "Distribute the 4 to both terms inside parentheses." },
  { category: "Algebra 1", term: "Solve: 2x - 9 = 11", definition: "x = 10", example: "Add 9, then divide by 2." },
  { category: "Algebra 1", term: "Find the slope of the line through (2, 5) and (6, 13)", definition: "m = 2", example: "(13 - 5) / (6 - 2) = 8 / 4 = 2" },
  { category: "Algebra 1", term: "Write the equation of the line with slope 3 and y-intercept -2", definition: "y = 3x - 2", example: "Use y = mx + b with m = 3 and b = -2." },
  { category: "Algebra 1", term: "Solve: 5x + 2 = 17", definition: "x = 3", example: "Subtract 2, then divide by 5." },
  { category: "Algebra 1", term: "Evaluate: 3^2 + 4^2", definition: "25", example: "9 + 16 = 25" },
  { category: "Algebra 1", term: "Combine like terms: 6x + 3 - 2x + 8", definition: "4x + 11", example: "Combine 6x and -2x, then 3 and 8." },
  { category: "Algebra 1", term: "Solve: x/4 = 7", definition: "x = 28", example: "Multiply both sides by 4." },
  { category: "Algebra 1", term: "Solve: -2x + 10 = 4", definition: "x = 3", example: "Subtract 10, divide by -2." },
  { category: "Algebra 1", term: "What is | -9 |?", definition: "9", example: "Absolute value is distance from zero." },
  { category: "Algebra 1", term: "Solve the system: x + y = 8 and x - y = 2", definition: "x = 5, y = 3", example: "Add the equations to eliminate y." },
  { category: "Algebra 1", term: "Solve: 2(x - 5) = 16", definition: "x = 13", example: "Distribute, then add 10 to both sides." },
  { category: "Algebra 1", term: "Is (3, 2) a solution to y = 2x - 4?", definition: "Yes", example: "2 = 2(3) - 4 = 2" },
  { category: "Algebra 1", term: "Find the value of y when x = 4 in y = 2x + 1", definition: "y = 9", example: "2(4) + 1 = 9" },
  { category: "Algebra 1", term: "Simplify: 3a + 5b - a + 2b", definition: "2a + 7b", example: "Combine like terms." },
  { category: "Algebra 1", term: "Solve: 7x - 14 = 0", definition: "x = 2", example: "Add 14, divide by 7." },
  { category: "Algebra 1", term: "Find the y-intercept of y = -5x + 9", definition: "9", example: "The y-intercept is the constant term." },
  { category: "Algebra 1", term: "Solve the inequality: 3x < 15", definition: "x < 5", example: "Divide both sides by 3." },
  { category: "Algebra 1", term: "Evaluate: 2(x + 4) when x = 3", definition: "14", example: "2(7) = 14" },

  { category: "Geometry", term: "Find the area of a rectangle with length 8 and width 5", definition: "40 square units", example: "A = lw = 8 × 5 = 40" },
  { category: "Geometry", term: "The perimeter of a square is 36. What is one side length?", definition: "9", example: "A square has 4 equal sides, so 36/4 = 9." },
  { category: "Geometry", term: "Find the missing angle if two angles are complementary and one is 35°", definition: "55°", example: "90° - 35° = 55°" },
  { category: "Geometry", term: "A triangle has angles 50°, 60°, and x. Find x.", definition: "70°", example: "Triangle angles sum to 180°." },
  { category: "Geometry", term: "Find the circumference of a circle with radius 7 using π ≈ 3.14", definition: "43.96", example: "C = 2πr = 2(3.14)(7)" },
  { category: "Geometry", term: "Find the area of a triangle with base 10 and height 6", definition: "30 square units", example: "A = 1/2 bh = 1/2(10)(6)" },
  { category: "Geometry", term: "Find the diameter of a circle with radius 9", definition: "18", example: "d = 2r" },
  { category: "Geometry", term: "What is the measure of a right angle?", definition: "90°", example: "A right angle is exactly 90 degrees." },
  { category: "Geometry", term: "Find the volume of a rectangular prism with length 4, width 3, and height 2", definition: "24 cubic units", example: "V = lwh = 4 × 3 × 2" },
  { category: "Geometry", term: "A rectangle has length 12 and width 7. Find the area.", definition: "84 square units", example: "A = lw = 12 × 7" },
  { category: "Geometry", term: "True or false: all squares are rectangles.", definition: "True", example: "Squares have four right angles and opposite sides parallel." },
  { category: "Geometry", term: "Solve for the hypotenuse of a right triangle with legs 3 and 4", definition: "5", example: "3² + 4² = c² → 25 = c² → c = 5" },
  { category: "Geometry", term: "A circle has radius 5. Find the area.", definition: "78.5 square units", example: "A = πr² = 3.14 × 25" },
  { category: "Geometry", term: "A line segment has endpoints (1, 2) and (5, 2). What is its length?", definition: "4", example: "Subtract x-values: 5 - 1 = 4" },
  { category: "Geometry", term: "Find the supplement of 72°", definition: "108°", example: "180° - 72° = 108°" },
  { category: "Geometry", term: "A polygon has 5 sides. What is it called?", definition: "Pentagon", example: "A pentagon has five sides." },
  { category: "Geometry", term: "Two angles are supplementary and one is 110°. What is the other?", definition: "70°", example: "180° - 110° = 70°" },
  { category: "Geometry", term: "What is the area of a square with side length 6?", definition: "36 square units", example: "A = s² = 6²" },
  { category: "Geometry", term: "If a triangle has sides 5, 12, and 13, is it right?", definition: "Yes", example: "5² + 12² = 13²" },
  { category: "Geometry", term: "A circle has diameter 10. What is the radius?", definition: "5", example: "r = d/2 = 10/2" },

  { category: "Algebra 2", term: "Solve x² - 5x + 6 = 0", definition: "x = 2 or x = 3", example: "Factor into (x - 2)(x - 3) = 0" },
  { category: "Algebra 2", term: "Find the vertex of y = x² - 6x + 8", definition: "(3, -1)", example: "Complete the square or use x = -b/2a." },
  { category: "Algebra 2", term: "Solve using the quadratic formula: x² + 4x - 5 = 0", definition: "x = 1 or x = -5", example: "The discriminant is 36." },
  { category: "Algebra 2", term: "Simplify: (x³)(x⁴)", definition: "x⁷", example: "Add the exponents when multiplying like bases." },
  { category: "Algebra 2", term: "Solve: 2^x = 16", definition: "x = 4", example: "16 = 2⁴" },
  { category: "Algebra 2", term: "What is log₂ 8?", definition: "3", example: "2³ = 8" },
  { category: "Algebra 2", term: "Simplify: (3x²y)(4xy³)", definition: "12x³y⁴", example: "Multiply coefficients and add exponents." },
  { category: "Algebra 2", term: "Find the axis of symmetry for y = x² - 8x + 15", definition: "x = 4", example: "x = -b/(2a) = 8/2 = 4" },
  { category: "Algebra 2", term: "Solve: x² = 49", definition: "x = ±7", example: "Take the square root of both sides." },
  { category: "Algebra 2", term: "Evaluate: f(3) if f(x) = 2x + 5", definition: "11", example: "2(3) + 5 = 11" },
  { category: "Algebra 2", term: "Write the inverse of f(x) = 3x - 2", definition: "f⁻¹(x) = (x + 2)/3", example: "Swap x and y, then solve for y." },
  { category: "Algebra 2", term: "Find the next term in the arithmetic sequence 4, 9, 14, 19, ...", definition: "24", example: "Add 5 each time." },
  { category: "Algebra 2", term: "Find the common ratio in 3, 6, 12, 24, ...", definition: "2", example: "Divide any term by the previous term." },
  { category: "Algebra 2", term: "Simplify: x⁶ / x²", definition: "x⁴", example: "Subtract exponents with the same base." },
  { category: "Algebra 2", term: "Solve: 5x² - 20 = 0", definition: "x = ±2", example: "Add 20, divide by 5, take square roots." },
  { category: "Algebra 2", term: "Find the discriminant of x² - 6x + 9", definition: "0", example: "b² - 4ac = 36 - 36 = 0" },
  { category: "Algebra 2", term: "If f(x) = x² + 1 and g(x) = 2x, find f(g(2))", definition: "17", example: "g(2) = 4, then f(4) = 17" },
  { category: "Algebra 2", term: "Simplify: √72", definition: "6√2", example: "72 = 36 × 2" },
  { category: "Algebra 2", term: "Solve: 3(x - 2) = 15", definition: "x = 7", example: "Divide by 3, then add 2." },
  { category: "Algebra 2", term: "Find the sum of the first 5 terms of 2, 4, 6, 8, ...", definition: "30", example: "The sum is 2 + 4 + 6 + 8 + 10 = 30." },

  { category: "Trigonometry", term: "Find sin(30°)", definition: "1/2", example: "A 30-60-90 triangle has opposite/hypotenuse = 1/2." },
  { category: "Trigonometry", term: "Find cos(60°)", definition: "1/2", example: "In a 30-60-90 triangle, adjacent/hypotenuse = 1/2." },
  { category: "Trigonometry", term: "Find tan(45°)", definition: "1", example: "Opposite and adjacent are equal in a 45-45-90 triangle." },
  { category: "Trigonometry", term: "Convert 90° to radians", definition: "π/2", example: "Multiply by π/180." },
  { category: "Trigonometry", term: "Solve for x: sin x = 1/2, 0° ≤ x ≤ 90°", definition: "30°", example: "Known value from the unit circle." },
  { category: "Trigonometry", term: "If sin θ = 3/5 and θ is acute, find cos θ", definition: "4/5", example: "Use the Pythagorean identity sin²θ + cos²θ = 1." },
  { category: "Trigonometry", term: "Find the amplitude of y = 3 sin x", definition: "3", example: "Amplitude is the coefficient in front of the trig function." },
  { category: "Trigonometry", term: "What is the period of y = sin x?", definition: "2π", example: "The sine curve repeats every 2π radians." },
  { category: "Trigonometry", term: "Find sec(0°)", definition: "1", example: "sec θ = 1 / cos θ and cos 0° = 1." },
  { category: "Trigonometry", term: "Find the reference angle for 150°", definition: "30°", example: "180° - 150° = 30°" },
  { category: "Trigonometry", term: "Use the identity sin²θ + cos²θ = 1 to find cos²θ if sin²θ = 0.36", definition: "0.64", example: "cos²θ = 1 - 0.36" },
  { category: "Trigonometry", term: "Solve the triangle using the Law of Sines: a/sin A = b/sin B", definition: "Use known side-angle pairs to solve for the missing value.", example: "This is a proportion problem using the sine rule." },
  { category: "Trigonometry", term: "Find cot(45°)", definition: "1", example: "cot θ = 1 / tan θ = 1/1" },
  { category: "Trigonometry", term: "What is the value of cos(90°)?", definition: "0", example: "At 90°, the x-coordinate on the unit circle is 0." },
  { category: "Trigonometry", term: "If a right triangle has opposite = 7 and hypotenuse = 25, find sin θ", definition: "7/25", example: "sin θ = opposite / hypotenuse" },
  { category: "Trigonometry", term: "Evaluate tan(30°)", definition: "√3/3", example: "tan 30° = opposite/adjacent = 1/√3" },
  { category: "Trigonometry", term: "What is the phase shift of y = sin(x - π/2)?", definition: "π/2 to the right", example: "Inside the function, x - π/2 shifts right." },
  { category: "Trigonometry", term: "Find the midline of y = 2 sin x + 4", definition: "y = 4", example: "The graph oscillates around the vertical shift." },
  { category: "Trigonometry", term: "Convert 2π/3 radians to degrees", definition: "120°", example: "Multiply by 180/π." },
  { category: "Trigonometry", term: "If sin θ = 1/2, what is θ in the first quadrant?", definition: "30°", example: "Use the common special triangle." }
];

const state = {
  category: "all",
  currentIndex: 0,
  isFlipped: false,
  mastered: new Set()
};

const elements = {
  categoryFilter: document.getElementById("category-filter"),
  cardCount: document.getElementById("card-count"),
  masteredCount: document.getElementById("mastered-count"),
  shuffleBtn: document.getElementById("shuffle-btn"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  flipBtn: document.getElementById("flip-btn"),
  knownBtn: document.getElementById("known-btn"),
  flashcard: document.getElementById("flashcard"),
  cardTerm: document.getElementById("card-term"),
  cardDefinition: document.getElementById("card-definition"),
  cardExample: document.getElementById("card-example"),
  cardHint: document.getElementById("card-hint"),
  cardPosition: document.getElementById("card-position"),
  cardTotal: document.getElementById("card-total"),
  progressFill: document.getElementById("progress-fill")
};

function getVisibleCards() {
  if (state.category === "all") {
    return flashcards;
  }

  return flashcards.filter((card) => card.category === state.category);
}

function setupCategories() {
  const categories = [...new Set(flashcards.map((card) => card.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categoryFilter.appendChild(option);
  });
}

function renderCard() {
  const visibleCards = getVisibleCards();

  if (!visibleCards.length) {
    elements.flashcard.classList.remove("is-flipped");
    elements.cardTerm.textContent = "No cards here";
    elements.cardDefinition.textContent = "Try a different category.";
    elements.cardExample.textContent = "There are no study cards in this section yet.";
    elements.cardHint.textContent = "Pick another topic to keep practicing.";
    state.isFlipped = false;
    return;
  }

  if (state.currentIndex >= visibleCards.length) {
    state.currentIndex = 0;
  }

  const card = visibleCards[state.currentIndex];
  elements.cardTerm.textContent = card.term;
  elements.cardDefinition.textContent = card.definition;
  elements.cardExample.textContent = card.example;
    elements.cardHint.textContent = "Tap to reveal the answer";

  const total = visibleCards.length;
  const progress = ((state.currentIndex + 1) / total) * 100;

  elements.cardPosition.textContent = String(state.currentIndex + 1);
  elements.cardTotal.textContent = String(total);
  elements.progressFill.style.width = `${progress}%`;
  elements.cardCount.textContent = String(flashcards.length);
  elements.masteredCount.textContent = String(state.mastered.size);
}

function goToNextCard() {
  const visibleCards = getVisibleCards();
  if (!visibleCards.length) return;

  state.currentIndex = (state.currentIndex + 1) % visibleCards.length;
  renderCard();
}

function goToPreviousCard() {
  const visibleCards = getVisibleCards();
  if (!visibleCards.length) return;

  state.currentIndex = (state.currentIndex - 1 + visibleCards.length) % visibleCards.length;
  renderCard();
}

function toggleCard() {
  const visibleCards = getVisibleCards();
  if (!visibleCards.length) return;

  state.isFlipped = !state.isFlipped;
  elements.flashcard.classList.toggle("is-flipped", state.isFlipped);
}

function markKnown() {
  const visibleCards = getVisibleCards();
  if (!visibleCards.length) return;

  const currentCard = visibleCards[state.currentIndex];
  state.mastered.add(currentCard.term);
  elements.masteredCount.textContent = String(state.mastered.size);

  goToNextCard();
}

function shuffleCards() {
  for (let i = flashcards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
  }

  state.currentIndex = 0;
  renderCard();
}

function handleCategoryChange(event) {
  state.category = event.target.value;
  state.currentIndex = 0;
  renderCard();
}

function bindEvents() {
  elements.categoryFilter.addEventListener("change", handleCategoryChange);
  elements.shuffleBtn.addEventListener("click", shuffleCards);
  elements.prevBtn.addEventListener("click", goToPreviousCard);
  elements.nextBtn.addEventListener("click", goToNextCard);
  elements.flipBtn.addEventListener("click", toggleCard);
  elements.knownBtn.addEventListener("click", markKnown);
  elements.flashcard.addEventListener("click", toggleCard);
  elements.flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      goToNextCard();
    }

    if (event.key === "ArrowLeft") {
      goToPreviousCard();
    }

    if (event.key === " ") {
      if (document.activeElement === elements.flashcard) {
        event.preventDefault();
        toggleCard();
      }
    }
  });
}

setupCategories();
bindEvents();
renderCard();
