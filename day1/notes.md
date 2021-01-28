## Usage of Express for Creating a CRUD Application 

### Boot Phase
1. Create a nodeenv by 
   ```bash
        $ sudo pip install nodeenv
        $ sudo nodeenv env
        $ sudo . env/bin/activate # get onto the new virtual env.
   ```
2. Create necessary files.
    ```bash
        @carousel:~/project-dir$ npm init
    ```
   ```bash
        config
        ├── database.js # database information
        └── properties.js
        heros
        ├── heros.controller.js
        ├── heros.dao.js
        ├── heros.model.js
        └── heros.route.js
        server.js
   ```
3. Run the server.
   ```bash
        $ node server.js
   ```
4. Interact with the CRUD Controller via POSTMAN

### Create More Fun CRUD Application without Online Support (Vue.js on the client side)
  #### It's an Online Language Learning App
  ##### User Stories
  1. Users can register to the site by entering classical User Data
  2. There shall be a Media Model, which include Movies, Songs etc. (For the simplicity only Songs).
  3. Songs must store their lyrics and name, write info.
  4. Create a vocabulary and phares dictionary and make all of them selectable to users.
  5. The UI shall be easy to use and interactive.
   