## Git & GitHub
Git is used for
- collab
- version control (maintain history)
- branching and merging
- backup all version details are store in .git folder in local device

### Terminal Commands:
- ls : list
- ls -hidden : access hidden files
- cd.. :  back
- cd filename : get into folder
- mkdir : create new folder
- cat filename : read content of file
- pwd : print current directory path
- mkdir foldername : make a new folder
- touch filename.txt : create a new file
- cat filename.txt : show content of a file
- clear : clear the screen
- exit : close the termin
- mv file1.txt folder/ : move file1 into folder
- mv oldname.txt newname.txt : rename a file
- rm filename.txt : delete a file

### Initialize Repo
- git init
- git remote add origin SSH link
- git remote -v

- `git add .`
- `git commit -m "message"`
- `git push origin master`

### Pull
- git fetch origin
- git pull origin master
- git add .
- git push origin master


### Git Commands:

- git init - initialize project to track

- git add . - stage all files
- git restore --staged filename - unstage file
- git add filename - track specific file

- git status - track status (modified, staged non staged and ready to commit)
- git log - information of commits with hash ids | khabar batao
- git log --one line : khabar batao short meh

- git diff - difference between commits 
- git diff recent commit hash id 

- git clone SSH url --> clone repo

- git commit -m"message" - to commit changes 
> if same hash id is generated then their is no change in files; no commit executed


- git push origin master ---> without setting upstream

- git push -u origin master --> setting upstrem   
- git push and git pull (no need to specify branch)


### Version control - git reset and git reset (hard)
git reset #hash id
- the hash id should of commit, which we want to access
- the later on updation after that specific commit are into modified section

git reset --hard #hash id
- complete change and no undo


### Advance Git 
- git branch branch_name ---> create new branch
- git checkout branch_name ---> enter in branch


- git checkout -b branch_name --> yeh branch meh enter karo agaar nahi hai toh bana lo fhir enter karo

- git merge branch_name ---> merge branch to main/master


- git commit -am "messge" ---> add and commit
- git merge --squash branch_name ---> merge with single commit, commit karna hota hai
- git rebase main/master ---> rewrite timeline


### Collab :

1. Ek banda project intialize karenga
2. github par upload karnega
3. add collaboraters (team)
4. team repo clone karenge --> git clone SSH url
5. members ke branch create kare --> git chekout -b branch_name (create branch) or git switch -c branch_name -> git branch (check *)

6. complete hone par commit aur push
7. main banda fetch aur merge karenga ---> git fetch -> git checkout branch_name or git switch branch_name -> git checkout main/master or git switch main/master -> git merge branch_name
8. re-push karenga --> git push origin master/main
9. get code on memebers --> git pull


### Git Comments:
- feat: added new feature
- fix: fixed bug & issue
- style: changed formattting and UI
- refactor: improved code structure
- docs: chnages releated to documentation
- chore: minor code keeping (update and rename folder)
