## Default app view is TheWelcome.vue file.
- How do you point to another app view file as the landing page?
    1.  Add the component at C:\Users\Jarod Wylie\Board-Game-Companion-In-VUE\src\router\index.js
- How do you create simple "count" variable and click a button to increase the value?
    - Normally you would put it in the data () {}, but with "script setup" I think that has changed. Adding count as just a variable for now.
    - still cannot just presss button to increment.
        - Reactivity of a variable is expressed by ref()
- How do you add a component to a page?
    1. In the main app view: C:\Users\Jarod Wylie\Board-Game-Companion-In-VUE\src\App.vue,
        - In the script import vue app: add first part of file name and indicate location of the vue file.
            -  Such as: (import CountButton from "./components/CountButton.vue";)
    2. In the template tag of main app view add the file name of the component as a tag. (such as <CountButton></CountButton>)
    

## Git Notes
### General Work Flow
1. Create feature branch with: git checkout -b "NewBranch"
2. Push branch to remote with: git push -u origin NewBranch
2. Make small but real progress.
3. Add all changes with: git add .
4. Commit change with comment describing the change: git commit -m "What was accomplished"
5. Push to remote branch with: git push -u origin NewBranch




## Other Thoughts
- VUE docs mention XSS attacks. I wonder if there is a resource to try to attack my own website to stress test for vulnerablilities.