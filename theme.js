/**
 * Theme Toggle Script
 * Handles light/dark theme switching with localStorage persistence
 */

(function() {
  'use strict';

  // Check for saved theme preference or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';

  // Apply theme immediately to prevent flash (before DOM loads)
  if (savedTheme === 'dark') {
    // Apply directly to documentElement for immediate effect
    if (document.body) {
      document.body.classList.add('dark-theme');
    } else {
      document.documentElement.classList.add('dark-theme');
    }
  }

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    // Ensure theme is applied to body
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
    }

    // Create theme toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'theme-toggle';
    toggleButton.setAttribute('aria-label', 'Toggle dark mode');
    toggleButton.setAttribute('title', 'Toggle dark/light mode');

    // Set initial icon
    updateToggleIcon(toggleButton);

    // Add click handler
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');

      // Save preference
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      // Update icon
      updateToggleIcon(toggleButton);

      console.log('Theme switched to:', isDark ? 'dark' : 'light');
    });

    // Add to page
    document.body.appendChild(toggleButton);

    console.log('Theme loaded:', savedTheme);
  });

  // Update toggle button icon based on current theme
  function updateToggleIcon(button) {
    const isDark = document.body.classList.contains('dark-theme');
    button.textContent = isDark ? '☀️' : '🌙';
  }
})();
