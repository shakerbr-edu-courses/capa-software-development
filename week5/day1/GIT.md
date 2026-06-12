# Git & GitHub Guide

## Week 5 - Day 1

This guide explains the Git and GitHub workflow we practiced in class. Follow these steps whenever you create or update a project.

---

# What Is Git?

Git is a version control system used to track changes in code.

Benefits:

- Save project history
- Track changes
- Restore previous versions
- Work with other developers
- Upload code to GitHub

---

# What Is GitHub?

GitHub is a website that stores Git repositories online.

Think of it as:

```text
Your Computer
      ↓
      Git
      ↓
    GitHub
```

Git tracks your changes locally.

GitHub stores your project online.

---

# Creating a New Project

Create a new project folder:

```bash
mkdir my-project
cd my-project
```

Initialize Git:

```bash
git init
```

Result:

Git starts tracking your project.

---

# Checking Project Status

To see the current status of your project:

```bash
git status
```

Example output:

```text
Untracked files:
  app.js
  package.json
```

This means Git sees new files that are not yet tracked.

---

# Adding Files

Add all files:

```bash
git add .
```

Meaning:

Tell Git to prepare all changed files for the next commit.

You can verify using:

```bash
git status
```

---

# Creating a Commit

Create a snapshot of your work:

```bash
git commit -m "Initial project"
```

Examples:

```bash
git commit -m "Added user routes"
```

```bash
git commit -m "Created login page"
```

```bash
git commit -m "Fixed bug in API"
```

A commit should describe what changed.

---

# Creating a Repository on GitHub

1. Sign in to GitHub
2. Click **New Repository**
3. Enter repository name
4. Choose Public or Private
5. Click **Create Repository**

Example:

```text
student-management-system
```

---

# Connecting Local Project to GitHub

GitHub will display a command similar to:

```bash
git remote add origin https://github.com/USERNAME/student-management-system.git
```

Example:

```bash
git remote add origin https://github.com/john/student-management-system.git
```

This connects your local project to GitHub.

---

# Pushing Code to GitHub

First push:

```bash
git push -u origin main
```

After the first push, future pushes become:

```bash
git push
```

Result:

Your code is uploaded to GitHub.

---

# Updating Your Project

Whenever you make changes:

## Step 1

Check status:

```bash
git status
```

## Step 2

Add changes:

```bash
git add .
```

## Step 3

Create commit:

```bash
git commit -m "Describe your changes"
```

## Step 4

Upload changes:

```bash
git push
```

---

# Downloading Changes

If changes were made on GitHub or by another developer:

```bash
git pull
```

This downloads the latest version.

---

# Daily Workflow

This is the workflow you should follow every day:

```text
Modify Code
     ↓
git status
     ↓
git add .
     ↓
git commit -m "message"
     ↓
git push
```

---

# Most Important Commands

Check status:

```bash
git status
```

Add files:

```bash
git add .
```

Create commit:

```bash
git commit -m "message"
```

Upload changes:

```bash
git push
```

Download changes:

```bash
git pull
```

Initialize repository:

```bash
git init
```

---

# Example Session

Create project:

```bash
mkdir backend
cd backend
```

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Create commit:

```bash
git commit -m "Initial commit"
```

Connect GitHub repository:

```bash
git remote add origin https://github.com/USERNAME/backend.git
```

Push project:

```bash
git push -u origin main
```

Later, after making changes:

```bash
git add .
git commit -m "Added new route"
git push
```

---

# Common Mistakes

## Forgot git add

Problem:

```bash
git commit -m "message"
```

Nothing gets committed.

Solution:

```bash
git add .
```

first.

---

## Forgot git push

Changes exist only on your computer.

Solution:

```bash
git push
```

---

## Wrong Repository URL

Push operation fails.

Solution:

Verify your repository URL on GitHub.

---

## Forgot git pull

Your local copy may become outdated.

Solution:

Before starting work:

```bash
git pull
```

---

# Course Recommendation

Before ending each coding session:

```bash
git status
git add .
git commit -m "Describe today's work"
git push
```

This ensures your project is always backed up and your progress is saved.

---

# Commands Students Should Memorize

```bash
git init

git status

git add .

git commit -m "message"

git push

git pull
```

These commands are enough for most beginner-level projects and daily development tasks.

Happy Coding!

**CAPA Software Development Course**