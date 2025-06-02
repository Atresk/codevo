# C++ 入門介紹與環境建置指南

> 本文由 [ChatGPT @ OpenAI](https://openai.com/chatgpt) 協助產出，供教學用途使用。

## 🧠 什麼是 C++？

**C++** 是一種功能強大的程式語言，廣泛用於系統開發、遊戲、嵌入式裝置與高效能應用。

它的特色包括：

* 延伸自 C 語言（效率高）
* 支援物件導向設計
* 可精確控制硬體與記憶體

---

## ✨ 為什麼選擇學 C++？

* 許多競程（如 LeetCode、IOI）以 C++ 為主
* 理解底層運作的好工具
* 適用於效能要求極高的系統與遊戲引擎（如 Unreal Engine）

---

## 🧱 C++ 環境建置教學（Windows/Mac/Linux）

### ✅ 方法一：使用線上編譯器（免安裝）

1. 開啟 [https://www.programiz.com/cpp-programming/online-compiler](https://www.programiz.com/cpp-programming/online-compiler)
2. 輸入以下程式碼：

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}
```

3. 點下方「Run」按鈕即可執行

### ✅ 方法二：本地安裝 VS Code + g++

1. 安裝 [Visual Studio Code](https://code.visualstudio.com/)

2. 安裝 C++ 擴充套件（由 Microsoft 提供）

3. 安裝 g++：

   * Windows：安裝 [MinGW](https://sourceforge.net/projects/mingw/) 並設定環境變數
   * macOS：使用 Homebrew 安裝 `brew install gcc`
   * Linux：使用套件管理器安裝 `sudo apt install g++`

4. 建立 `.cpp` 檔案，例如 `main.cpp`

5. 編寫程式後，使用終端機編譯與執行：

```bash
g++ main.cpp -o main
./main
```

---

## 🎯 第一支 C++ 程式

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to C++!" << endl;
    return 0;
}
```

輸出：

```
Welcome to C++!
```

---

## 🛠 練習任務

* 改變 `cout` 的內容
* 嘗試數字加總：

```cpp
cout << 5 + 7 << endl;
```

---

📎 **出處與授權**
本篇內容由 [OpenAI ChatGPT](https://chat.openai.com/) 協助生成，版權開放給用戶自由編輯與使用於非商業教學平台。
