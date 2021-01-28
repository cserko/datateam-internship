## Day 2

# Research Topics

These are the explanation of the subjects written with my own words.
## Table of Contents
1. <a href=#1> Agile Manifest and Scrum </a>
2. <a href=#2> Relational DB vs NoSQL and Graph DB</a>
3. <a href=#3> Version Control and Configuration Management</a>
4. <a href=#4> Continuous Integration </a>
5. <a href=#5> Cookie, Local, Session Storage </a>
6. <a href=#6> ACID and SOLID </a>
7. <a href=#7> HTTP Requests </a>
8. <a href=#8> ORM </a>



### <div id=1> **Agile Manifest** </div>
* While the **Waterfall** was the most popular development methodology, it was not meeting with the requirements of the vendors very well. It requires projects to be implemented from bottom to top without showing intermediary results, components until it's finished. 
* **Waterfall** methodology also requires a rigorous documentation of the project which sometimes lead to working on the documentation more than the project development itself.
* **Agile** essentially disagrees with **Waterfall**, and proposes a dynamic approach which focuses more on the development of the product. **Stakeholders** are informed often so that possible disagreements can be resolved immediately. In the end, the stakeholders will be more satisfied since they were too in the development phase indirectly.
* **Scrum** is a most popular Agile Methodology, which divides the whole project into phases so called **Sprints**.Each **Sprint**, the **Scrum Master** (the **servant leader** of the development team) instructs the developers to which requirements (use cases) will be implemented during the **Sprint**. The **Scrum Master** curates these requirements from a repository so called **Product Backlog** that is created by the **Product Owner** and Stakeholders, At the end of each Sprint, the stakeholder are informed about the current situation of the project. Also the project team does **Daily Scrum**s which is a short meeting to where each member informs the team what to do today, and did yesterday.
### <div id=2> **Relational DB vs NoSQL and Graph DB** </div>
* Relational Databases (RDBMS) are the most used, and oldest database management systems. RMDBMS enforces database managers follow a strict pattern to store data. Databases consist of tables which identify a class of objects. Those objects are stored as records in the tables. Objects or records may have many attributes which describes the table. The keypoint is, the tables are very well structured, and don't allow much flexibility which is favourable in Cloud Systems(Data Warehouses)
* Most popular RDBMS are MySQL, Postgres etc.


![CAP Theorem](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/media/cap-theorem.png)
#####  The CAP Theorem which shows the tradeoff between NOSQL and RDMS

# VUE.JS Tutorial
### Today implement a Complete Web APP finish the leftover from yesterday

1. User List
2. Song List
3. When Click on the Song lyrics show up
4. All words are selectable

```bash
    public
    ├── favicon.ico
    └── index.html
    src
    ├── App.vue
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── AddTodo.vue
    │   ├── HelloWorld.vue
    │   ├── layout
    │   │   └── Header.vue
    │   ├── TodoItem.vue
    │   └── Todos.vue
    └── main.js

    3 directories, 10 files
```