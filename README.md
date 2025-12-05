# 🔒 Developer Tools Blocker (F12 & DevTools Protection Script)
This JavaScript snippet prevents users from opening browser developer tools  
such as **F12**, **Ctrl + Shift + I**, **Ctrl + U**, and various platform-specific shortcuts.  
It also includes a detection mechanism that alerts the user if DevTools is triggered.

- This JavaScript is currently applied to my website, which has over 3,000 users!
- It may not be perfect, but this JavaScript provides a solid level of basic protection.

> ⚠️ **Important Note:**  
> This script does *not* guarantee perfect protection against advanced users or developers.  
> It is only effective for deterring general users and preventing accidental DevTools access.

---

## 🚀 Features

### ⛔ Blocks Common DevTools Shortcuts
The script prevents multiple keyboard combinations used to open DevTools:

- **F12**
- **Ctrl + Shift + I / J / C**
- **Ctrl + U**
- **Cmd + Alt + I / J / C / U**
- **Cmd + Shift + C**
- Works on **Chrome, Firefox, Edge, Safari**

### 🔍 Detects DevTools Execution
If DevTools is opened through any non-keyboard method  
(right-click → Inspect, menu button, etc.), a warning alert appears:

## 📝 Usage

Include the script directly in your webpage:

```html
<script src="devtools-blocker.js"></script>
```

## ⚠️ Limitations

> ⚠️ **Important:**  
> This script is *not* a security mechanism.  
> It only discourages casual or novice users from opening DevTools.

- ❌ Cannot prevent **advanced users** or developers from bypassing protections  
- 🔧 Browser vendors may change DevTools internals, reducing reliability  
- 🔒 Should **not** be used in security-critical environments  
- 🧪 Best suited for:
  - Education-focused web applications  
  - Kiosk, public display, or exhibition environments  
  - Preventing accidental DevTools access  
  - Blocking naive attempts to inspect source code or static assets  

---

## ☕ Support

If this project helped you,  
you can **buy me a coffee** and support my work :)

👉 **https://buymeacoffee.com/yhsang2**

Thank you! 🙌

---

## 📄 License

This project is licensed under the **MIT License**.
