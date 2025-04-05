# WEB102 Prework - Sea Monster Crowdfunding

Submitted by: **Abhinav Sai Tummapudi**

**Sea Monster Crowdfunding** is a website for the company Sea Monster Crowdfunding that displays information about the games they have funded.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

* [x] List anything else that you can get done to improve the app functionality!

### 🔍 1. Game Search Bar
- A search input allows users to filter games by name as they type.
- Instant results update without needing to press Enter.
- Case-insensitive matching using JavaScript `.filter()` and `.includes()`.

### 🎯 2. Navigation Scroll to “Our Games” Section
- A navigation link at the top smoothly scrolls to the “Our Games” section.
- Enables quick access for users looking to explore game listings.

### 🌙 3. Dark Mode Toggle
- A Night Mode button toggles between light and dark themes.
- Uses `classList.toggle()` to apply a `.dark-mode` class on `<body>`.
- Saves user preference in `localStorage` and restores it on page reload.

### ⬆️ 4. Back to Top Button
- A floating button appears when the user scrolls down the page.
- Clicking the button scrolls the page smoothly back to the top.

### 📊 5. Funding Progress Bars
- Each game card displays a `<progress>` bar showing how much funding it has reached.
- Uses `value` and `max` attributes to represent `pledged` vs `goal`.

### 🌈 6. Polished Pastel Theme (Visual Overhaul)
- Redesigned with a clean, modern pastel color palette.
- Includes:
  - Gradient backgrounds
  - Rounded cards and buttons
  - Soft hover shadows
  - Card popup on hover
  - Button onhover effect
- Designed for a calm and creative aesthetic, perfect for a game-focused platform.

---

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='./walk.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Kap.  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

- Preventing dark mode styles from conflicting with pastel design.
- Styling elements like inputs and progress bars consistently across themes.
- Aligning logo, text, and nav buttons cleanly in a flexible header layout.
- Making hover effects feel responsive but not aggressive.
- The hardest part
  - Picking pastel colors that balance warmth and contrast.
- Using local storage to store the light or dark mode.
  - Remembering dark mode preference after reload and across sessions.
## License

    Copyright 2025 Abhinav Sai Tummapudi

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
