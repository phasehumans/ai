Git is used for
- collab
- version control (maintain history)
- branching and merging
- backup
all version details are store in .git folder in local device

#### Terminal Commands:
ls - list
ls-hidden - access hidden files
cd.. - back
cd filename - get into folder
mkdir - create new folder
cat filename- read content of file

#### Git Commands:
git init - initialize project to track

git add. - stage file
git restore --staged filename - unstage file
git add filename - track specific file

git status - track status (modified, staged non staged and ready to commit)
git log - information of commits with hash ids
git log --one line

git diff - difference between commits 
git diff recent commit hash id 

git commit -m"message" - to commit changes 
- if same hash id is generated then their is no change in files; no commit executed

#### Version control - git reset and git reset (hard)
git reset hash id
- the hash id should of commit, which we want to access
- the later on updation after that specific commit are into modified section

git reset --hard hash id
- complete change and no undo


#### Advance Git 
- git branch branch_name ---> create new branch
- git checkout branch_name ---> enter in branch
- git checkout -b branch_name --> yeh branch meh enter karo agaar nahi hai toh bana lo fhir enter karo
- git merge branch_name ---> merge branch to main/master


- git commit -am "messge" ---> add and commit
- git merge --squash branch_name ---> merge with single commit, commit karna hota hai
- git rebase main ---> rewrite timeline


