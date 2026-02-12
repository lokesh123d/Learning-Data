# Task Manager - DOM Manipulation Assignment

## Overview
A fully-featured task management application implementing all three steps of the assignment requirements with optimized, clean code.

## Features Implemented

### ✅ Step 1: Dynamic Task Creator
- **Input field** and **Add button** for creating tasks
- **Dynamic task card creation** using DOM methods (`createElement`, `appendChild`)
- Each task displays:
  - Task name
  - Delete button
- **Prevents empty task creation** with validation
- **Task count maintenance** (Total, Pending, Completed)

### ✅ Step 2: Task Status and DOM Traversing
- **Complete button** on each pending task
- **Visual updates** when task is completed (strikethrough, opacity)
- **Moves tasks** to completed section using DOM traversing
- Uses **DOM traversing methods**:
  - `parentElement`
  - `querySelector`
  - `closest`
  - `children`
- **Maintains counts** for:
  - Total tasks
  - Completed tasks
  - Pending tasks

### ✅ Step 3: Event Delegation and Dynamic Controls
- **Single event listener** on parent container using event delegation
- Uses `event.target` and `closest()` to identify clicked elements
- **Edit functionality** with inline input editing
- **Priority selector** (Low, Medium, High) that updates task styling dynamically:
  - High Priority: Red border
  - Medium Priority: Orange border
  - Low Priority: Blue border
- **Ensures only one task can be edited at a time**
- Edit/Save button toggling

## How to Use

1. **Open `index.html`** in any modern web browser
2. **Add a task**: Enter text in the input field and click "Add Task" or press Enter
3. **Set priority**: Use the dropdown to set task priority (changes border color)
4. **Edit a task**: Click "Edit" button, modify the text, then click "Save"
5. **Complete a task**: Click "Complete" button to move task to completed section
6. **Delete a task**: Click "Delete" button to remove the task

## File Structure
```
final/
├── index.html    # HTML structure
├── style.css     # Beautiful, responsive styling
├── script.js     # Optimized JavaScript with DOM manipulation
└── README.md     # This file
```

## Key Code Optimizations

1. **Event Delegation**: Single event listener instead of multiple listeners per task
2. **No Inline Handlers**: All event handling done in JavaScript
3. **DOM Traversing**: Uses modern methods like `closest()` and `querySelector()`
4. **Clean Code**: Well-commented, organized, and easy to understand
5. **Responsive Design**: Works on all screen sizes
6. **Visual Feedback**: Smooth animations and hover effects

## Technologies Used
- Pure HTML5
- Pure CSS3 (with gradients, animations)
- Vanilla JavaScript (ES6+)
- No external libraries or frameworks

## Browser Compatibility
Works on all modern browsers:
- Chrome
- Firefox
- Edge
- Safari

---
**Note**: This is a demonstration of DOM manipulation skills as per the assignment requirements.
