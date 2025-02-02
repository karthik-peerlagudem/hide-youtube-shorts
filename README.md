# 🛑 Hide YouTube Shorts – Chrome Extension  
*A lightweight, seamless Chrome extension to remove YouTube Shorts from your browsing experience.*  

## 🚀 Overview  
YouTube Shorts can be distracting and intrusive, especially when you just want to watch long-form content. **Hide YouTube Shorts** is a simple yet effective Chrome extension that removes Shorts from your homepage and navigation, ensuring a clean and focused YouTube experience.  

This extension **hides Shorts instantly** using CSS and **prevents them from reappearing** with efficient JavaScript monitoring—**no flicker, no delay, just a clean feed**.  

---

## ✨ Features  
✅ **Instantly hides Shorts** from the homepage before they load.  
✅ **Prevents dynamic reloading of Shorts** using MutationObserver.  
✅ **Lightweight & efficient** – No background processes, minimal CPU usage.  
✅ **Works seamlessly** without affecting other YouTube content.  

---

## 🔧 Installation  
Clone or download this repository:  

```sh
git clone https://github.com/yourusername/hide-youtube-shorts.git
cd hide-youtube-shorts
```

# YouTube Shorts Blocker Extension

1. Open Chrome and go to `chrome://extensions/`.
2. Enable Developer Mode (toggle at the top right).
3. Click `Load Unpacked` and select this project folder.
4. Done! YouTube Shorts will be removed automatically. 🎉

## 🛠️ How It Works
- **CSS Injection**: Instantly hides Shorts elements before they render.
- **JavaScript Cleanup**: Removes any remaining Shorts elements dynamically.
- **MutationObserver**: Watches for page changes and keeps Shorts removed.
- **Performance Optimized**: Uses debounced event handling to avoid unnecessary processing.

## 🚀 Roadmap & Future Enhancements
- 🔹 **Options Page** – Allow users to toggle Shorts hiding dynamically.
- 🔹 **Support for More YouTube Layouts** – Ensure compatibility with future YouTube updates.
- 🔹 **Firefox Support** – Expand to Mozilla Firefox as a WebExtension.

Let’s make YouTube distraction-free together! 🚀
