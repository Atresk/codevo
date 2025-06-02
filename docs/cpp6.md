# C++ 類別（Class）教學：打造自己的資料模型！

> 本文由 [ChatGPT @ OpenAI](https://openai.com/chatgpt) 協助產出，供教學用途使用。

## 👋 為什麼要用類別？

當你寫程式越來越大，會需要把資料和功能「包裝」在一起，這時候就需要用到 **類別（Class）**。

類別是 C++ 中「物件導向程式設計（OOP）」的核心，讓你可以建立屬於自己的「資料類型」。

---

## 💡 類別是什麼？

* 一種自訂的資料型態
* 可以有「屬性（變數）」+「方法（函式）」
* 就像是設計一個「模具」來生產很多物件

---

## 🧱 類別語法長怎樣？

```cpp
class 類別名稱 {
public:
    // 成員變數
    // 成員函式
};
```

---

## 🔍 類別範例：定義一個學生 Student

```cpp
#include <iostream>
using namespace std;

class Student {
public:
    string name;
    int score;

    void sayHi() {
        cout << "大家好，我是 " << name << "，分數是 " << score << " 分！" << endl;
    }
};

int main() {
    Student s1;
    s1.name = "小明";
    s1.score = 95;
    s1.sayHi();

    return 0;
}
```

### 🧠 解釋：

* `class Student`：定義一個名為 Student 的類別
* `name` 和 `score` 是成員變數（屬性）
* `sayHi()` 是成員函式（方法）
* `s1` 是 Student 類別的實體（物件）

---

## 🛠 建構子（Constructor）

你可以讓物件建立時就自動設定初始值：

```cpp
class Student {
public:
    string name;
    int score;

    Student(string n, int s) {
        name = n;
        score = s;
    }

    void sayHi() {
        cout << "我是 " << name << "，我考了 " << score << " 分！" << endl;
    }
};
```

使用方式：

```cpp
Student s2("小華", 88);
s2.sayHi();
```

---

## 📦 類別 vs 結構（struct）

在 C++ 中，`class` 和 `struct` 很像，不同在於：

| 關鍵字     | 預設權限 |
|----------|--------|
| `class`  | private |
| `struct` | public  |

兩者都可以用來包裝資料和函式。

---

## 🧱 封裝（Encapsulation）

類別可以隱藏內部資料，只讓外部用特定方式操作：

```cpp
class BankAccount {
private:
    int balance;

public:
    BankAccount() {
        balance = 0;
    }

    void deposit(int amount) {
        balance += amount;
    }

    int getBalance() {
        return balance;
    }
};
```

```cpp
BankAccount acc;
acc.deposit(100);
cout << "目前餘額：" << acc.getBalance() << endl;
```

---

## 📚 延伸學習建議

* **繼承（Inheritance）**
* **多型（Polymorphism）**
* **this 指標**
* **類別與檔案分離（header + cpp）**

---

## 🎯 小結

類別讓你可以建立有結構、有功能的資料型態，是撰寫大型 C++ 程式的基礎。

學會類別後，你就能開始用 C++ 實作：

* 學生資料系統
* 遊戲角色
* 金融帳戶管理
* 各種模型與物件設計

> 類別的精神就是「資料 + 行為」包成一個單位！

---

🧾 **出處與授權**  
本篇內容由 [OpenAI ChatGPT](https://chat.openai.com/) 協助生成，版權開放給用戶自由編輯與使用。
