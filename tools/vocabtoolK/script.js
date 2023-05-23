// Listen for text selection events
document.addEventListener('mouseup', handleSelection);

// Handle text selection
function handleSelection() {
  const selection = window.getSelection().toString().trim();

  // Check if selection is a single word
  if (/\s/.test(selection)) {
    return;
  }

  // Look up the word definition
  const definition = getDefinition(selection);
  if (definition) {
    showDefinition(selection, definition);
  }
}

// Get the definition of the word
function getDefinition(word) {
  // Replace this with your own logic to retrieve the definition of the word
  const germanDictionary = {
    "Katze": "a domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
    "Hund": "a domesticated carnivorous mammal with a rounded snout, short ears, and a long tail.",
    "Haus": "a building for human habitation, especially one that is lived in by a family or small group of people."
  };
  return germanDictionary[word];
}

// Show the word definition
function showDefinition(word, definition) {
  // Create a tooltip element
  const tooltip = document.createElement('div');
  tooltip.textContent = `${word}: ${definition}`;
  tooltip.classList.add('tooltip');

  // Get the bounding rectangle of the selection
  const range = window.getSelection().getRangeAt(0);
  const rect = range.getBoundingClientRect();

  // Position the tooltip next to the selection
  tooltip.style.top = `${rect.top + window.pageYOffset}px`;
  tooltip.style.left = `${rect.right + window.pageXOffset}px`;

  // Add the tooltip to the document
  document.body.appendChild(tooltip);

  // Add a click event listener to the document to remove the tooltip
  document.addEventListener('mousedown', function(event) {
    // Check if the event target is the tooltip or one of its children
    if (!tooltip.contains(event.target)) {
      document.body.removeChild(tooltip);
    }
  });

  // Update tooltip position if window is scrolled
  window.addEventListener('scroll', function() {
    tooltip.style.top = `${rect.top + window.pageYOffset}px`;
    tooltip.style.left = `${rect.right + window.pageXOffset}px`;
  });
}

