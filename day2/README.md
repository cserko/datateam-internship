## Day 2

# Research Topics

These are the explanation of the subjects written with my own words & references.
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
* While the **Waterfall** was the most popular development methodology, it was not meeting with the requirements of the stakeholders very well. It requires projects to be implemented from bottom to top without showing intermediary results, components until it's finished. 
* **Waterfall** methodology also requires a rigorous documentation of the project which sometimes lead to working on the documentation more than the project development itself.
* **Agile** essentially disagrees with **Waterfall**, and proposes a dynamic approach which focuses more on the development of the product. **Stakeholders** are informed often so that possible disagreements can be resolved immediately. In the end, the stakeholders will be more satisfied since they were too in the development phase indirectly.
* **Scrum** is a most popular Agile Methodology, which divides the whole project into phases so called **Sprints**.Each **Sprint**, the **Scrum Master** (the **servant leader** of the development team) instructs the developers to which requirements (use cases) will be implemented during the **Sprint**. The **Scrum Master** curates these requirements from a repository so called **Product Backlog** that is created by the **Product Owner** and Stakeholders, At the end of each Sprint, the stakeholder are informed about the current situation of the project. Also the project team does **Daily Scrum**s which is a short meeting to where each member informs the team what to do today, and did yesterday.
### <div id=2> **Relational DB vs NoSQL and Graph DB** </div>
* Relational Databases (RDBMS) are the most used, and oldest database management systems. RMDBMS enforces database managers follow a strict pattern to store data. Databases consist of tables which identify a class of objects. Those objects are stored as records in the tables. Objects or records may have many attributes which describes the table. The keypoint is, the tables are very well structured, and don't allow much flexibility which is favourable in Cloud Systems(Data Warehouses)
* Most popular RDBMS are MySQL, Postgres etc.
* No-SQL databases are favourable for their ease-of-use, scalability, resilience, and availability features. NoSQL does not store structured data as RDBS' tables. The data is most often stored in key-value pairs or JSON format.
* Graph Databases such as Neo4j, values the relationships between data as much as the data itself. If in an application, queries requires traversing many data points to reach the result. A Graph Database may come handy, For example, if Facebook wanted to infer a very complex relationship graph as a model from the users. The read time can be dramatically improved as using a Graph DB.

![CAP Theorem](https://docs.microsoft.com/en-us/dotnet/architecture/cloud-native/media/cap-theorem.png)
#####  Figure: The CAP Theorem which shows the tradeoff between NOSQL and RDMS
<br>

### <div id=3> **Version Control and Configuration Management** </div>

* **Version Control**, a component of softaware configuration management, helps manage a complex project by either dividing or versioning it. 
* When a team implements a complex system, each member may require a reserved place not to damage the rest of the project or save her/his work being damaged by others. In the end, all small components can be merged to deploy the project as a whole.
* Besides, since software is a continuous system, which can be improved or its bugs are resolved after the deployment, the new version can be developed over the former one without damaging the previous versions.
* Git and SVN are examples of source control software. 


### <div id=4> **Continuous Integration** </div>

### <div id=5> **Cookie, Local, Session Storage** </div>
* Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network.
* Data stored in a cookie is created by the server upon your connection. This data is labeled with an ID unique to you and your computer. When the cookie is exchanged between your computer and the network server, the server reads the ID and knows what information to specifically serve to you. (Kaspersky)
* How cookies used <br>
    1. Session management. For example, cookies let websites recognize users and recall their individual login information and preferences, such as sports news versus politics.
    2. Personalization. Customized advertising is the main way cookies are used to personalize your sessions. You may view certain items or parts of a site, and cookies use this data to help build targeted ads that you might enjoy.
    3. Tracking. Shopping sites use cookies to track items users previously viewed, allowing the sites to suggest other goods they might like and keep items in shopping carts while they continue shopping. (Kaspersky)

### <div id=6> **ACID and SOLID** </div>

### <div id=7> **HTTP Requests** </div>
An HTTP client sends an HTTP request to a server in the form of a request message.

* Most used Requests: <br>
    1.  GET: <br> The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.
    2.  POST: <br> A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.

    3. PUT: <br> Replaces all the current representations of the target resource with the uploaded content.
    4.  DELETE: <br> Removes all the current representations of the target resource given by URI. (Tutorialspoint)

### <div id=8> **ORM** </div>








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