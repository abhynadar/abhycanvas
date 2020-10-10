{
"createdOn": "10-10-2020",
"title": "Quick notes on Git",
"postId": "101",
"tags": ["tag1", "tag2"]
}
/**content**/

I have been away from writing anything for a long time and instead have been fooling around with other stuffs like just plain reading, growing mustache, trying to learn swimming, trying to learn to play acoustic guitar and trying my hands at photography. To be honest I have not given up on them yet but neither have I been able to hang on to them in a disciplined manner. So here I am back to my writing after a long gap.

This time its going to be quick notes on **Git**

- Git is a file repository.
- As opposed to other repositories like SVN Git thinks of its data more like a snapshot of a mini filesystem.
- All operations in Git are local. (Entire history of the project is stored locally in your working directory)
  - Browsing project history.
  - Viewing all changes to a file.
- Git uses Checksum to track repository items
  - Everything in Git is check-summed
  - It uses SHA-1 hash for generating check sum values
- All actions in Git only add data to Git database.

- There are three main states in Git

  - Committed – means that data is safely stored in your local database
  - Modified – means you have modified the files but have not yet committed to your local database.
  - Staged – means that you have marked a modified file in its current version to go into your next commit snapshot.

- Correspondingly there are three main sections of a Git Project –

  - Git directory (repository) – is where Git stores the metadata and object database for the project. This is what is copied when you clone a repository from another computer.
  - Staging Area - is a simple file, generally contained in your Git directory, which stores information about what will go into your next commit. Also referred to as the index.
  - Working Directory – is a single checkout of one version of the project.

- There are two types of files

  - Tracked – files that were part of the last snapshot
  - UnTracked – any files in your working directory that was not in your last snapshot and is not in your staging area.

- Basic Git Workflow –

  - You modify your files
  - You stage the files
    - You do a commit.

- Getting ready with Git

  - Go to [https://github.com/signup/free](https://github.com/signup/free) and setup your account.
  - Download and Installing Git - [http://git-scm.com/download/win](http://git-scm.com/download/win)
  - Setup your Identity
  - After installing goto Start -&gt; All Programs -&gt; Git -&gt; Git Bash
  - At \$ prompt type

    ```bash
    git config --global user.name “Your Name”
    git config --global user.email “Your email address”
    ```

  - To verify that this has been saved at \$ prompt

    ```bash
    type git config --list
    ```

  - You can also go to c:\documents and settings\username\ (or C:\Users\username) and open the .gitconfig file in any editor to see the user.name and user.email details you just provided above.
  - Now go to the site login and create your First repository
  - Back to&nbsp;your Git Bash to clone your repository to work locally at \$ prompt type the following:

    ```bash
    git clone “your repository url” “d:\gitwork\projectfolder”
    ```

  - Changing over to the working folder at \$ prompt type the following: cd d:/ GitWork/projectfolder
  - Checking the status at \$ prompt type git status
  - Create a sample text file with some dummy content HelloWorld.txt at D:/GitWork/projectfolder folder
  - Now at the \$ prompty type git add HelloWorld.txt and then git status which should show our HelloWorld.txt as untracked file.
  - To commit the changes just say git commit and enter the comments when requested.
  - Next to synch up your online repository with local database you type following: git push -u origin master
  - Now if you check the online repository contents in your account you should be able to see your files and changes.

- Working with Git Bash -
  - At \$ sign command prompt type echo ‘whatever text you want to type here’ which will cause the editor to spew out that text back on your command prompt.
  - You can also setup an editor of your choice by typing at \$ prompt
    ```bash
    git config --global core.editor <editorname>
    ```
  - You can also setup a diff tool using \$ prompt
    ```bash
    git config --global merge.tool <toolname>
    ```

There is an excellent book online here - [http://git-scm.com/book](http://git-scm.com/book)
